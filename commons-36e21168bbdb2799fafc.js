(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Intersection Observer Visualizer","description":"Intersection Observer Visualizer","author":"@max8hine"}}}}')},"8+s/":function(t,e,r){"use strict";var n,o=r("q1tI"),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):r&&(u=r(u))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},"9Dj+":function(t,e,r){"use strict";var n=r("SmPk"),o=r("q1tI"),i=r.n(o),a=r("qhky");e.a=function(t){var e=t.children,r=n.data.site.siteMetadata,o=r.author,c=r.siteUrl;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement("body",{className:"relative font-sans bg-grey-light text-base text-charcoal leading-base tracking-base min-h-screen js-body"})),i.a.createElement("div",null,i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:c},o))))}},H8eV:function(t,e,r){"use strict";r("a1Th"),r("Btvt"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf");var n=r("51K9"),o=r("q1tI"),i=r.n(o),a=r("qhky");function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.a=function(t){var e=t.description,r=void 0===e?"":e,o=t.lang,u=void 0===o?"en":o,s=t.meta,l=void 0===s?[]:s,f=t.title,p=void 0===f?"":f,d=n.data.site,y=r||d.siteMetadata.description,h=p||d.siteMetadata.title,m=[{name:"description",content:y},{property:"og:title",content:h},{property:"og:description",content:y},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:h},{name:"twitter:description",content:y}];return m.push.apply(m,c(l)),i.a.createElement(a.a,{htmlAttributes:{lang:u},title:p,titleTemplate:"%s | "+d.siteMetadata.title,meta:m})}},Oyvg:function(t,e,r){var n=r("dyZX"),o=r("Xbzi"),i=r("hswa").f,a=r("kJMx").f,c=r("quPj"),u=r("C/va"),s=n.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,y=new s(p)!==p;if(r("nh4g")&&(!y||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(t,e){var r=this instanceof s,n=c(t),i=void 0===e;return!r&&n&&t.constructor===s&&i?t:o(y?new l(n&&!i?t.source:t,e):l((n=t instanceof s)?t.source:t,n&&i?u.call(t):e),r?this:f,s)};for(var h=function(t){t in s||i(s,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},m=a(l),b=0;m.length>b;)h(m[b++]);f.constructor=s,s.prototype=f,r("KroJ")(n,"RegExp",s)}r("elZq")("RegExp")},SmPk:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"@max8hine","siteUrl":"https://www.gatsbyjs.org"}}}}')},ZhWT:function(t,e,r){r("SRfc"),r("a1Th"),r("OEbY"),r("Oyvg"),r("T39b"),r("rGqo"),r("Btvt"),r("9AAn");var n="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=r.length)return!1;for(u=c;0!=u--;)if(!t(e[u],r[u]))return!1;return!0}if(o&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!r.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],r.get(u.value[0])))return!1;return!0}if(i&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!r.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if((c=e.length)!=r.length)return!1;for(u=c;0!=u--;)if(e[u]!==r[u])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(r,s[u]))return!1;if(n&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],r[s[u]]))return!1;return!0}return e!=e&&r!=r}(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},qhky:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return ht}));r("KKXr"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),r("rGqo"),r("Btvt");var n,o,i,a,c=r("17x9"),u=r.n(c),s=r("8+s/"),l=r.n(s),f=r("ZhWT"),p=r.n(f),d=r("q1tI"),y=r.n(d),h=r("MgzW"),m=r.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),A="cssText",O="href",E="http-equiv",S="innerHTML",C="itemprop",j="name",k="property",x="rel",P="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",q="defer",N="encodeSpecialCharacters",R="onChangeClientState",B="titleTemplate",F=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),_=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},K=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},z=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},V=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(t){var e=$(t,T.TITLE),r=$(t,B);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=$(t,M);return e||n||void 0},W=function(t){return $(t,R)||function(){}},G=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},Z=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},X=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+D(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||r===x&&"canonical"===t[r].toLowerCase()||u===x&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(c)||c!==S&&c!==A&&c!==C||(r=c)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},n[c],o[c]);n[c]=u}return t}),[]).reverse()},$=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},Q=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:t.requestAnimationFrame||Q,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(T.BODY,n),ut(T.HTML,o),ct(f,p);var d={baseTag:st(T.BASE,r),linkTags:st(T.LINK,i),metaTags:st(T.META,a),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,l)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(y[t]=r),n.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===S)r.innerHTML=e.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[L[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})["data-react-helmet"]=!0,o=ft(r,n),[y.a.createElement(T.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=lt(r),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+V(i,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+V(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case b:case v:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(t){var r=L[t]||t;if(r===S||r===A){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),y.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===S||t===A)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+V(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===_.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(T.BASE,e,n),bodyAttributes:pt(b,r,n),htmlAttributes:pt(v,o,n),link:pt(T.LINK,i,n),meta:pt(T.META,a,n),noscript:pt(T.NOSCRIPT,c,n),script:pt(T.SCRIPT,u,n),style:pt(T.STYLE,s,n),title:pt(T.TITLE,{title:f,titleAttributes:p},n)}},yt=l()((function(t){return{baseTag:Z([O,I],t),bodyAttributes:G(b,t),defer:$(t,q),encode:$(t,N),htmlAttributes:G(v,t),linkTags:X(T.LINK,[x,O],t),metaTags:X(T.META,[j,w,E,k,C],t),noscriptTags:X(T.NOSCRIPT,[S],t),onChangeClientState:W(t),scriptTags:X(T.SCRIPT,[P,S],t),styleTags:X(T.STYLE,[A],t),title:J(t),titleAttributes:G(g,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),ht=(o=yt,a=i=function(t){function e(){return H(this,e),z(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return Y({},n,((e={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(n.type){case T.TITLE:return Y({},o,((e={})[n.type]=a,e.titleAttributes=Y({},i),e));case T.BODY:return Y({},o,{bodyAttributes:Y({},i)});case T.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((r={})[n.type]=Y({},i),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=Y({},e);return Object.keys(t).forEach((function(e){var n;r=Y({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return y.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[F[r]||r]=t[r],e}),e)}(K(o,["children"]));switch(r.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=K(t,["children"]),n=Y({},r);return e&&(n=this.mapChildrenToProps(e,n)),y.a.createElement(o,n)},U(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(y.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ht.renderStatic=ht.rewind}).call(this,r("yLpj"))},yLpj:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}t.exports=r}}]);
//# sourceMappingURL=commons-36e21168bbdb2799fafc.js.map