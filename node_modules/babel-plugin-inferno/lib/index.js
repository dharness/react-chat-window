'use strict';

var isComponent = require('./helpers/is-component');
var isNullOrUndefined = require('./helpers/is-null-or-undefined');
var VNodeFlags = require('inferno-vnode-flags');
var svgAttributes = require('./attrsSVG');
var NULL;

function _stringLiteralTrimmer(lastNonEmptyLine, lineCount, line, i) {
	var isFirstLine = (i === 0);
	var isLastLine = (i === lineCount - 1);
	var isLastNonEmptyLine = (i === lastNonEmptyLine);
	// replace rendered whitespace tabs with spaces
	var trimmedLine = line.replace(/\t/g, ' ');
	// trim leading whitespace
	if (!isFirstLine) {
		trimmedLine = trimmedLine.replace(/^[ ]+/, '');
	}
	// trim trailing whitespace
	if (!isLastLine) {
		trimmedLine = trimmedLine.replace(/[ ]+$/, '');
	}
	if (trimmedLine.length > 0) {
		if (!isLastNonEmptyLine) {
			trimmedLine += ' ';
		}
		return trimmedLine;
	}
	return '';
}

function handleWhiteSpace(value) {
	var lines = value.split(/\r\n|\n|\r/);
	var lastNonEmptyLine = 0;

	for (var i = lines.length - 1; i > 0; i--) {
		if (lines[ i ].match(/[^ \t]/)) {
			lastNonEmptyLine = i;
			break;
		}
	}
	var str = lines
		.map(_stringLiteralTrimmer.bind(null, lastNonEmptyLine, lines.length))
		.filter(function (line) {
			return line.length > 0;
		})
		.join('');

	if (str.length > 0) {
		return str;
	}
	return '';
}

function getHoistedNode(lastNode, path) {
	if (path.parentPath === null) {
		var body = path.node.body;
		var index = body.indexOf(lastNode);
		return {
			node: path.node,
			index: index
		};
	} else {
		return getHoistedNode(path.node, path.parentPath);
	}
}

function addCreateVNodeImportStatement(t, toInsert, opts) {
	var node = toInsert.node;
	var index = toInsert.index;

	if (opts.imports) {
		node.body.splice(index, 0, t.importDeclaration([
			t.ImportSpecifier(t.identifier('createVNode'), t.identifier(opts.pragma || 'createVNode'))
		], t.stringLiteral(typeof opts.imports === 'string' ? opts.imports : 'inferno')));
	} else if (!opts.pragma) {
		node.body.splice(index, 0, t.VariableDeclaration('var', [
			t.VariableDeclarator(
				t.Identifier('createVNode'),
				t.memberExpression(t.identifier('Inferno'), t.identifier('createVNode'))
			)
		]));
	}
}

function getVNodeType(t, type) {
	var astType = type.type;
	var component = false;
	var flags;

	if (astType === 'JSXIdentifier') {
		if (isComponent(type.name)) {
			component = true;
			flags = VNodeFlags.ComponentUnknown;
		} else {
			var tag = type.name;

			type = t.StringLiteral(tag);
			switch (tag) {
			case 'svg':
				flags = VNodeFlags.SvgElement;
				break;
			case 'input':
				flags = VNodeFlags.InputElement;
				break;
			case 'textarea':
				flags = VNodeFlags.TextareaElement;
				break;
			case 'select':
				flags = VNodeFlags.SelectElement;
				break;
			case 'media':
				flags = VNodeFlags.MediaElement;
				break;
			default:
				flags = VNodeFlags.HtmlElement;
			}
		}
	} else if (astType === 'JSXMemberExpression') {
		component = true;
		flags = VNodeFlags.ComponentUnknown;
	}
	return {
		type: type,
		isComponent: component,
		flags: flags
	};
}

function getVNodeChildren(t, astChildren, opts) {
	var children = [];
	var parentCanBeKeyed = false;

	for (var i = 0; i < astChildren.length; i++) {
		var child = astChildren[ i ];
		var vNode = createVNode(t, child, opts);

		if (!isNullOrUndefined(vNode)) {
			children.push(vNode);

			/*
			 * Loop direct children to check if they have key property set
			 * If they do, flag parent as hasKeyedChildren to increase runtime performance of Inferno
			 * When key already found within one of its children, they must all be keyed
			 */
			if (parentCanBeKeyed === false && child.openingElement) {
				var astProps = child.openingElement.attributes;
				var len = astProps.length;

				while (parentCanBeKeyed === false && len-- > 0) {
					var prop = astProps[ len ];

					if (prop.name && prop.name.name === 'key') {
						parentCanBeKeyed = true;
					}
				}
			}
		}
	}

	// Fix: When there is single child parent cant be keyed either, its faster to use patch than patchKeyed routine in that case
	var hasSingleChild = children.length === 1;

	return {
		parentCanBeKeyed: hasSingleChild === false && parentCanBeKeyed,
		children: hasSingleChild ? children[ 0 ] : t.arrayExpression(children)
	};
}

function getValue(t, value) {
	if (!value) {
		return t.BooleanLiteral(true);
	}

	if (value.type === 'JSXExpressionContainer') {
		return value.expression;
	}

	return value;
}

function getName(t, name) {
	if (name.indexOf('-') !== 0) {
		return t.StringLiteral(name);
	}
	return t.identifier(name);
}

function getVNodeProps(t, astProps, isComponent) {
	var props = [];
	var key = null;
	var ref = null;
	var className = null;
	var hasKeyedChildren = false;
	var hasNonKeyedChildren = false;
	var noNormalize = false;

	for (var i = 0; i < astProps.length; i++) {
		var astProp = astProps[ i ];

		if (astProp.type === 'JSXSpreadAttribute') {
			props.push({
				astName: null,
				astValue: null,
				astSpread: astProp.argument
			});
		} else {
			var propName = astProp.name;

			if (propName.type === 'JSXIdentifier') {
				propName = propName.name;
			} else if (propName.type === 'JSXNamespacedName') {
				propName = propName.namespace.name + ':' + propName.name.name;
			}

			if (!isComponent && (propName === 'className' || propName === 'class')) {
				className = getValue(t, astProp.value);
			} else if (!isComponent && (propName === 'htmlFor')) {
				props.push({
                    astName: getName(t, 'for'),
                    astValue: getValue(t, astProp.value),
                    astSpread: null
				})
			} else if (propName.substr(0, 11) === 'onComponent' && isComponent) {
				if (!ref) {
					ref = t.ObjectExpression([]);
				}
				ref.properties.push(
					t.ObjectProperty(getName(t, propName), getValue(t, astProp.value))
				);
			} else if (!isComponent && propName in svgAttributes) {
				// React compatibility for SVG Attributes
				props.push({
					astName: getName(t, svgAttributes[propName]),
					astValue: getValue(t, astProp.value),
					astSpread: null
				});
			} else {
				switch (propName) {
				case 'noNormalize':
					noNormalize = true;
					break;
				case 'hasNonKeyedChildren':
					hasNonKeyedChildren = true;
					break;
				case 'hasKeyedChildren':
					hasKeyedChildren = true;
					break;
				case 'ref':
					ref = getValue(t, astProp.value);
					break;
				case 'key':
					key = getValue(t, astProp.value);
					break;
				default:
					props.push({
						astName: getName(t, propName),
						astValue: getValue(t, astProp.value),
						astSpread: null
					});
				}
			}
		}
	}
	/* eslint no-return-assign:0 */
	return {
		props: isNullOrUndefined(props) ? NULL : props = t.ObjectExpression(
				props.map(function (prop) {
					return !prop.astSpread
						? t.ObjectProperty(prop.astName, prop.astValue)
						: t.SpreadProperty(prop.astSpread);
				})
			),
		key: isNullOrUndefined(key) ? NULL : key,
		ref: isNullOrUndefined(ref) ? NULL : ref,
		hasKeyedChildren: hasKeyedChildren,
		hasNonKeyedChildren: hasNonKeyedChildren,
		noNormalize: noNormalize,
		className: isNullOrUndefined(className) ? NULL : className
	};
}

function isAstNull(ast) {
	if (!ast) {
		return true;
	}
	if (ast.type === 'ArrayExpression' && ast.elements.length === 0) {
		return true;
	}
	return ast.name === 'null';
}

function createVNodeArgs(t, flags, type, className, children, props, key, ref, noNormalize) {
	var args = [];
	var hasClassName = !isAstNull(className);
	var hasChildren = !isAstNull(children);
	var hasProps = props.properties && props.properties.length > 0;
	var hasKey = !isAstNull(key);
	var hasRef = !isAstNull(ref);
	args.push(t.NumericLiteral(flags));
	args.push(type);

	if (hasClassName) {
		args.push(className);
	} else if (hasChildren || hasProps || hasKey || hasRef || noNormalize) {
		args.push(NULL);
	}

	if (hasChildren) {
		args.push(children);
	} else if (hasProps || hasKey || hasRef || noNormalize) {
		args.push(NULL);
	}

	if (hasProps) {
		args.push(props);
	} else if (hasKey || hasRef || noNormalize) {
		args.push(NULL);
	}

	if (hasKey) {
		args.push(key);
	} else if (hasRef || noNormalize) {
		args.push(NULL);
	}

	if (hasRef) {
		args.push(ref);
	} else if (noNormalize) {
		args.push(NULL);
	}

	if (noNormalize) {
		args.push(t.BooleanLiteral(true));
	}

	return args;
}

function createVNode(t, astNode, opts) {
	var astType = astNode.type;

	switch (astType) {
	case 'JSXElement':
		var openingElement = astNode.openingElement;
		var vType = getVNodeType(t, openingElement.name);
		var vProps = getVNodeProps(t, openingElement.attributes, vType.isComponent);
		var childrenResults = getVNodeChildren(t, astNode.children, opts);
		var vChildren = childrenResults.children;

		var flags = vType.flags;
		var props = vProps.props;

		if (vProps.hasKeyedChildren || childrenResults.parentCanBeKeyed) {
			flags = flags | VNodeFlags.HasKeyedChildren;
		}
		if (vProps.hasNonKeyedChildren) {
			flags = flags | VNodeFlags.HasNonKeyedChildren;
		}
		if (vType.isComponent && vChildren) {
			var addChildrenToProps = true;

			if (vChildren.type === 'ArrayExpression' && vChildren.elements.length === 0) {
				addChildrenToProps = false;
			}
			if (addChildrenToProps) {
				if (props.properties) {
					props.properties.push(
							t.ObjectProperty(
								t.identifier('children'),
								vChildren
							)
						);
				} else {
					props = t.ObjectExpression([
						t.ObjectProperty(
								t.identifier('children'),
								vChildren
							)
					]);
				}
			}
			vChildren = NULL;
		}
		return t.callExpression(
				t.identifier(opts.pragma || 'createVNode'),
				createVNodeArgs(
					t,
					flags,
					vType.type,
					vProps.className,
					vChildren,
					props,
					vProps.key,
					vProps.ref,
					vProps.noNormalize
				)
			);
	case 'JSXText':
		var text = handleWhiteSpace(astNode.value);

		if (text !== '') {
			return t.StringLiteral(text);
		}
		break;
	case 'JSXExpressionContainer':
		var expression = astNode.expression;

		if (expression && expression.type !== 'JSXEmptyExpression') {
			return expression;
		}
		break;
	default:
			// TODO
		break;
	}
}

module.exports = function (options) {
	var t = options.types;
	NULL = t.identifier('null');

	return {
		visitor: {
			JSXElement: {
				enter: function (path, state) {
					var opts = state.opts;
					var node = createVNode(t, path.node, opts);

					path.replaceWith(node);
					if (!opts.hoistCreateVNode) {
						opts.hoistCreateVNode = true;
						addCreateVNodeImportStatement(t, getHoistedNode(path.node, path.parentPath), opts);
					}
				}
			}
		},
		inherits: require('babel-plugin-syntax-jsx')
	};
};
