"use strict";(self.webpackChunkdesign_system_core=self.webpackChunkdesign_system_core||[]).push([[914],{"./utils/js/svgHelper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createSvgElement(svgStr){return document.createRange().createContextualFragment("".concat(svgStr))}__webpack_require__.d(__webpack_exports__,{u:()=>createSvgElement})},"./src/components/icon/icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Icon:()=>Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Icon$parameters,_Icon$parameters2,_Icon$parameters2$doc,lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),design_assets_dist_assets_icons_exported_assets_list__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/design-assets/dist/assets/icons/exported-assets-list.js"),design_assets_dist_assets_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/design-assets/dist/assets/icons/index.js");__webpack_require__("./src/components/icon/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",tags:["autodocs"]};var Icon=function Icon(_ref){var size=_ref.size,icon=_ref.icon;return(0,lit__WEBPACK_IMPORTED_MODULE_0__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([' <dsc-icon .size="','" .icon="','"> </dsc-icon> '])),size,design_assets_dist_assets_icons__WEBPACK_IMPORTED_MODULE_2__[icon])};Icon.args={size:"md",icon:"Shapes"},Icon.argTypes={size:{name:"Size",description:"Define o tamanho do icon",table:{category:"Modifiers",type:{summary:"string"},defaultValue:{summary:"md"}},control:"select",options:["sm","md","lg"]},icon:{name:"Icon",description:"Indica qual o ícone que será usado",table:{category:"Modifiers",type:{summary:"object javascript"},defaultValue:{summary:""}},control:"select",options:design_assets_dist_assets_icons_exported_assets_list__WEBPACK_IMPORTED_MODULE_3__.Z}},Icon.parameters={docs:{source:{code:'<dsc-icon size="md" icon="Shape"></dsc-icon>'}}},Icon.parameters=_objectSpread(_objectSpread({},Icon.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Icon$parameters=Icon.parameters)||void 0===_Icon$parameters?void 0:_Icon$parameters.docs),{},{source:_objectSpread({originalSource:'({\n  size,\n  icon\n}) => {\n  return html` <dsc-icon .size="${size}" .icon="${icons[icon]}"> </dsc-icon> `;\n}'},null===(_Icon$parameters2=Icon.parameters)||void 0===_Icon$parameters2||null===(_Icon$parameters2$doc=_Icon$parameters2.docs)||void 0===_Icon$parameters2$doc?void 0:_Icon$parameters2$doc.source)})});const __namedExportsOrder=["Icon"]},"./src/components/icon/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),svgHelper=__webpack_require__("./utils/js/svgHelper.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _templateObject;function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var DscIcon=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DscIcon,_LitElement);var _super=_createSuper(DscIcon);function DscIcon(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DscIcon),(_this=_super.call(this)).size="",_this.icon="",_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DscIcon,[{key:"patternSize",get:function get(){return["sm","md","lg"].includes(this.size)?this.size:"md"}},{key:"render",value:function render(){var _classMap;return(0,lit.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n      <div part="icon"\n        class="','">\n        ',"\n      </div>\n    "])),(0,class_map.$)((_defineProperty(_classMap={},"icon",!0),_defineProperty(_classMap,"icon--".concat(this.patternSize),!0),_classMap)),(0,svgHelper.u)(this.icon))}}],[{key:"styles",get:function get(){return(0,lit.$m)(".icon{color:var(--neutral-color-elements-03)}.icon--sm{width:16px;height:16px}.icon--md{width:24px;height:24px}.icon--lg{width:32px;height:32px}.icon svg{width:inherit;height:inherit}.icon svg path{fill:currentColor}")}},{key:"properties",get:function get(){return{size:{type:String},icon:{type:String}}}}]),DscIcon}(lit.oi);customElements.get("dsc-icon")||customElements.define("dsc-icon",DscIcon)}}]);