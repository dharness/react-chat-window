// Helper to transform an expression into an expression statement.
module.exports = function toExpression(t, expression) {
	if (t.isConditionalExpression(expression)) {
		return t.toExpression(expression);
	}
	if (t.isFunctionExpression(expression)) {
		return t.toExpression(expression);
	}
	if (!t.isStatement(expression)) {
		return t.toExpression(expression);
	}
	return expression;
};
