webpackJsonp([0],{10:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=v[o.id];if(r){r.refs++;for(var u=0;u<r.parts.length;u++)r.parts[u](o.parts[u]);for(;u<o.parts.length;u++)r.parts.push(s(o.parts[u],t))}else{for(var a=[],u=0;u<o.parts.length;u++)a.push(s(o.parts[u],t));v[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var u=e[r],a=t.base?u[0]+t.base:u[0],i=u[1],l=u[2],c=u[3],s={css:i,media:l,sourceMap:c};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function u(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=E[E.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),E.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=E.indexOf(e);t>=0&&E.splice(t,1)}function i(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),u(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),u(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function s(e,t){var n,o,r,u;if(t.transform&&e.css){if(!(u=t.transform(e.css)))return function(){};e.css=u}if(t.singleton){var c=y++;n=m||(m=i(t)),o=f.bind(null,n,c,!1),r=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=d.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),o=p.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var u=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(u,a[t]):e.appendChild(u)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var o=n.css,r=n.sourceMap,u=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||u)&&(o=g(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}var v={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,y=0,E=[],g=n(18);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var u=[],a=0;a<n.length;a++){var i=n[a],l=v[i.id];l.refs--,u.push(l)}if(e){o(r(e,t),t)}for(var a=0;a<u.length;a++){var l=u[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete v[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(){document.location="../"}var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=new c.NavTree;window.document.addEventListener("keydown",function(e){var t=void 0;switch(e.keyCode){case 40:t="down";break;case 38:t="up";break;case 37:t="left";break;case 39:t="right";break;case 27:t="esc";break;case 13:t="enter"}t&&(e.preventDefault(),o.resolve(t))},!1),l.default.render(a.default.createElement(s.default,{tree:o,func:c.navVertical},n&&a.default.createElement(s.default,{defaultFocused:!0,func:function(e){"enter"===e&&t()},className:"button btn-back"},"Press to go back"),e),document.getElementById("root"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(5),a=o(u),i=n(23),l=o(i),c=n(7),s=o(c);n(16)},16:function(e,t,n){var o=n(17);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(10)(o,r);o.locals&&(e.exports=o.locals)},17:function(e,t,n){t=e.exports=n(9)(void 0),t.push([e.i,".btn-back { background-color: #ccc; }\n.btn-back.nav-focused { outline: 1px solid crimson; }\n\n\n.button { display: inline-block; padding: 5px 10px; background-color: #cccccc; margin: 2px; }\n.button.nav-focused { box-shadow: 0 1px 3px #008CBA; outline: 1px solid #008CBA; background-color: #008CBA; color: #FFF; }\n\ncode, kbd { background-color: #EEE; padding: 2px 4px; }",""])},18:function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var u;return u=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(u)+")"})}},195:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(5),c=o(l),s=n(7),f=o(s),p=n(15),d=o(p),v=n(196),h=o(v);n(197);var b=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h3",null,"Inputs can be handled in various manners. Here is an example of one approach:"),c.default.createElement("ul",null,c.default.createElement("li",null,"Focus input and press ",c.default.createElement("kbd",null,"Enter"),' to activate "edit mode"'),c.default.createElement("li",null,"Press ",c.default.createElement("kbd",null,"Esc"),' to exit "edit mode"')),c.default.createElement(f.default,null,c.default.createElement("div",{className:"caption"},"Input:"),c.default.createElement(h.default,{placeholder:"Example",size:"10"}),c.default.createElement(h.default,{defaultValue:"Foo"})),c.default.createElement(f.default,null,c.default.createElement("div",{className:"caption"},"Textarea:"),c.default.createElement(h.default,{component:"textarea",defaultValue:"Some\ntext"}),c.default.createElement(h.default,{component:"textarea"})),c.default.createElement(f.default,null,c.default.createElement("div",{className:"caption"},"Input events demo:"),c.default.createElement(m,null)))}}]),t}(l.Component),m=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={focused:!1,editMode:!1,value:""},n}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement(h.default,{onFocus:function(){e.setState({editMode:!0})},onBlur:function(){e.setState({editMode:!1})},value:this.state.value,onChange:function(t){e.setState({value:t.target.value})},onNav:function(t){e.setState({focused:!1!==t})},refInput:function(t){e.inputEl=t}}),c.default.createElement(f.default,{className:"button",func:function(t){"enter"===t&&e.inputEl.focus()}},"Press to focus the input"),c.default.createElement("div",null,"Focused: ",c.default.createElement("b",null,this.state.focused?"true":"false")),c.default.createElement("div",null,"Edit mode: ",c.default.createElement("b",null,this.state.editMode?"on":"off")),c.default.createElement("div",null,"Value: ",c.default.createElement("b",null,this.state.value)))}}]),t}(l.Component);(0,d.default)(c.default.createElement(b,null))},196:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(5),f=o(s),p=n(20),d=o(p),v=n(7),h=o(v),b=function(e){function t(e){u(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={navFocused:!1,inputFocused:!1},["onInputKeyDown","onInputFocus","onInputBlur","onNav","navFunc","setRef"].forEach(function(e){n[e]=n[e].bind(n)}),n.refInput=e.refInput,n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){this.inputEl.addEventListener("keydown",this.onInputKeyDown),this.inputEl.addEventListener("focus",this.onInputFocus),this.inputEl.addEventListener("blur",this.onInputBlur),this.refInput&&this.refInput(this.inputEl)}},{key:"componentWillUnmount",value:function(){this.inputEl.removeEventListener("keydown",this.onInputKeyDown),this.inputEl.removeEventListener("focus",this.onInputFocus),this.inputEl.removeEventListener("blur",this.onInputBlur),this.refInput&&this.refInput(null)}},{key:"onInputKeyDown",value:function(e){e.stopPropagation(),27===e.keyCode?this.state.inputFocused&&this.inputEl.blur():13===e.keyCode&&(this.state.inputFocused||this.inputEl.focus())}},{key:"onInputFocus",value:function(){this.setState({inputFocused:!0}),this.state.navFocused||this.nav.tree.focus()}},{key:"onInputBlur",value:function(){this.setState({inputFocused:!1})}},{key:"onNav",value:function(e){this.setState({navFocused:!1!==e}),this.props.onNav&&this.props.onNav(e)}},{key:"navFunc",value:function(e){"enter"===e&&this.inputEl.focus()}},{key:"setRef",value:function(e){this.nav=e,this.inputEl=e&&e.tree.el}},{key:"render",value:function(){var e=this.props,t=e.component,n=void 0===t?"input":t,o=e.type,u=void 0===o?"text":o,a=(e.onNav,e.refInput,r(e,["component","type","onNav","refInput"]));return f.default.createElement(h.default,l({className:"nav-input",component:n,type:u,func:this.navFunc,ref:this.setRef,onNav:this.onNav},a))}}]),t}(s.Component);t.default=b,b.propTypes={component:d.default.string,type:d.default.string,onNav:d.default.func,refInput:d.default.func}},197:function(e,t,n){var o=n(198);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(10)(o,r);o.locals&&(e.exports=o.locals)},198:function(e,t,n){t=e.exports=n(9)(void 0),t.push([e.i,"\n.nav-input { padding: 10px; margin: 5px; border: 1px solid #ccc; background-color: #F9FFF9 }\n.nav-input.nav-focused { border-color: #008CBA; box-shadow: 0 1px 3px #008CBA; }\n.nav-input.nav-focused:focus { background-color: #FFFFFF; }\n\n.caption { font-weight: bold; margin-top: 15px; }",""])},9:function(e,t,n){"use strict";function o(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var u=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([u]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var u=this[r][0];"number"==typeof u&&(o[u]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}}},[195]);