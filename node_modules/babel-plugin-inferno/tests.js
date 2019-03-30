var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var chai = require('chai');
var plugin = require('./lib/index.js');
var expect = chai.expect;
var babel = require('babel-core');
var babelSettings = {
	presets: [['es2015', {modules: false}]],
	plugins: [
		[plugin, {imports: true}],
		'syntax-jsx'
	]
};

describe('Array', function() {

	function pluginTransform(input) {
		return babel.transform(input, babelSettings).code;
	}

	function transform(input) {
		return pluginTransform(input).replace('import { createVNode } from "inferno";\n', '');
	}

	describe('Basic scenarios', function() {
		it('Should transform div', function () {
			expect(pluginTransform('<div></div>')).to.equal('import { createVNode } from "inferno";\ncreateVNode(2, "div");');
		});

		it('Should transform single div', function () {
			expect(pluginTransform('<div>1</div>')).to.equal('import { createVNode } from "inferno";\ncreateVNode(2, "div", null, "1");');
		});

		it('#Test to verify stripping imports work#', function () {
			expect(transform('<div>1</div>')).to.equal('createVNode(2, "div", null, "1");');
		});

		it('className should be in third parameter as string when its element', function () {
			expect(transform('<div className="first second">1</div>')).to.equal('createVNode(2, "div", "first second", "1");');
		});

		it('className should be in fifth parameter as string when its component', function () {
			expect(transform('<UnkownClass className="first second">1</UnkownClass>')).to.equal('createVNode(16, UnkownClass, null, null, {\n  "className": "first second",\n  children: "1"\n});');
		});

		it('class should be in third parameter as variable', function () {
			expect(transform('<div class={variable}>1</div>')).to.equal('createVNode(2, "div", variable, "1");');
		});

		it('Events should be in props', function () {
			expect(transform('<div id="test" onClick={func} class={variable}>1</div>')).to.equal('createVNode(2, "div", variable, "1", {\n  "id": "test",\n  "onClick": func\n});');
		});

		it('Should transform input and htmlFor correctly', function () {
			var result = transform('<label htmlFor={id}><input id={id} name={name} value={value} onChange={onChange} onInput={onInput} onKeyup={onKeyup} onFocus={onFocus} onClick={onClick} type="number" pattern="[0-9]+([,\.][0-9]+)?" inputMode="numeric" min={minimum}/></label>');
			var expected = 'createVNode(2, "label", null, createVNode(512, "input", null, null, {\n  "id": id,\n  "name": name,\n  "value": value,\n  "onChange": onChange,\n  "onInput": onInput,\n  "onKeyup": onKeyup,\n  "onFocus": onFocus,\n  "onClick": onClick,\n  "type": "number",\n  "pattern": "[0-9]+([,.][0-9]+)?",\n  "inputMode": "numeric",\n  "min": minimum\n}), {\n  "for": id\n});';
            expect(result).to.equal(expected);
		});
	});

	describe('Pragma option', function () {
		var babelSettingsPragma = {
			presets: [['es2015', {modules: false}]],
			plugins: [
				[plugin, {pragma: "t.some"}],
				'syntax-jsx'
			]
		};
		function pluginTransformPragma(input) {
			return babel.transform(input, babelSettingsPragma).code;
		};

		it('Should replace createVNode to pragma option value', function () {
			expect(pluginTransformPragma('<div></div>')).to.equal('t.some(2, "div");');
		});
	});

	/**
	 * In Inferno all SVG attributes are written as in DOM standard
	 * however for compatibility reasons we want to support React like syntax
	 *
	 */
	describe('SVG attributes React syntax support', function() {
		it('Should transform xlinkHref to xlink:href', function () {
			expect(transform('<svg><use xlinkHref="#tester"></use></svg>')).to.equal('createVNode(128, "svg", null, createVNode(2, "use", null, null, {\n  "xlink:href": "#tester"\n}));');
		});

		it('Should transform strokeWidth to stroke-width', function () {
			expect(transform('<svg><rect strokeWidth="1px"></rect></svg>')).to.equal('createVNode(128, "svg", null, createVNode(2, "rect", null, null, {\n  "stroke-width": "1px"\n}));');
		});

		it('Should transform strokeWidth to stroke-width', function () {
			expect(transform('<svg><rect fillOpacity="1"></rect></svg>')).to.equal('createVNode(128, "svg", null, createVNode(2, "rect", null, null, {\n  "fill-opacity": "1"\n}));');
		});
	});
});

