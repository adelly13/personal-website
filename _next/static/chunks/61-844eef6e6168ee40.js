(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,o;var n,{src:l,sizes:m,unoptimized:y=!1,priority:b=!1,loading:w,className:_,quality:C,width:E,height:S,fill:j,style:x,onLoad:M,onLoadingComplete:k,placeholder:O="empty",blurDataURL:P,layout:z,objectFit:R,objectPosition:I,lazyBoundary:L,lazyRoot:T}=e,A=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=a.useContext(f.ImageConfigContext),D=a.useMemo(()=>{let e=p||N||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:o})},[N]),B=A,U=B.loader||d.default;if(delete B.loader,"__next_img_default"in U){if("custom"===D.loader)throw Error('Image with src "'.concat(l,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=U;U=e=>{let{config:t}=e,o=i(e,["config"]);return W(o)}}if(z){"fill"===z&&(j=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];Z&&(x=r({},x,Z));let q={responsive:"100vw",fill:"100vw"}[z];q&&!m&&(m=q)}let F="",G=h(E),H=h(S);if("object"==typeof(n=l)&&(g(n)||void 0!==n.src)){let K=g(l)?l.default:l;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(t=K.blurWidth,o=K.blurHeight,P=P||K.blurDataURL,F=K.src,!j){if(G||H){if(G&&!H){let V=G/K.width;H=Math.round(K.height*V)}else if(!G&&H){let J=H/K.height;G=Math.round(K.width*J)}}else G=K.width,H=K.height}}let $=!b&&("lazy"===w||void 0===w);((l="string"==typeof l?l:F).startsWith("data:")||l.startsWith("blob:"))&&(y=!0,$=!1),D.unoptimized&&(y=!0);let[Q,X]=a.useState(!1),[Y,ee]=a.useState(!1),et=h(C),eo=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:I}:{},Y?{}:{color:"transparent"},x),er="blur"===O&&P&&!Q?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:G,heightInt:H,blurWidth:t,blurHeight:o,blurDataURL:P}),'")')}:{},en=function(e){let{config:t,src:o,unoptimized:r,width:n,quality:l,sizes:i,loader:a}=e;if(r)return{src:o,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,o){let{deviceSizes:r,allSizes:n}=e;if(o){let l=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=l.exec(o);a)i.push(parseInt(a[2]));if(i.length){let u=.01*Math.min(...i);return{widths:n.filter(e=>e>=r[0]*u),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,r)=>"".concat(a({config:t,src:o,quality:l,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:a({config:t,src:o,quality:l,width:u[c]})}}({config:D,src:l,unoptimized:y,width:G,quality:et,sizes:m,loader:U}),el=l,ei={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:B.crossOrigin},ea=a.useRef(M);a.useEffect(()=>{ea.current=M},[M]);let eu=a.useRef(k);a.useEffect(()=>{eu.current=k},[k]);let es=r({isLazy:$,imgAttributes:en,heightInt:H,widthInt:G,qualityInt:et,className:_,imgStyle:eo,blurStyle:er,loading:w,config:D,fill:j,unoptimized:y,placeholder:O,loader:U,srcString:el,onLoadRef:ea,onLoadingCompleteRef:eu,setBlurComplete:X,setShowAltText:ee},B);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},es)),b?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},ei))):null)};var r=o(6495).Z,n=o(2648).Z,l=o(1598).Z,i=o(7273).Z,a=l(o(7294)),u=n(o(3121)),s=o(2675),c=o(139),f=o(8730);o(7238);var d=n(o(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,o,n,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===o&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,u=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>u,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){u=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:o,widthInt:n,qualityInt:l,className:u,imgStyle:s,blurStyle:c,isLazy:f,fill:d,placeholder:p,loading:g,srcString:h,config:v,unoptimized:y,loader:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:C,setShowAltText:E,onLoad:S,onError:j}=e,x=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},x,t,{width:n,height:o,decoding:"async","data-nimg":d?"fill":"1",className:u,loading:g,style:r({},s,c),ref:a.useCallback(e=>{e&&(j&&(e.src=e.src),e.complete&&m(e,h,p,w,_,C,y))},[h,p,w,_,C,j,y]),onLoad(e){let t=e.currentTarget;m(t,h,p,w,_,C,y)},onError(e){E(!0),"blur"===p&&C(!0),j&&j(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,l=r(o(7294)),i=o(1003),a=o(7795),u=o(4465),s=o(2692),c=o(8245),f=o(9246),d=o(227),p=o(3468);let g=new Set;function h(e,t,o,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+n;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let o,r;let{href:a,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:_,scroll:C,locale:E,onClick:S,onMouseEnter:j,onTouchStart:x,legacyBehavior:M=!0!==Boolean(!0)}=e,k=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,M&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let O=!1!==y,P=l.default.useContext(s.RouterContext),z=l.default.useContext(c.AppRouterContext),R=null!=P?P:z,I=!P,{href:L,as:T}=l.default.useMemo(()=>{if(!P){let e=m(a);return{href:e,as:g?m(g):e}}let[t,o]=i.resolveHref(P,a,!0);return{href:t,as:g?i.resolveHref(P,g):o||t}},[P,a,g]),A=l.default.useRef(L),N=l.default.useRef(T);M&&(r=l.default.Children.only(o));let D=M?r&&"object"==typeof r&&r.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(N.current!==T||A.current!==L)&&(W(),N.current=T,A.current=L),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,L,W,B]);l.default.useEffect(()=>{R&&U&&O&&h(R,L,T,{locale:E})},[T,L,U,E,O,null==P?void 0:P.locale,R]);let q={ref:Z,onClick(e){M||"function"!=typeof S||S(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,o,r,n,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(o)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:a,locale:s,scroll:u}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,R,L,T,w,_,C,E,I,O)},onMouseEnter(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(O||!I)&&h(R,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof x||x(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(O||!I)&&h(R,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===r.type&&!("href"in r.props)){let F=void 0!==E?E:null==P?void 0:P.locale,G=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(T,F,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=G||p.addBasePath(u.addLocale(T,F,null==P?void 0:P.defaultLocale))}return M?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},k,q),o)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:u}=e,s=u||!l,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,o){let{id:r,observer:n,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=i.get(r)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:n},a.push(o),i.set(o,t),t}(o);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!c){let r=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(r)}},[d,s,o,t,c]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=o(7294),n=o(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:r,blurHeight:n,blurDataURL:l}=e,i=r||t,a=n||o,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:r,quality:n}=e;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},5675:function(e,t,o){e.exports=o(9749)},1664:function(e,t,o){e.exports=o(1551)}}]);