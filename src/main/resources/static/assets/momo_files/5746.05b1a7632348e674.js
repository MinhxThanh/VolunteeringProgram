(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5746],{71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(94941).Z;o(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(92648).Z,i=o(17273).Z,r=a(o(67294)),l=o(76273),s=o(22725),f=o(63462),c=o(21018),u=o(57190),d=o(71210),p=o(98684),h="undefined"!==typeof r.default.useTransition,x={};function v(e,t,o,n){if(e&&l.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;x[t+"%"+o+(a?"%"+a:"")]=!0}}var b=r.default.forwardRef((function(e,t){var o,a=e.href,b=e.as,m=e.children,y=e.prefetch,j=e.passHref,C=e.replace,g=e.soft,w=e.shallow,k=e.scroll,M=e.locale,N=e.onClick,L=e.onMouseEnter,R=e.onTouchStart,_=e.legacyBehavior,E=void 0===_?!0!==Boolean(!1):_,V=i(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,!E||"string"!==typeof o&&"number"!==typeof o||(o=r.default.createElement("a",null,o));var H=!1!==y,P=n(h?r.default.useTransition():[],2)[1],Z=r.default.useContext(f.RouterContext),T=r.default.useContext(c.AppRouterContext);T&&(Z=T);var z,O=r.default.useMemo((function(){var e=n(l.resolveHref(Z,a,!0),2),t=e[0],o=e[1];return{href:t,as:b?l.resolveHref(Z,b):o||t}}),[Z,a,b]),S=O.href,U=O.as,B=r.default.useRef(S),A=r.default.useRef(U);E&&(z=r.default.Children.only(o));var D=E?z&&"object"===typeof z&&z.ref:t,K=n(u.useIntersection({rootMargin:"200px"}),3),G=K[0],I=K[1],W=K[2],F=r.default.useCallback((function(e){A.current===U&&B.current===S||(W(),A.current=U,B.current=S),G(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[U,D,S,W,G]);r.default.useEffect((function(){var e=I&&H&&l.isLocalURL(S),t="undefined"!==typeof M?M:Z&&Z.locale,o=x[S+"%"+U+(t?"%"+t:"")];e&&!o&&v(Z,S,U,{locale:t})}),[U,S,I,M,H,Z]);var q={ref:F,onClick:function(e){E||"function"!==typeof N||N(e),E&&z.props&&"function"===typeof z.props.onClick&&z.props.onClick(e),e.defaultPrevented||function(e,t,o,n,a,i,r,s,f,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o)){e.preventDefault();var u=function(){"softPush"in t&&"softReplace"in t?t[i?a?"softReplace":"softPush":a?"replace":"push"](o):t[a?"replace":"push"](o,n,{shallow:r,locale:f,scroll:s})};c?c(u):u()}}(e,Z,S,U,C,g,w,k,M,T?P:void 0)},onMouseEnter:function(e){E||"function"!==typeof L||L(e),E&&z.props&&"function"===typeof z.props.onMouseEnter&&z.props.onMouseEnter(e),l.isLocalURL(S)&&v(Z,S,U,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof R||R(e),E&&z.props&&"function"===typeof z.props.onTouchStart&&z.props.onTouchStart(e),l.isLocalURL(S)&&v(Z,S,U,{priority:!0})}};if(!E||j||"a"===z.type&&!("href"in z.props)){var J="undefined"!==typeof M?M:Z&&Z.locale,Q=Z&&Z.isLocaleDomain&&d.getDomainLocale(U,J,Z.locales,Z.domainLocales);q.href=Q||p.addBasePath(s.addLocale(U,J,Z&&Z.defaultLocale))}return E?r.default.cloneElement(z,q):r.default.createElement("a",Object.assign({},V,q),o)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(92648).Z)(o(67294)),a=n.default.createContext(null);t.AppRouterContext=a;var i=n.default.createContext(null);t.LayoutRouterContext=i;var r=n.default.createContext(null);t.GlobalLayoutRouterContext=r},65746:function(e,t,o){"use strict";o.r(t);var n=o(85893),a=o(60536),i=o.n(a),r=o(11163),l=o(5152),s=o.n(l),f=o(41664),c=o.n(f),u=o(67294),d=o(25935),p=o(11702),h=s()((function(){return Promise.all([o.e(2854),o.e(686)]).then(o.bind(o,10686))}),{loadableGenerated:{webpack:function(){return[10686]}}});t.default=function(e){var t,o,a=e.data,l=(0,u.useState)(!1),s=l[0],f=l[1],x=(0,r.useRouter)();(0,u.useEffect)((function(){var e=function(e,t){t.shallow;f(!1)};return x.events.on("routeChangeStart",e),function(){x.events.off("routeChangeStart",e)}}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{className:"jsx-265efa4f963d66f6 "+"mobile-menu header-mobile z-60 sticky top-0 left-0 right-0  border-b border-gray-200 bg-white bg-opacity-95 backdrop-blur-sm lg:hidden ".concat(s?"active":""),children:(0,n.jsxs)("div",{className:"jsx-265efa4f963d66f6 relative z-20 flex items-center pt-1 pb-1 pl-4 pr-1",children:[(0,n.jsxs)("div",{className:"jsx-265efa4f963d66f6 flex flex-none items-center justify-center space-x-2 ",children:[(0,n.jsx)("a",{href:(0,p.Cr)("/"),"aria-label":"MoMo",className:"jsx-265efa4f963d66f6 nav-s-logo block transition-opacity hover:opacity-90",children:(0,n.jsxs)("svg",{width:72,height:72,viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-265efa4f963d66f6 mx-auto block h-9 w-9",children:[(0,n.jsx)("path",{d:"M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8Z",fill:"#A50064",className:"jsx-265efa4f963d66f6"}),(0,n.jsx)("path",{d:"M51.859 10C45.6394 10 40.5057 15.0349 40.5057 21.3533C40.5057 27.5729 45.5407 32.7065 51.859 32.7065C58.0786 32.7065 63.2123 27.6716 63.2123 21.3533C63.2123 15.1337 58.1774 10 51.859 10ZM51.859 26.1908C49.1935 26.1908 47.0215 24.0188 47.0215 21.3533C47.0215 18.6877 49.1935 16.5158 51.859 16.5158C54.5246 16.5158 56.6965 18.6877 56.6965 21.3533C56.6965 24.0188 54.5246 26.1908 51.859 26.1908Z",fill:"white",className:"jsx-265efa4f963d66f6"}),(0,n.jsx)("path",{d:"M28.7576 10C26.8818 10 25.1048 10.5923 23.6239 11.6783C22.2418 10.5923 20.4648 10 18.4903 10C13.7515 10 10 13.8502 10 18.4903V32.7065H16.5158V18.4903C16.5158 17.4043 17.4043 16.6145 18.3915 16.6145C19.4775 16.6145 20.2673 17.503 20.2673 18.4903V32.7065H26.7831V18.4903C26.7831 17.4043 27.6716 16.6145 28.6589 16.6145C29.7448 16.6145 30.5346 17.503 30.5346 18.4903V32.7065H37.0504V18.589C37.2479 13.8502 33.4963 10 28.7576 10Z",fill:"white",className:"jsx-265efa4f963d66f6"}),(0,n.jsx)("path",{d:"M51.859 37.6427C45.6394 37.6427 40.5057 42.6776 40.5057 48.996C40.5057 55.2156 45.5407 60.3492 51.859 60.3492C58.0786 60.3492 63.2123 55.3143 63.2123 48.996C63.2123 42.6776 58.1774 37.6427 51.859 37.6427ZM51.859 53.7347C49.1935 53.7347 47.0215 51.5628 47.0215 48.8972C47.0215 46.2317 49.1935 44.0598 51.859 44.0598C54.5246 44.0598 56.6965 46.2317 56.6965 48.8972C56.6965 51.6615 54.5246 53.7347 51.859 53.7347Z",fill:"white",className:"jsx-265efa4f963d66f6"}),(0,n.jsx)("path",{d:"M28.7576 37.6427C26.8818 37.6427 25.1048 38.235 23.6239 39.321C22.2418 38.235 20.4648 37.6427 18.4903 37.6427C13.7515 37.6427 10 41.4929 10 46.133V60.3492H16.5158V46.0342C16.5158 44.9483 17.4043 44.1585 18.3915 44.1585C19.4775 44.1585 20.2673 45.047 20.2673 46.0342V60.2505H26.7831V46.0342C26.7831 44.9483 27.6716 44.1585 28.6589 44.1585C29.7448 44.1585 30.5346 45.047 30.5346 46.0342V60.2505H37.0504V46.133C37.2479 41.3942 33.4963 37.6427 28.7576 37.6427Z",fill:"white",className:"jsx-265efa4f963d66f6"})]})}),(null===a||void 0===a||null===(t=a.Root)||void 0===t?void 0:t.Url)&&(0,n.jsx)(c(),{href:(0,p.Cr)(a.Root.Url),children:(0,n.jsxs)("a",{target:(null===a||void 0===a||null===(o=a.Root)||void 0===o?void 0:o.NewTab)?"blank":"",className:"jsx-265efa4f963d66f6 nav-s-logo-second relative flex  items-center space-x-2 pl-1  after:absolute after:left-0 after:h-7  after:w-[1px] after:bg-gray-300 after:content-['']",children:[(0,n.jsx)("img",{style:{maxHeight:"30px"},src:a.Root.Icon,className:"jsx-265efa4f963d66f6  block  "}),(0,n.jsx)("div",{className:"jsx-265efa4f963d66f6  ",children:a.Root.Name&&(0,n.jsx)("span",{className:"jsx-265efa4f963d66f6 block  text-xs font-semibold leading-[1.1]  text-momo",children:(0,d.ZP)(a.Root.Name)})})]})})]}),(0,n.jsx)("div",{className:"jsx-265efa4f963d66f6 flex flex-1 justify-end  pl-4 pr-1"}),(0,n.jsx)("div",{className:"jsx-265efa4f963d66f6 flex-none",children:(0,n.jsx)("div",{onClick:function(){f(!s)},className:"jsx-265efa4f963d66f6 mobile-menu__button flex h-11 w-12 cursor-pointer items-center justify-center",children:s?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"jsx-265efa4f963d66f6 h-7 w-7",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12",className:"jsx-265efa4f963d66f6"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"jsx-265efa4f963d66f6 h-7 w-7",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16",className:"jsx-265efa4f963d66f6"})})})})]})}),s&&(0,n.jsx)(u.Suspense,{fallback:"",children:(0,n.jsx)(h,{menu:a})}),(0,n.jsx)(i(),{id:"265efa4f963d66f6",children:".overlay.jsx-265efa4f963d66f6{background-color:rgba(255,255,255,.65);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.overlay.jsx-265efa4f963d66f6{position:fixed;width:100%;height:100%;height:100vh;left:0;right:0;top:0;bottom:0;padding:0;overflow-y:scroll;opacity:0;pointer-events:none;visibility:hidden;-webkit-transition-duration:350ms;-moz-transition-duration:350ms;-o-transition-duration:350ms;transition-duration:350ms;-webkit-transition-property:opacity,visibility;-moz-transition-timing-function:opacity,visibility;-o-transition-timing-function:opacity,visibility;transition-property:opacity,visibility;background-color:rgba(255,255,255,.85)}.overlay.is-active.jsx-265efa4f963d66f6{opacity:1;visibility:visible;pointer-events:all;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);-moz-transition-timing-function:cubic-bezier(.165,.84,.44,1);-o-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}"})]})}},41664:function(e,t,o){e.exports=o(48418)}}]);