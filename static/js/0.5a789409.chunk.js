(this["webpackJsonprobhimslf.github.io"]=this["webpackJsonprobhimslf.github.io"]||[]).push([[0],{89:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){(function(e){var n="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=s||l||Function("return this")(),u=Object.prototype.toString,b=Math.max,p=Math.min,m=function(){return f.Date.now()};function d(t,e,r){var a,i,o,c,s,l,f=0,u=!1,d=!1,O=!0;if("function"!=typeof t)throw new TypeError(n);function h(e){var n=a,r=i;return a=i=void 0,f=e,c=t.apply(r,n)}function v(t){return f=t,s=setTimeout(x,e),u?h(t):c}function g(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-f>=o}function x(){var t=m();if(g(t))return w(t);s=setTimeout(x,function(t){var n=e-(t-l);return d?p(n,o-(t-f)):n}(t))}function w(t){return s=void 0,O&&a?h(t):(a=i=void 0,c)}function k(){var t=m(),n=g(t);if(a=arguments,i=this,l=t,n){if(void 0===s)return v(l);if(d)return s=setTimeout(x,e),h(l)}return void 0===s&&(s=setTimeout(x,e)),c}return e=y(e)||0,j(r)&&(u=!!r.leading,o=(d="maxWait"in r)?b(y(r.maxWait)||0,e):o,O="trailing"in r?!!r.trailing:O),k.cancel=function(){void 0!==s&&clearTimeout(s),f=0,a=l=i=s=void 0},k.flush=function(){return void 0===s?c:w(m())},k}function j(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(j(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=j(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||o.test(t)?c(t.slice(2),n?2:8):a.test(t)?NaN:+t}t.exports=function(t,e,r){var a=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return j(r)&&(a="leading"in r?!!r.leading:a,i="trailing"in r?!!r.trailing:i),d(t,e,{leading:a,maxWait:e,trailing:i})}}).call(this,n(31))},95:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var r=n(6),a=n(1),i=n.n(a),o=n(26),c=n(16),s=n(54),l=(n(89),n(2)),f=function(t){var e=t.clientX,n=t.clientY,r=t.fullScreen,a=t.initial,i=t.showDescription,o=Object(c.useTransition)(r,{from:{opacity:a?1:0,transform:"scaleY( ".concat(a?1:.07,")"),background:"rgb(var(--breakpoint-0))"},enter:{opacity:1,transform:"scaleY( 1 )",background:"rgb(var(--breakpoint-0))"},leave:{opacity:0,transform:"scaleY( 0.07 )",background:"rgb(var(--breakpoint-0))"},config:r?c.config.default:c.config.slow}),f=Object(c.useTransition)(i,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return o((function(t,r){return r&&Object(l.jsx)(c.animated.div,{style:t,className:"bg-container",children:f((function(t,r){return r&&Object(l.jsx)(c.animated.div,{style:t,className:"bg-inner-container",children:Object(l.jsx)(s.a,{clientX:e,clientY:n})})}))})}))},u=Object(a.memo)(f),b=n(42),p=n(10),m=n.n(p);function d(t){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function v(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function x(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),a=g(e.slice(0,r)),i=e.slice(r+1).trim();return a.startsWith("webkit")?t[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:t[a]=i,t}),{})}var w=!1;try{w=!0}catch(K){}function k(t){return b.c.icon?b.c.icon(t):null===t?null:"object"===d(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function S(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?j({},t,e):{}}function N(t){var e=t.forwardedRef,n=h(t,["forwardedRef"]),r=n.icon,a=n.mask,i=n.symbol,o=n.className,c=n.title,s=n.titleId,l=k(r),f=S("classes",[].concat(v(function(t){var e,n=t.spin,r=t.pulse,a=t.fixedWidth,i=t.inverse,o=t.border,c=t.listItem,s=t.flip,l=t.size,f=t.rotation,u=t.pull,b=(j(e={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),"undefined"!==typeof l&&null!==l),j(e,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),j(e,"fa-pull-".concat(u),"undefined"!==typeof u&&null!==u),j(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map((function(t){return b[t]?t:null})).filter((function(t){return t}))}(n)),v(o.split(" ")))),u=S("transform","string"===typeof n.transform?b.c.transform(n.transform):n.transform),p=S("mask",k(a)),m=Object(b.a)(l,O({},f,{},u,{},p,{symbol:i,title:c,titleId:s}));if(!m)return function(){var t;!w&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",l),null;var d=m.abstract,y={ref:e};return Object.keys(n).forEach((function(t){N.defaultProps.hasOwnProperty(t)||(y[t]=n[t])})),T(d[0],y)}N.displayName="FontAwesomeIcon",N.propTypes={border:m.a.bool,className:m.a.string,mask:m.a.oneOfType([m.a.object,m.a.array,m.a.string]),fixedWidth:m.a.bool,inverse:m.a.bool,flip:m.a.oneOf(["horizontal","vertical","both"]),icon:m.a.oneOfType([m.a.object,m.a.array,m.a.string]),listItem:m.a.bool,pull:m.a.oneOf(["right","left"]),pulse:m.a.bool,rotation:m.a.oneOf([0,90,180,270]),size:m.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.a.bool,symbol:m.a.oneOfType([m.a.bool,m.a.string]),title:m.a.string,transform:m.a.oneOfType([m.a.string,m.a.object]),swapOpacity:m.a.bool},N.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var T=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map((function(n){return t(e,n)})),i=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=x(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[g(e)]=r}return t}),{attrs:{}}),o=r.style,c=void 0===o?{}:o,s=h(r,["style"]);return i.attrs.style=O({},i.attrs.style,{},c),e.apply(void 0,[n.tag,O({},i.attrs,{},s)].concat(v(a)))}.bind(null,i.a.createElement),z=n(27),P=(n(90),function(){return Object(l.jsxs)("div",{className:"profile-links",children:[Object(l.jsx)("a",{href:z.c,className:"profile-link",target:"blank",children:Object(l.jsx)(N,{fixedWidth:!0,icon:["fab","github"]})}),Object(l.jsx)("a",{href:z.b,className:"profile-link",target:"blank",children:Object(l.jsx)(N,{fixedWidth:!0,icon:["fab","facebook"]})}),Object(l.jsx)("a",{href:"mailto:".concat(z.a),className:"profile-link",target:"blank",children:Object(l.jsx)(N,{fixedWidth:!0,icon:["far","envelope"]})})]})}),W=Object(a.memo)(P),I=(n(91),function(t){t.initial;var e=t.showProfile;return Object(l.jsx)(c.Transition,{items:e,from:{opacity:0,transform:"translate( -50%, calc( 50vh - 0px ))"},enter:{opacity:1,transform:"translate( -50%, calc( 50vh - 145px ))"},leave:{opacity:0},delay:900,children:function(t,e){return e?Object(l.jsxs)(o.a,{animate:!0,className:"description-container",style:t,children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsxs)("p",{children:["Hi. I'm ",Object(l.jsx)("span",{className:"accent",children:"Rob"}),"."]}),Object(l.jsx)("p",{children:"I'm a senior software engineer and technologist with more than 20 years of experience, but I've been pushing pixels and breaking things since 1982."})]}),Object(l.jsx)(W,{})]}):null}})}),A=Object(a.memo)(I),E=(n(92),"/img/img_profile@1x.png"),C=function(t){var e=t.fullScreen,n=t.initial,r=t.onClick,a=t.screenSize,i="sm"===a||"md"===a,o=i?225:250,s=i?.3:.25,f=i?3:5,u=i?2:3,b="translate( -50%, calc( 50vh - ".concat(o,"px )) scale( 1 )"),p="translate( -50%, calc( 50vh - ".concat(o,"px )) scale( 1 )"),m="translate( -50%, calc( 0vh - -10px )) scale( ".concat(s,")"),d="0px ".concat(f,"px 12px ").concat(u,"px rgba(var(--background-0, 0.35))"),j="0px ".concat(f,"px 12px ").concat(u,"px rgba(var(--background-0, 0))"),y=Object(c.useTransition)(!0,{from:{opacity:0,transform:"translate( -50%, calc( 50vh - 100px)) scale( 1 )"},enter:{opacity:1,transform:b},leave:{opacity:0},delay:600}),O=Object(c.useSpring)({to:{avatarTransform:e?p:m,boxShadow:e?d:j},config:{mass:1,tension:200,friction:20}});return y((function(t,a){return a&&Object(l.jsx)(c.animated.img,{className:"avatar-img ".concat(e?"":"clickable"),srcSet:"".concat(E,", ").concat("/img/img_profile@2x.png"," 2x"),src:E,style:{opacity:t.opacity,boxShadow:O.boxShadow,transform:n?t.transform:O.avatarTransform},onClick:r})}))},D=Object(a.memo)(C),M=n(22),Y=function(){return Object(M.c)()},L=n(55),X=n(34),$=(n(93),function(){var t=Y(),e=Object(L.a)((function(t){return t.settings})).theme;return Object(l.jsxs)("div",{className:"theme-select",children:[Object(l.jsx)("span",{className:"theme-text",children:"Dark Mode"}),Object(l.jsx)("span",{className:"theme-toggle clickable",onClick:function(){var n="dark"===e?"light":"dark";t(Object(X.setTheme)(n))},children:Object(l.jsx)(N,{fixedWidth:!0,icon:["far","dark"===e?"toggle-on":"toggle-off"]})})]})}),R=n(12),U=n(5),_=n(7),F=n(8),J=n(9),H=n(94),q=n.n(H),B=function(t){return function(e){Object(F.a)(r,e);var n=Object(J.a)(r);function r(){var t;Object(U.a)(this,r);for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={screenSize:"sm"},t.getScreenSize=function(t){return t>1024?"xl":t<=1024&&t>650?"lg":t<=650&&t>450?"md":"sm"},t.calculateInnerWidth=function(){var e=t.getScreenSize(window.innerWidth);t.setState({screenSize:e})},t}return Object(_.a)(r,[{key:"componentDidMount",value:function(){this.calculateInnerWidth(),window.addEventListener("resize",q()(this.calculateInnerWidth,200))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.calculateInnerWidth)}},{key:"render",value:function(){var e=this.state.screenSize;return Object(l.jsx)(t,Object(R.a)({screenSize:e},this.props))}}]),r}(a.Component)},G=n(20);n(95),e.default=B((function(t){var e=t.screenSize,n=Object(a.useState)(!0),i=Object(r.a)(n,2),c=i[0],s=(i[1],Object(a.useState)(!1)),f=Object(r.a)(s,2),b=f[0],p=f[1],m=Object(a.useState)(!0),d=Object(r.a)(m,2),j=d[0],y=(d[1],Object(a.useState)(!0)),O=Object(r.a)(y,2),h=O[0],v=O[1],g=Object(a.useState)(0),x=Object(r.a)(g,2),w=x[0],k=x[1],S=Object(a.useState)(0),N=Object(r.a)(S,2),T=N[0],z=N[1],P=function(t){t.gamma&&t.beta&&(k(10*Math.floor(t.gamma)),z(10*Math.floor(t.beta)))};return Object(a.useEffect)((function(){return Object(G.a)((function(){"sm"!==e&&"md"!==e||window.addEventListener("deviceorientation",P,!1),v(!1),p(!0)}),1100),function(){"sm"!==e&&"md"!==e||window.removeEventListener("deviceorientation",P,!1)}}),[]),Object(l.jsxs)(o.a,{className:"landing-container",onMouseMove:function(t){b&&(k(t.clientX),z(t.clientY))},children:[Object(l.jsx)(o.a,{className:"body-container",fillParent:!0}),Object(l.jsx)(u,{initial:h,fullScreen:c,showDescription:j,clientX:w,clientY:T}),Object(l.jsx)($,{}),Object(l.jsx)(A,{initial:h,showProfile:j}),Object(l.jsx)(D,{screenSize:e,initial:h,fullScreen:c,onClick:function(){}})]})}))}}]);
//# sourceMappingURL=0.5a789409.chunk.js.map