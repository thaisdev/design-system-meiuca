/*! For license information please see components-checkbox-checkbox-stories.458830a9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system_core=self.webpackChunkdesign_system_core||[]).push([[125],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./utils/js/svgHelper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createSvgElement(svgStr){return document.createRange().createContextualFragment("".concat(svgStr))}__webpack_require__.d(__webpack_exports__,{u:()=>createSvgElement})},"./src/components/checkbox/checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checkbox:()=>Checkbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js");var _templateObject,_templateObject2,check=__webpack_require__("./node_modules/design-assets/dist/assets/icons/check.js");__webpack_require__("./src/components/icon/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var checkbox_stories_templateObject,_Checkbox$parameters,_Checkbox$parameters2,_Checkbox$parameters3,DscCheckbox=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DscCheckbox,_LitElement);var _super=_createSuper(DscCheckbox);function DscCheckbox(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DscCheckbox),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"_handleDispatchEvent",(function(){_this.dispatchEvent(new CustomEvent("dscChange",{detail:{checked:_this.checked},bubbles:!0,composed:!0}))})),_this.id="dsc-checkbox",_this.name="dsc-checkbox",_this.label="",_this.checked=!1,_this.required=!1,_this.disabled=!1,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DscCheckbox,[{key:"hiddenInput",get:function get(){var _this$shadowRoot;return null===(_this$shadowRoot=this.shadowRoot)||void 0===_this$shadowRoot?void 0:_this$shadowRoot.querySelector("input")}},{key:"updated",value:function updated(changedProperties){var _this2=this;changedProperties.forEach((function(oldValue,propName){"checked"===propName&&void 0!==oldValue&&(_this2.hiddenInput.checked=_this2.checked,_this2._handleDispatchEvent())}))}},{key:"_handleChange",value:function _handleChange(){this.checked=!this.checked,this._handleDispatchEvent()}},{key:"render",value:function render(){var _classMap;return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteral(['\n      <label\n        class="','"\n        for="','"\n      >\n        <input\n          type="checkbox"\n          .id="','"\n          .name="','"\n          ?disabled=',"\n          ?checked=","\n          ?required=","\n          aria-checked=",'\n          @change="','"\n        />\n        <span class="checkbox-checkmark">\n          ',"\n        </span>\n        ","\n      </label>\n    "])),(0,class_map.$)((_defineProperty(_classMap={},"checkbox",!0),_defineProperty(_classMap,"checkbox--checked",this.checked),_defineProperty(_classMap,"checkbox--disabled",this.disabled),_classMap)),this.name,this.id,this.name,this.disabled,this.checked,this.required,this.checked,this._handleChange,this.checked?(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<dsc-icon .icon="','" size="sm"></dsc-icon>'])),check.Z):null,this.label)}}],[{key:"styles",get:function get(){return(0,lit.$m)(".checkbox{display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--font-family-01);font-size:var(--font-size-xs);font-weight:var(--font-weight-regular);line-height:var(--line-height-default);color:var(--neutral-color-elements-03)}.checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox .checkbox-checkmark{width:16px;height:16px;border:var(--border-width-thin) solid var(--neutral-color-elements-03);border-radius:var(--border-radius-none);margin-right:var(--spacing-size-nano);transition-duration:.275s;transition-timing-function:cubic-bezier(0.48, 0, 0.48, 1)}.checkbox:hover:not(.checkbox--disabled):not(.checkbox--checked) .checkbox-checkmark{background-color:var(--neutral-surface-02)}.checkbox input:checked:not(:disabled)~.checkbox-checkmark{background-color:var(--brand-color-pure);border-color:var(--brand-color-pure)}.checkbox input:checked:not(:disabled)~.checkbox-checkmark dsc-icon::part(icon){color:var(--contrast-color-brand)}.checkbox input:focus-visible~.checkbox-checkmark{outline-color:var(--highlight-color-pure);outline-width:var(--border-width-thin);outline-style:solid}.checkbox input:disabled~.checkbox-checkmark{border-color:var(--neutral-color-elements-01);color:var(--neutral-color-elements-01)}.checkbox input:disabled~.checkbox-checkmark dsc-icon::part(icon){color:var(--neutral-color-elements-01)}.checkbox--disabled{color:var(--neutral-color-elements-01)}")}},{key:"properties",get:function get(){return{id:{type:String},name:{type:String},label:{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean}}}}]),DscCheckbox}(lit.oi);function checkbox_stories_typeof(obj){return checkbox_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},checkbox_stories_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){checkbox_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function checkbox_stories_defineProperty(obj,key,value){return(key=function checkbox_stories_toPropertyKey(arg){var key=function checkbox_stories_toPrimitive(input,hint){if("object"!==checkbox_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==checkbox_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===checkbox_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}customElements.get("dsc-checkbox")||customElements.define("dsc-checkbox",DscCheckbox);const checkbox_stories={title:"Components/Checkbox"};var Checkbox=function Checkbox(_ref){var label=_ref.label,checked=_ref.checked,disabled=_ref.disabled,updateArgs=_slicedToArray((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2)[1];return(0,lit.dy)(checkbox_stories_templateObject||(checkbox_stories_templateObject=function checkbox_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <dsc-checkbox\n      .label="','"\n      ?checked="','"\n      ?disabled="','"\n      @dscChange="','"\n    ></dsc-checkbox>\n\n  '])),label,checked,disabled,(function(event){return function _handleChange(e){updateArgs({checked:e.detail.checked}),(0,dist.aD)("dscChange")({checked:e.detail.checked})}(event)}))};Checkbox.args={label:"Label",checked:!1,disabled:!1},Checkbox.argTypes={label:{name:"Label",description:"Define a label do checkbox",table:{category:"Custom Inputs",type:{summary:"string"},defaultValue:{summary:""}}},checked:{name:"Checked",description:"Define se o checkbox está checado",table:{category:"Modifiers",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{name:"Disabled",description:"Define se o checkbox está desabilitado",table:{category:"Modifiers",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},Checkbox.parameters={docs:{source:{code:'<dsc-checkbox label="Label" checked="false"></dsc-checkbox>'}}},Checkbox.parameters=_objectSpread(_objectSpread({},Checkbox.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Checkbox$parameters=Checkbox.parameters)||void 0===_Checkbox$parameters?void 0:_Checkbox$parameters.docs),{},{source:_objectSpread({originalSource:'({\n  label,\n  checked,\n  disabled\n}) => {\n  const [, updateArgs] = useArgs();\n  function _handleChange(e) {\n    updateArgs({\n      checked: e.detail.checked\n    });\n    action(\'dscChange\')({\n      checked: e.detail.checked\n    });\n  }\n  return html`\n    <dsc-checkbox\n      .label="${label}"\n      ?checked="${checked}"\n      ?disabled="${disabled}"\n      @dscChange="${event => _handleChange(event)}"\n    ></dsc-checkbox>\n\n  `;\n}'},null===(_Checkbox$parameters2=Checkbox.parameters)||void 0===_Checkbox$parameters2||null===(_Checkbox$parameters3=_Checkbox$parameters2.docs)||void 0===_Checkbox$parameters3?void 0:_Checkbox$parameters3.source)})});const __namedExportsOrder=["Checkbox"]},"./src/components/icon/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),svgHelper=__webpack_require__("./utils/js/svgHelper.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _templateObject;function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var DscIcon=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DscIcon,_LitElement);var _super=_createSuper(DscIcon);function DscIcon(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DscIcon),(_this=_super.call(this)).size="",_this.icon="",_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DscIcon,[{key:"patternSize",get:function get(){return["sm","md","lg"].includes(this.size)?this.size:"md"}},{key:"render",value:function render(){var _classMap;return(0,lit.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n      <div part="icon"\n        class="','">\n        ',"\n      </div>\n    "])),(0,class_map.$)((_defineProperty(_classMap={},"icon",!0),_defineProperty(_classMap,"icon--".concat(this.patternSize),!0),_classMap)),(0,svgHelper.u)(this.icon))}}],[{key:"styles",get:function get(){return(0,lit.$m)(".icon{color:var(--neutral-color-elements-03)}.icon--sm{width:16px;height:16px}.icon--md{width:24px;height:24px}.icon--lg{width:32px;height:32px}.icon svg{width:inherit;height:inherit}.icon svg path{fill:currentColor}")}},{key:"properties",get:function get(){return{size:{type:String},icon:{type:String}}}}]),DscIcon}(lit.oi);customElements.get("dsc-icon")||customElements.define("dsc-icon",DscIcon)},"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/design-assets/dist/assets/icons/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='<svg viewBox="0 0 24 24" class="check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path d="M21.2109 4.71094L8.25 17.6719L2.78906 12.2109L1.71094 13.2891L7.71094 19.2891L8.25 19.8047L8.78906 19.2891L22.2891 5.78906L21.2109 4.71094Z" fill="currentColor"/></svg>'},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),o=(0,directive.XM)(class extends directive.Xe{constructor(t){var i;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,_ref){var r,o,[s]=_ref;if(void 0===this.it){for(var _t in this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t)))),s)s[_t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(_t))&&this.it.add(_t);return this.render(s)}var e=i.element.classList;for(var _t2 in this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))})),s){var _i=!!s[_t2];_i===this.it.has(_t2)||(null===(o=this.nt)||void 0===o?void 0:o.has(_t2))||(_i?(e.add(_t2),this.it.add(_t2)):(e.remove(_t2),this.it.delete(_t2)))}return lit_html.Jb}})}}]);