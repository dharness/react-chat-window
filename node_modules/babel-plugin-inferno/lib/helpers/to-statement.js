// Helper to transform an expression into an expression statement.
module.exports = function toStatement(t, expression) {
	if (t.isConditionalExpression(expression)) {
		return t.toIfStatement(expression);
	}
	if (t.isFunctionExpression(expression)) {
		return t.toStatement(expression);
	}
	if (!t.isStatement(expression)) {
		return t.expressionStatement(expression);
	}
	return expression;
};
