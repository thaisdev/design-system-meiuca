/*! For license information please see components-tooltip-tooltip-stories.b54bb814.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system_core=self.webpackChunkdesign_system_core||[]).push([[761],{"./src/components/tooltip/tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tooltip_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _templateObject;function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var DscTooltip=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DscTooltip,_LitElement);var _super=_createSuper(DscTooltip);function DscTooltip(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DscTooltip),(_this=_super.call(this)).label="",_this.placement="",_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DscTooltip,[{key:"patternPlacement",get:function get(){return["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"].includes(this.placement)?this.placement:"top"}},{key:"render",value:function render(){var _classMap;return(0,lit.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n        <div class="','">\n            <span class="tooltip__label">',"</span>\n            <slot></slot>\n        </div>\n    "])),(0,class_map.$)((_defineProperty(_classMap={},"tooltip",!0),_defineProperty(_classMap,"tooltip--".concat(this.patternPlacement),!0),_classMap)),this.label)}}],[{key:"styles",get:function get(){return(0,lit.$m)(".tooltip{position:relative;display:flex}.tooltip__label{background-color:var(--neutral-color-elements-pure);border-radius:var(--border-radius-sm);padding:var(--spacing-inset-size-sm);box-shadow:var(--shadow-level-2) rgba(var(--neutral-dark-pure-rgb), var(--opacity-level-light));max-width:224px;color:var(--neutral-surface-pure);font-size:var(--font-size-xxs);font-family:var(--font-family-01);font-weight:var(--font-weight-regular);line-height:var(--line-height-md);text-align:left;visibility:hidden;display:none;box-sizing:border-box;position:absolute}.tooltip--top{justify-content:center}.tooltip--top .tooltip__label{bottom:100%}.tooltip--top-start .tooltip__label{bottom:100%;left:0}.tooltip--top-end .tooltip__label{bottom:100%;right:0}.tooltip--right .tooltip__label{left:100%}.tooltip--right-start{align-items:flex-start}.tooltip--right-start .tooltip__label{left:100%}.tooltip--right-end{align-items:flex-end}.tooltip--right-end .tooltip__label{left:100%}.tooltip--bottom{justify-content:center}.tooltip--bottom .tooltip__label{top:100%}.tooltip--bottom-start .tooltip__label{top:100%;left:0}.tooltip--bottom-end .tooltip__label{top:100%;right:0}.tooltip--left .tooltip__label{right:100%}.tooltip--left-start{align-items:flex-start}.tooltip--left-start .tooltip__label{right:100%}.tooltip--left-end{align-items:flex-end}.tooltip--left-end .tooltip__label{right:100%}.tooltip:hover .tooltip__label{visibility:visible;display:inline-flex}")}},{key:"properties",get:function get(){return{label:{type:String},placement:{type:String}}}}]),DscTooltip}(lit.oi);customElements.get("dsc-tooltip")||customElements.define("dsc-tooltip",DscTooltip);var tooltip_stories_templateObject,_Tooltip$parameters,_Tooltip$parameters2,_Tooltip$parameters2$;__webpack_require__("./src/components/typography/index.js");function tooltip_stories_typeof(obj){return tooltip_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},tooltip_stories_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){tooltip_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function tooltip_stories_defineProperty(obj,key,value){return(key=function tooltip_stories_toPropertyKey(arg){var key=function tooltip_stories_toPrimitive(input,hint){if("object"!==tooltip_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==tooltip_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===tooltip_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const tooltip_stories={title:"Components/Tooltip"};var Tooltip=function Tooltip(_ref){var label=_ref.label,placement=_ref.placement;_ref.bgColor;return(0,lit.dy)(tooltip_stories_templateObject||(tooltip_stories_templateObject=function tooltip_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n                <div style="width: 450px; height: 600px; display: flex; justify-content: center;">\n                    <dsc-tooltip\n                        .label="','"\n                        .placement="','"\n                    >\n                        <dsc-typography component="paragraph" size="small">\n                            Passe o mouse aqui para ver o tooltip.\n                        </dsc-typography>\n                    </dsc-tooltip>\n                </div>\n            '])),label,placement)};Tooltip.args={label:"Tooltip text here...",placement:"top"},Tooltip.argTypes={label:{name:"Label",description:"Define a label do tooltip",table:{category:"Custom Inputs",type:{summary:"string"},defaultValue:{summary:"Label"}}},placement:{name:"Placement",description:"Posição do tooltip.",table:{category:"Custom Inputs",type:{summary:"string"},defaultValue:{summary:""}},control:"select",options:["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]}},Tooltip.parameters={docs:{source:{code:'<dsc-tooltip label="Texto do tooltip">Tooltip text here...</dsc-tooltip>'}}},Tooltip.parameters=_objectSpread(_objectSpread({},Tooltip.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Tooltip$parameters=Tooltip.parameters)||void 0===_Tooltip$parameters?void 0:_Tooltip$parameters.docs),{},{source:_objectSpread({originalSource:'({\n  label,\n  placement,\n  bgColor\n}) => {\n  return html`\n                <div style="width: 450px; height: 600px; display: flex; justify-content: center;">\n                    <dsc-tooltip\n                        .label="${label}"\n                        .placement="${placement}"\n                    >\n                        <dsc-typography component="paragraph" size="small">\n                            Passe o mouse aqui para ver o tooltip.\n                        </dsc-typography>\n                    </dsc-tooltip>\n                </div>\n            `;\n}'},null===(_Tooltip$parameters2=Tooltip.parameters)||void 0===_Tooltip$parameters2||null===(_Tooltip$parameters2$=_Tooltip$parameters2.docs)||void 0===_Tooltip$parameters2$?void 0:_Tooltip$parameters2$.source)})});const __namedExportsOrder=["Tooltip"]},"./src/components/typography/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");class e extends directive.Xe{constructor(i){if(super(i),this.et=lit_html.Ld,i.type!==directive.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.Ld||null==r)return this.ft=void 0,this.et=r;if(r===lit_html.Jb)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;var s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;var o=(0,directive.XM)(e);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _templateObject,_templateObject2,_templateObject3,_templateObject4;function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var DscTypography=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DscTypography,_LitElement);var _super=_createSuper(DscTypography);function DscTypography(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DscTypography),(_this=_super.call(this)).component="",_this.variant="",_this.size="",_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DscTypography,[{key:"headingPatternSize",get:function get(){return["xs","sm","md","lg","xl","display"].includes(this.size)?this.size:"display"}},{key:"headingPatternVariant",get:function get(){return["h1","h2","h3","h4","h5","h6"].includes(this.variant)?this.variant:"h1"}},{key:"patternComponent",get:function get(){return["heading","paragraph","caption"].includes(this.component)?this.component:"heading"}},{key:"renderHeading",value:function renderHeading(){return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteral(["",""])),o("<".concat(this.headingPatternVariant,'\n                    part="typography"\n                    class="typography typography-heading typography-heading--').concat(this.headingPatternSize,'">\n                        <slot></slot>\n                    </').concat(this.headingPatternVariant,">")))}},{key:"renderParagraph",value:function renderParagraph(){return(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<p part="typography" class="typography typography-paragraph"><slot></slot></p>'])))}},{key:"renderCaption",value:function renderCaption(){return(0,lit.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(['<span part="typography" class="typography typography-caption"><slot></slot></span>'])))}},{key:"render",value:function render(){return(0,lit.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["",""])),"heading"===this.patternComponent?this.renderHeading():"paragraph"===this.patternComponent?this.renderParagraph():this.renderCaption())}}],[{key:"styles",get:function get(){return(0,lit.$m)("h1,h2,h3,h4,h5,h6,p,span{margin:0}.typography{font-family:var(--font-family-01);font-weight:var(--font-weight-regular);line-height:var(--line-height-default);color:var(--neutral-color-elements-03)}.typography-heading--display{font-size:var(--font-size-xxxl)}@media screen and (min-width: 768px){.typography-heading--display{font-size:var(--font-size-xxxl)}}@media screen and (min-width: 1366px){.typography-heading--display{font-size:var(--font-size-giant)}}@media screen and (min-width: 1440px){.typography-heading--display{font-size:var(--font-size-giant)}}.typography-heading--xl{font-size:var(--font-size-xxl);font-weight:var(--font-weight-bold)}@media screen and (min-width: 768px){.typography-heading--xl{font-size:var(--font-size-xxl)}}@media screen and (min-width: 1366px){.typography-heading--xl{font-size:var(--font-size-xxxl)}}@media screen and (min-width: 1440px){.typography-heading--xl{font-size:var(--font-size-xxxl)}}.typography-heading--lg{font-size:var(--font-size-xl)}@media screen and (min-width: 768px){.typography-heading--lg{font-size:var(--font-size-xl)}}@media screen and (min-width: 1366px){.typography-heading--lg{font-size:var(--font-size-xxl)}}@media screen and (min-width: 1440px){.typography-heading--lg{font-size:var(--font-size-xxl)}}.typography-heading--md{font-size:var(--font-size-lg)}.typography-heading--sm{font-size:var(--font-size-md)}.typography-heading--xs{font-size:var(--font-size-xs)}.typography-paragraph{font-size:var(--font-size-xs);line-height:var(--line-height-lg)}.typography-caption{font-size:var(--font-size-xxs)}")}},{key:"properties",get:function get(){return{component:{type:String},variant:{type:String},size:{type:String}}}}]),DscTypography}(lit.oi);customElements.get("dsc-typography")||customElements.define("dsc-typography",DscTypography)},"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),o=(0,directive.XM)(class extends directive.Xe{constructor(t){var i;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,_ref){var r,o,[s]=_ref;if(void 0===this.it){for(var _t in this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t)))),s)s[_t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(_t))&&this.it.add(_t);return this.render(s)}var e=i.element.classList;for(var _t2 in this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))})),s){var _i=!!s[_t2];_i===this.it.has(_t2)||(null===(o=this.nt)||void 0===o?void 0:o.has(_t2))||(_i?(e.add(_t2),this.it.add(_t2)):(e.remove(_t2),this.it.delete(_t2)))}return lit_html.Jb}})}}]);