var isNullOrUndefined = require('./is-null-or-undefined');
var toExpression = require('./to-expression');

// Helper to flatten out sequence expressions into a top level
// expression statements.
module.exports = function flattenExpressions(t, expressions, nodes) {
	nodes = isNullOrUndefined(nodes) ? [] : nodes;
	return expressions.reduce(function (nodes, node) {
		if (t.isSequenceExpression(node)) {
			return flattenExpressions(t, node.expressions, nodes);
		}

		nodes.push(toExpression(t, node));
		return nodes;
	}, nodes);
};
