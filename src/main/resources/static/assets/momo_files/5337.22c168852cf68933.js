(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5337,5697,337,5944],{95944:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(85893),r=a(60536),o=a.n(r),i=a(69111),s=a(86010),c=a(62854),l=a(61949);function u(e){var t=e.data,a=e.title,r=void 0===a?"":a,u=e.isSmall,p=void 0!==u&&u;e.isMobile;return t?(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)("h2",{className:"mb-0 text-center text-momo",children:r}),t.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.UQ,{collapsible:!0,className:"article-question divide-y divide-gray-200",children:t.map((function(e,t){return(0,n.jsxs)(c.Qd,{className:"block ",children:[(0,n.jsxs)(c.KF,{className:(0,s.Z)("question-title relative block w-full cursor-pointer py-3 pl-0 pr-5 text-left  font-semibold text-pine-500 hover:text-opacity-70 focus:outline-none md:py-4 ",p?"text-base":"text-lg"),children:[(0,n.jsx)("div",{className:"jsx-a076a52524a182f8 ",children:(0,i.decode)(e.Title)}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"jsx-a076a52524a182f8 icon absolute right-0 top-1/2 -mt-2 inline h-5  w-5 text-gray-500",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd",className:"jsx-a076a52524a182f8"})})]}),(0,n.jsx)(c.Hk,{className:"soju__prose small pb-5 text-base text-gray-600",children:(0,n.jsx)(l.Z,{data:(0,i.decode)(e.Content)})})]},e.Id)}))}),(0,n.jsx)(o(),{id:"a076a52524a182f8",children:'.article-question [data-reach-accordion-item][data-state="open"] .icon{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}'})]})]}):null}},1447:function(e,t,a){"use strict";var n=a(19425);t.Z=function(){var e=(0,n.Z)([{key:"popup-qrcode",val:null},{key:"popup-uc",val:null}]);window.history.pushState({},"",e)}},85951:function(e,t,a){"use strict";var n=a(19425);t.Z=function(e){var t=document.querySelectorAll('*[data-qr-id="'.concat(e,'"]'));if(t.length>0){var a=[{key:"popup-qrcode",val:e},{key:"popup-uc",val:t[0].getAttribute("data-redirect-uc")}],r=(0,n.Z)(a);window.history.pushState({},"",r)}}},19425:function(e,t){"use strict";t.Z=function(e){var t=function(e,t){for(var a=0;a<t.length;a++)if(t[a].key==e)return t[a];return null},a=[],n=location.origin+location.pathname,r="";return new URL(window.location).searchParams.forEach((function(e,n){t(n,a)||a.push({key:n,val:e})})),e.forEach((function(e,n){var r=t(e.key,a);r?r.val=e.val:a.push({key:e.key,val:e.val})})),a.forEach((function(e,t){e.key&&e.val&&(r+=(r?"&":"")+e.key+"="+e.val)})),n+=(r?"?":"")+r,n+=location.hash}},92703:function(e,t,a){"use strict";var n=a(50414);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,o,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return a.PropTypes=a,a}},45697:function(e,t,a){e.exports=a(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);