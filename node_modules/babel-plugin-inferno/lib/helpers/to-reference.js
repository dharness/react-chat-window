'use strict';

var isNullOrUndefined = require('./is-null-or-undefined');
var memberExpressionSplitter = /\./g;

// Helper to transform a JSX identifier into a normal reference.
module.exports = function toReference(t, node, identifier) {
	identifier = isNullOrUndefined(identifier) ? false : identifier;
	if (typeof node === 'string') {
		if (memberExpressionSplitter.test(node)) {
			return node.
				split(memberExpressionSplitter).
				map(function (s) {
					return t.identifier(s);
				}).
				reduce(function (obj, prop) {
					return t.memberExpression(obj, prop);
				});
		}

		return t.identifier(node);
	}
	if (t.isJSXIdentifier(node)) {
		return identifier ? t.identifier(node.name) : t.literal(node.name);
	}
	if (t.isJSXMemberExpression(node)) {
		return t.memberExpression(
			toReference(t, node.object, true),
			toReference(t, node.property, true)
		);
	}
	return node;
};
