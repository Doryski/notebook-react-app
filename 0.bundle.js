(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(37),o=n(0),i=n(6),c=n(16);function a(t){return Object.keys(t).reduce((e,n)=>{var r;return r=n,Object(c.a)(r)&&(e[n]=t[n]),e},{})}const u=o.forwardRef((t,e)=>{const{children:n,iconAttrs:i,iconVerticalAlign:c,iconViewBox:u,size:l,title:f}=t,d=Object(r.b)(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),s=Object.assign({viewBox:u,height:void 0!==t.height?t.height:l,width:void 0!==t.width?t.width:l,"aria-hidden":null==f?"true":void 0,focusable:"false",role:null!=f?"img":void 0},i),m=a(d);return o.createElement("svg",Object.assign({},s,m,{ref:e}),f&&o.createElement("title",{key:"icon-title"},f),n)}),l=Object(i.c)(u)`
  display: inline-block;
  vertical-align: ${t=>t.iconVerticalAlign};
  overflow: hidden;
`},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return s}));var r=n(6);function o(){var t=u(["\n\tdisplay: block;\n\tborder: none;\n\tborder-bottom: 1px solid ",";\n\twidth: 100%;\n\tmargin-top: ",";\n\tpadding: ",";\n\tbackground: ",";\n\tresize: none;\n\tfont-family: inherit;\n\theight: 100%;\n\tline-height: 1.5em;\n\n\t// scrollbar styling\n\t::-webkit-scrollbar-track {\n\t\tbackground: ",";\n\t}\n\t::-webkit-scrollbar-thumb {\n\t\tbackground: ",";\n\t}\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbackground: ",";\n\t}\n"]);return o=function(){return t},t}function i(){var t=u(["\n\tborder: none;\n\tborder-bottom: 1px solid ",";\n\twidth: 100%;\n\tmargin-top: ",";\n\tbackground: ",";\n\tpadding: ",";\n\tfont-family: inherit;\n"]);return i=function(){return t},t}function c(){var t=u(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: ",";\n\tfont-weight: 600;\n"]);return c=function(){return t},t}function a(){var t=u(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return a=function(){return t},t}function u(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var l=r.c.form(a()),f=r.c.label(c(),(function(t){return t.theme.padding.medium})),d=r.c.input(i(),(function(t){return t.theme.colors.secondary}),(function(t){return t.theme.padding.small}),(function(t){return t.theme.colors.light}),(function(t){var e=t.theme;return"".concat(e.padding.medium," ").concat(e.padding.small)})),s=r.c.textarea(o(),(function(t){return t.theme.colors.secondary}),(function(t){return t.theme.padding.small}),(function(t){return t.theme.padding.small}),(function(t){return t.theme.colors.light}),(function(t){return t.theme.colors.light}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.secondaryLight}))},40:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(25);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(t){var e=c(useState(""),2),n=e[0],r=e[1],a=c(useState(""),2),u=a[0],l=a[1],f=function(){r(""),l("")};return o.a.createElement(t,{title:n,setTitle:r,body:u,setBody:l,handleAddNote:function(){dispatch(Object(i.a)(n,u)),f()},handleEditNote:function(t,e){dispatch(Object(i.b)(t,e)),f()},handleBodyChange:function(t){l(t.target.value)},handleRemoveNote:function(t){dispatch(removeNote(t))},resetNote:f})}},41:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(6);function o(){var t=a(["\n\tborder-top-left-radius: 0;\n\tborder-top-right-radius: ",";\n"]);return o=function(){return t},t}function i(){var t=a(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: none;\n\tborder-top-left-radius: ",";\n\tbackground: ",";\n\tcolor: ",";\n\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"]);return i=function(){return t},t}function c(){var t=a(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, auto);\n\theight: 3em;\n"]);return c=function(){return t},t}function a(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var u=r.c.section(c()),l=r.c.button(i(),(function(t){return t.theme.buttons.borderRadius}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.secondary}),(function(t){return t.theme.colors.light})),f=Object(r.c)(l)(o(),(function(t){return t.theme.buttons.borderRadius}))},42:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(5);function o(t){return Object(r.f)().push(t)}},44:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(39);e.a=function(){return o.a.createElement(i.c,null,"Title",o.a.createElement(i.b,{value:title,onChange:function(t){return setTitle(t.target.value)}}))}},45:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(39),c=n(17),a=n(40);e.a=Object(a.a)((function(t){var e=t.body,n=t.handleBodyChange,r=window.innerWidth<c.a.breakpoints.mobile?"9":"13";return o.a.createElement(i.c,null,"Body",o.a.createElement(i.d,{rows:r,value:e,onChange:n}))}))},46:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(37),c=n(38),a=r.forwardRef((function(t,e){return r.createElement(c.a,Object(i.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 50 50"},t,{ref:e}),r.createElement("path",{d:"M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z",key:"k0"}))}));a.displayName="ChevronLeft";var u=n(47),l=r.forwardRef((function(t,e){return r.createElement(c.a,Object(i.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 50 50"},t,{ref:e}),r.createElement("path",{d:"M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z",key:"k0"}),r.createElement("path",{d:"M23 32.4l-8.7-8.7 1.4-1.4 7.3 7.3 11.3-11.3 1.4 1.4z",key:"k1"}))}));l.displayName="Check";var f=n(41),d=n(10),s=n(40),m=n(42);e.a=Object(s.a)((function(t){var e=t.page,n=t.resetNote;return o.a.createElement(f.c,null,o.a.createElement(f.a,{onClick:function(){Object(m.a)(d.c),n()}},o.a.createElement(a,{size:d.d})),o.a.createElement(f.b,null,e===d.a?o.a.createElement(u.a,{size:d.d}):o.a.createElement(l,{size:d.d})))}))},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(37),o=n(0),i=n(38),c=o.forwardRef((function(t,e){return o.createElement(i.a,Object(r.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 50 50"},t,{ref:e}),o.createElement("path",{d:"M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z",key:"k0"}),o.createElement("path",{d:"M16 24h18v2H16z",key:"k1"}),o.createElement("path",{d:"M24 16h2v18h-2z",key:"k2"}))}));c.displayName="Plus"},48:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(46),c=n(44),a=n(45),u=n(39),l=n(10),f=n(42);e.default=withNote((function(t){var e=t.handleAddNote;return o.a.createElement(u.a,{onSubmit:function(t){t.preventDefault(),e(),Object(f.a)(HOME_PATH)}},o.a.createElement(i.a,{page:l.a}),o.a.createElement(c.a,null),o.a.createElement(a.a,null))}))}}]);
//# sourceMappingURL=0.bundle.js.map