"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9075],{59075:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var i=n(85893),l=n(67294),s=n(47273),o=n(75353),a=(n(41664),n(38541));function r(e){var t,n=e.data,r=e.isMobile,d=void 0!==r&&r,c=e.isNumber,u=void 0===c?null:c;if(void 0==(null===n||void 0===n||null===(t=n.Projects)||void 0===t?void 0:t[0]))return null;var m=n.Projects.length>1?n.Projects:null,p=null;m||(p=n.Projects[0]);var x=(0,l.useState)(0),v=x[0],h=x[1];return(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsxs)(s.mQ,{index:v,onChange:function(e){return h(e)},children:[(0,i.jsx)(a.Z,{className:"-mx-5",children:(0,i.jsxs)(s.td,{className:"flex items-center space-x-3 overflow-scroll pl-5 md:justify-center md:space-x-6 md:pl-0",children:[m.map((function(e,t){return(0,i.jsx)(s.OK,{className:"block whitespace-nowrap border-b-2 px-2 py-1 font-semibold outline-none ring-0 ".concat(t==v?"is-active border-pink-600 text-gray-800":"border-transparent text-gray-500"),children:e.Title},t)})),(0,i.jsx)("div",{className:"w-1",children:"\xa0"})]})}),(0,i.jsx)(s.nP,{children:m.map((function(e,t){return(0,i.jsx)(s.x4,{className:"pt-5",children:(0,i.jsx)(o.Z,{item:e,isNumber:u,isMobile:d})},t)}))})]}),!m&&(0,i.jsx)(o.Z,{item:p,isNumber:u,isMobile:d})]})}},14338:function(e,t,n){var i=n(85893),l=n(41664),s=n.n(l),o=n(25675),a=n.n(o),r=n(67294),d=n(11163),c=n(69111),u=n(25935),m=n(31971),p=n(1785),x=n.n(p),v=n(42298),h=n(23855),f=n(75268),j=n(85393),g=n(54774),b=n(51607),w=n(50374),N=n(81172);t.Z=function(e){var t,n,l,o,p=e.data,y=e.isModal,k=e.isMobile,C=void 0!==k&&k,I=e.isCate,M=void 0!==I&&I,A=function(e){var t,n,l,s,o,r,d=e.data,m=e.isCategory,p=d.Avatar,x=d.Title,f=d.AvatarMobile,j=d.DateShow;return!j&&d.Date&&(j=d.Date),p||x?(0,i.jsxs)("div",{className:"flex h-full flex-col",children:[(0,i.jsx)("div",{className:"sm:w-full",children:(0,i.jsxs)("div",{className:"overflow-hidden rounded-lg bg-gray-200 md:rounded-none",children:[(0,i.jsx)("div",{className:"relative block aspect-1 sm:hidden",children:(f||p)&&(0,i.jsx)(a(),{src:f||p,alt:x,layout:"fill",objectFit:"cover"})}),(0,i.jsx)("div",{className:"relative hidden sm:block",style:{aspectRatio:"508 / 244"},children:p&&(0,i.jsx)(a(),{src:p,alt:x,layout:"fill",objectFit:"cover"})})]})}),(0,i.jsxs)("div",{className:"relative flex flex-1 flex-col sm:w-full sm:flex-auto sm:pb-7 md:px-4",children:[(0,i.jsx)("div",{className:"pt-2.5 pr-2 text-sm line-clamp-2 group-hover:text-pink-600 sm:pt-3 sm:pb-2 sm:pr-0 sm:text-md sm:font-semibold sm:leading-snug sm:line-clamp-none",children:(0,u.ZP)((0,c.decode)(x))}),(0,i.jsxs)("div",{className:"hidden items-center sm:absolute sm:bottom-2 sm:flex md:left-4",children:[m&&(null===d||void 0===d||null===(t=d.Extension)||void 0===t||null===(n=t.Category)||void 0===n?void 0:n.Url)&&(0,i.jsx)("span",{className:"mr-2 inline-block text-tiny font-bold uppercase text-pink-500 hover:text-pink-600",onClick:function(e){var t,n;return function(e,t){e.preventDefault(),e.stopPropagation(),F.push(t)}(e,null===d||void 0===d||null===(t=d.Extension)||void 0===t||null===(n=t.Category)||void 0===n?void 0:n.Url)},children:null===d||void 0===d||null===(l=d.Extension)||void 0===l||null===(s=l.Category)||void 0===s?void 0:s.Name}),j&&(0,i.jsxs)("span",{className:"inline-block text-xs text-gray-500",children:[M&&(null===d||void 0===d||null===(o=d.Extension)||void 0===o||null===(r=o.Category)||void 0===r?void 0:r.Url)&&"\xb7"," ",(0,v.default)((0,h.default)(j),"dd/MM/yyyy")]})]})]})]}):(0,i.jsx)(i.Fragment,{})},S=p.Url,Z=p.Id,D=(0,r.useState)(null),T=D[0],P=D[1],V=(0,r.useState)(!0),L=V[0],E=V[1],F=(0,d.useRouter)(),R=(0,r.useState)(!1),B=R[0],_=R[1],U=(0,r.useState)(!1),W=U[0],z=U[1],H=function(){z(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"group h-full cursor-pointer transition-shadow md:overflow-hidden md:rounded-lg md:bg-white md:shadow-md md:hover:shadow-lg",children:y?(0,i.jsx)("div",{className:"h-full",onClick:function(){z(!0),E(!0),m.o.get("/article/".concat(Z,"?countRelating=0&countNewest=0")).then((function(e){var t,n=e.Data;E(!1),P(n);var i=!(!n.ViewInApp||"app"!=(null===F||void 0===F||null===(t=F.query)||void 0===t?void 0:t.view));i&&_(i);var l=document.createElement("img");l.setAttribute("src","".concat("https://webmomoapi.momo.vn/api","/trace/article/").concat(n.Id)),l.setAttribute("style","position: absolute;display: block;z-index: -10000;left: -100px;top: -100px;height: 1px;width: 1px;"),document.body.appendChild(l),x().dataLayer({dataLayer:{event:"popup.article","content.title":n.Title,"content.id":n.Id,"content.url":n.Link}})}))},children:(0,i.jsx)(A,{data:p,isCategory:M})}):(0,i.jsx)(s(),{href:S,children:(0,i.jsx)("a",{className:"h-full",children:(0,i.jsx)(A,{data:p,isCategory:M})})})}),W&&(0,i.jsxs)(f.default,{isOpen:W,onDismiss:H,isFull:!0,isBig:!1,children:[(0,i.jsx)(g.default,{children:" Tin t\u1ee9c "}),(0,i.jsx)(j.default,{className:"rounded bg-white p-0",children:(0,i.jsx)("div",{className:"p-4 md:p-7",children:(0,i.jsx)(N.Z,{isMobile:C,article:T,loading:L,isViewApp:B})})}),(0,i.jsx)(b.default,{className:"space-x-3 ".concat((null===T||void 0===T?void 0:T.ViewInApp)&&(null===T||void 0===T||null===(t=T.ViewInAppConfig)||void 0===t||null===(n=t.Ctas)||void 0===n?void 0:n.length)>0?"justify-center":""),children:!L&&((null===T||void 0===T?void 0:T.ViewInApp)&&(null===T||void 0===T||null===(l=T.ViewInAppConfig)||void 0===l||null===(o=l.Ctas)||void 0===o?void 0:o.length)>0?T.ViewInAppConfig.Ctas.map((function(e,t){return(0,i.jsx)("div",{className:"flex flex-1 items-start justify-center md:flex-none ",children:(0,i.jsx)(w.Z,{className:"w-full whitespace-nowrap",isViewApp:B,classNameRoot:" flex md:grow-0",cta:e})},t)})):(0,i.jsx)("div",{className:"flex flex-1 items-start justify-end md:flex-none ",children:(0,i.jsx)("a",{onClick:H,className:"btn inline-block cursor-pointer rounded-md bg-pink-700 px-5 py-2 text-center text-sm font-bold uppercase text-white text-opacity-90 transition-all hover:bg-pink-800",children:"\u0110\xf3ng"})}))})]})]})}},75353:function(e,t,n){var i=n(29815),l=n(85893),s=n(41664),o=n.n(s),a=n(67294),r=n(14338),d=n(31971),c=n(16808);t.Z=function(e){var t,n=e.item,s=e.isNumber,u=e.isMobile,m=void 0!==u&&u,p=(0,c.o)().hasMounted,x=s||4,v=n.SortDir,h=n.SortBy,f=n.ProjectIds,j=n.TotalItems,g=f&&f.reduce&&f.reduce((function(e,t){return""==e?e.concat(t.toString()):e.concat(",".concat(t.toString()))}),""),b=(0,a.useState)((null===n||void 0===n||null===(t=n.Items)||void 0===t?void 0:t.slice(0,window.innerWidth>=640?void 0:4))||[]),w=b[0],N=b[1],y=(0,a.useState)(!1),k=y[0],C=y[1],I=w.length<j;return p?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"grid grid-cols-2 gap-y-5 gap-x-3 sm:gap-6 lg:grid-cols-".concat(x),children:w.map((function(e,t){return(0,l.jsx)(r.Z,{data:e,isModal:!0,isMobile:m},t)}))}),n.CtaText&&n.CtaLink?(0,l.jsx)("div",{className:"pt-6 text-center",children:(0,l.jsx)(o(),{href:n.CtaLink,children:(0,l.jsx)("a",{target:n.CtaNewTab?"_blank":"",className:"rounded-full border border-pink-600 py-1 pl-4 pr-6 font-semibold text-pink-700 transition-all hover:bg-pink-50 hover:text-pink-800",children:n.CtaText})})}):I&&(0,l.jsx)("div",{className:"pt-6 text-center",children:(0,l.jsxs)("button",{type:"button",disabled:k,className:"rounded-full border border-pink-600 py-1 pl-4 pr-6 font-semibold text-pink-700 transition-all hover:bg-pink-50 hover:text-pink-800",onClick:function(){C(!0),setTimeout((function(){d.o.get("/article/listByProject?projectIds=".concat(g,"&sortType=").concat(h,"&sortDir=").concat(v,"&count=").concat(window.innerWidth>=1024?x:4,"&lastIdx=").concat(w.length)).then((function(e){if(e.Data){var t=e.Data;N((function(e){return(0,i.Z)(e).concat((0,i.Z)(t.Items))})),C(!1)}})).catch((function(e){}))}),300)},children:[k?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 inline-block h-4 w-4 animate-spin opacity-80",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 inline-block h-4 w-4 animate-bounce opacity-80",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Xem th\xeam"]})})]}):null}}}]);