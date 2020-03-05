/*!
* popper-vue v0.1.2
* (c) 2020 Jonathan Bakebwa Mugaju
* @license MIT
*/
import t from"popper.js";import e from"vue";function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);function s(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}function a(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce((function(t,e){return null==e?t:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];t.apply(this,n),e.apply(this,n)}}),(function(){}))}function l(t,e){return t.slice(t.indexOf(e)+1)}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c="undefined"!=typeof window;function d(t,e){return e.reduce((function(e,r){return t.hasOwnProperty(r)&&(e[r]=t[r]),e}),{})}var h={},f={},m={},g=new(e.extend({data:function(){return{transports:h,targets:f,sources:m,trackInstances:c}},methods:{open:function(t){if(c){var r=t.to,n=t.from,o=t.passengers,i=t.order,s=void 0===i?1/0:i;if(r&&n&&o){var a,l={to:r,from:n,passengers:(a=o,Array.isArray(a)||"object"===p(a)?Object.freeze(a):a),order:s};-1===Object.keys(this.transports).indexOf(r)&&e.set(this.transports,r,[]);var u,d=this.$_getTransportIndex(l),h=this.transports[r].slice(0);-1===d?h.push(l):h[d]=l,this.transports[r]=(u=function(t,e){return t.order-e.order},h.map((function(t,e){return[e,t]})).sort((function(t,e){return u(t[1],e[1])||t[0]-e[0]})).map((function(t){return t[1]})))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.to,n=t.from;if(r&&(n||!1!==e)&&this.transports[r])if(e)this.transports[r]=[];else{var o=this.$_getTransportIndex(t);if(o>=0){var i=this.transports[r].slice(0);i.splice(o,1),this.transports[r]=i}}},registerTarget:function(t,e,r){c&&(this.trackInstances&&!r&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,r){c&&(this.trackInstances&&!r&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,r=t.from;for(var n in this.transports[e])if(this.transports[e][n].from===r)return+n;return-1}}}))(h),y=1,v=e.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(y++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){g.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){g.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};g.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"==typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:u(t),order:this.order};g.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],r=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(r,[this.normalizeOwnChildren(e)]):this.slim?t():t(r,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),b=e.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:g.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){g.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){g.unregisterTarget(e),g.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){g.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,r){var n=r.passengers[0],o="function"==typeof n?n(e):r.passengers;return t.concat(o)}),[])}(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),r=this.children(),n=this.transition||this.tag;return e?r[0]:this.slim&&!n?t():t(n,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},r)}}),w=0,S=["disabled","name","order","slim","slotProps","tag","to"],T=["multiple","transition"],O=e.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(w++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!=typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(g.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=g.targets[e.name];else{var r=e.append;if(r){var n="string"==typeof r?r:"DIV",o=document.createElement(n);t.appendChild(o),t=o}var i=d(this.$props,T);i.slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new b({el:t,parent:this.$parent||this,propsData:i})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=d(this.$props,S);return t(v,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var r=this.$scopedSlots.manual({to:this.to});return Array.isArray(r)&&(r=r[0]),r||t()}}),$={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var r=e.parent,n=e.slots,o=e.props,i=n(),s=i.default,a=void 0===s?[]:s,l=i.placeholder;return r._isMounted?a:(r.$once("hook:mounted",(function(){r.$forceUpdate()})),o.placeholderTag&&(o.placeholder||l)?t(o.placeholderTag,{class:["client-only-placeholder"]},o.placeholder||l):a.length>0?a.map((function(){return t(!1)})):t(!1))}},P={name:"Portal",props:{target:String,append:Boolean,unmountOnDestroy:Boolean,disabled:Boolean,name:String,order:Number,slim:Boolean,bail:Boolean,targetSlim:Boolean,as:{type:String,default:"span"}},data:function(){return{portalTarget:void 0,targetId:void 0}},created:function(){var t=this;this.disabled||(this.mountTarget(),this.unmountOnDestroy&&this.$once("hook:destroyed",(function(){i&&document.body.removeChild(t.portalTarget)})))},methods:{createPortalTarget:function(t,e){if(i){var r=document.querySelector(t);if(r)return r;var n=document.createElement(e);return t.startsWith("#")&&(n.id=l(t,"#")),t.startsWith(".")&&(n.classList.add(l(t,".")),n.id=s(4)),null!=document.body&&document.body.appendChild(n),n}},mountTarget:function(){var t=this;i&&(this.portalTarget=this.createPortalTarget(this.target,this.as),this.targetId=this.portalTarget.id,this.$forceUpdate(),this.portalTarget&&this.portalTarget.isConnected&&this.$nextTick((function(){t.$emit("portal:targetConnected")})))},unmountTarget:function(){this.disabled||i&&this.portalTarget.isConnected&&document.body.removeChild(this.portalTarget)}},render:function(t){var e=this.$slots.default;return this.disabled?e[0]:t($,[t(O,{props:{append:this.append,mountTo:"#".concat(this.targetId),disabled:this.disabled,name:this.name,order:this.order,slim:this.slim,bail:this.bail,targetSlim:this.targetSlim}},e)])}},j={name:"ClickOutside",props:{whitelist:Array,do:Function,isDisabled:Boolean},created:function(){var t=this;if(!this.isDisabled){var e=function(e,r){e.target===r||r.contains(e.target)||t.whitelist.includes(e.target)||t.do&&t.do()};i&&document.addEventListener("click",(function(r){return e(r,t.$el)})),this.$once("hook:beforeDestroy",(function(){document.removeEventListener("click",(function(r){return e(r,t.$el)}))}))}},render:function(){return this.$slots.default[0]}},C={name:"PopperArrow",render:function(t){return t("div",{style:{background:"inherit"},attrs:{"x-arrow":!0,role:"presentation"}})}},A={name:"Popper",props:{isOpen:Boolean,placement:{type:String,default:"bottom"},usePortal:{type:Boolean,default:!0},onClose:{type:Function,default:function(){return null}},closeOnClickAway:{type:Boolean,default:!0},modifiers:{type:Object,default:function(){}},anchorEl:[HTMLElement,Object],popperEl:[HTMLElement,Object],eventsEnabled:{type:Boolean,default:!0},positionFixed:Boolean,hasArrow:{type:Boolean,default:!0},usePortalTarget:String},data:function(){return{popper:null}},computed:{portalTarget:function(){return this.usePortalTarget||"#popper-vue-portal-".concat(s(4))}},methods:{wrapClose:function(){this.popper&&(this.onClose&&this.onClose(),this.$emit("popper:close",{}))},handlePopperUpdate:function(t){this.$emit("popper:update",t)},handlePopperCreated:function(t){this.$emit("popper:create",t)},bindArrowClass:function(t){return t[0].data.staticClass?t[0].data.staticClass+=" popper-vue":t[0].data.staticClass="popper-vue",t}},mounted:function(){var e=this;this.$watch((function(t){return[t.placement]}),(function(){e.popper&&(e.popper.options.placment=e.placement,e.popper.scheduleUpdate())})),this.$watch((function(){e.isOpen?e.popper?e.popper.scheduleUpdate():e.popper=new t(e.anchorEl,e.popperEl,{placement:e.placement,modifiers:o({},e.usePortal&&{preventOverflow:{boundariesElement:"window"}},{},e.modifiers),onUpdate:a(e.handlePopperUpdate),onCreate:a(e.handlePopperCreated),eventsEnabled:e.eventsEnabled,positionFixed:e.positionFixed}):e.popper&&(e.popper.destroy(),e.popper=null,e.$emit("popper:close",{}))}))},render:function(t){var e=this.$slots.default;return e.length>1?console.error("[PopperVue]: The <Popper> component expects only one child element at it's root. You passed ".concat(e.length," child nodes.")):(this.hasArrow&&this.isOpen&&(e[0].children.push(t(C)),this.bindArrowClass(e,t)),this.usePortal?t(P,{props:{append:!0,target:this.portalTarget,disabled:!this.usePortal,slim:!0,unmountOnDestroy:!0,targetSlim:!0},attrs:{disabled:!this.usePortal}},[t("div",{style:{display:this.isOpen?"unset":"none"}},[t(j,{props:{whitelist:[this.anchorEl],active:this.closeOnClickAway,do:this.wrapClose}},e)])]):t("div",{style:{display:this.isOpen?"unset":"none"}},[t(j,{props:{whitelist:[this.anchorEl],active:this.closeOnClickAway,do:this.wrapClose}},e)]))}};export{A as Popper,C as PopperArrow};