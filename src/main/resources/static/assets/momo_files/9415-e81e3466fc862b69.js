(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9415,7694],{77557:function(t,e,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&n(e,t,i);return s(e,t),e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ImgComparisonSlider=void 0;const a=o(i(67294));"undefined"!==typeof document&&Promise.resolve().then((()=>r(i(59058))));e.ImgComparisonSlider=({children:t,onSlide:e,...i})=>{const n=a.default.createRef();return a.default.useEffect((()=>{void 0!==i.value&&(n.current.value=parseFloat(i.value.toString()))}),[i.value,n]),a.default.useEffect((()=>{e&&n.current.addEventListener("slide",e)}),[]),a.default.createElement("img-comparison-slider",Object.assign({class:i.className?`${i.className} rendered`:"rendered",tabIndex:0,ref:n},i),t)}},77349:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return o}});var n=i(83946),s=i(19013),r=i(13882);function o(t,e){(0,r.Z)(2,arguments);var i=(0,s.default)(t),o=(0,n.Z)(e);return isNaN(o)?new Date(NaN):o?(i.setDate(i.getDate()+o),i):i}},11640:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return o}});var n=i(83946),s=i(19013),r=i(13882);function o(t,e){(0,r.Z)(2,arguments);var i=(0,s.default)(t),o=(0,n.Z)(e);if(isNaN(o))return new Date(NaN);if(!o)return i;var a=i.getDate(),l=new Date(i.getTime());l.setMonth(i.getMonth()+o+1,0);var h=l.getDate();return a>=h?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}},29422:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var n=i(77349),s=i(11640),r=i(19013),o=i(13882),a=i(83946);function l(t,e){if((0,o.Z)(2,arguments),!e||"object"!==typeof e)return new Date(NaN);var i=e.years?(0,a.Z)(e.years):0,l=e.months?(0,a.Z)(e.months):0,h=e.weeks?(0,a.Z)(e.weeks):0,u=e.days?(0,a.Z)(e.days):0,d=e.hours?(0,a.Z)(e.hours):0,c=e.minutes?(0,a.Z)(e.minutes):0,m=e.seconds?(0,a.Z)(e.seconds):0,f=(0,r.default)(t),g=l||i?(0,s.default)(f,l+12*i):f,b=u||h?(0,n.default)(g,u+7*h):g,p=c+60*d,v=m+60*p,T=1e3*v,y=new Date(b.getTime()+T);return y}},36948:function(t,e,i){"use strict";i.d(e,{qk:function(){return r},vh:function(){return s},yJ:function(){return n}});Math.pow(10,8);var n=6e4,s=36e5,r=1e3},20466:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return r}});var n=i(19013),s=i(13882);function r(t){(0,s.Z)(1,arguments);var e=(0,n.default)(t),i=e.getDay();return i}},23855:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return o}});var n=i(36948),s=i(13882),r=i(83946);function o(t,e){var i;(0,s.Z)(1,arguments);var n=(0,r.Z)(null!==(i=null===e||void 0===e?void 0:e.additionalDigits)&&void 0!==i?i:2);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,a=d(t);if(a.date){var l=c(a.date,n);o=m(l.restDateString,l.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var h,u=o.getTime(),f=0;if(a.time&&(f=g(a.time),isNaN(f)))return new Date(NaN);if(!a.timezone){var b=new Date(u+f),v=new Date(0);return v.setFullYear(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()),v.setHours(b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds()),v}return h=p(a.timezone),isNaN(h)?new Date(NaN):new Date(u+f+h)}var a={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,h=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(t){var e,i={},n=t.split(a.dateTimeDelimiter);if(n.length>2)return i;if(/:/.test(n[0])?e=n[0]:(i.date=n[0],e=n[1],a.timeZoneDelimiter.test(i.date)&&(i.date=t.split(a.timeZoneDelimiter)[0],e=t.substr(i.date.length,t.length))),e){var s=a.timezone.exec(e);s?(i.time=e.replace(s[1],""),i.timezone=s[1]):i.time=e}return i}function c(t,e){var i=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(i);if(!n)return{year:NaN,restDateString:""};var s=n[1]?parseInt(n[1]):null,r=n[2]?parseInt(n[2]):null;return{year:null===r?s:100*r,restDateString:t.slice((n[1]||n[2]).length)}}function m(t,e){if(null===e)return new Date(NaN);var i=t.match(l);if(!i)return new Date(NaN);var n=!!i[4],s=f(i[1]),r=f(i[2])-1,o=f(i[3]),a=f(i[4]),h=f(i[5])-1;if(n)return function(t,e,i){return e>=1&&e<=53&&i>=0&&i<=6}(0,a,h)?function(t,e,i){var n=new Date(0);n.setUTCFullYear(t,0,4);var s=n.getUTCDay()||7,r=7*(e-1)+i+1-s;return n.setUTCDate(n.getUTCDate()+r),n}(e,a,h):new Date(NaN);var u=new Date(0);return function(t,e,i){return e>=0&&e<=11&&i>=1&&i<=(v[e]||(T(t)?29:28))}(e,r,o)&&function(t,e){return e>=1&&e<=(T(t)?366:365)}(e,s)?(u.setUTCFullYear(e,r,Math.max(s,o)),u):new Date(NaN)}function f(t){return t?parseInt(t):1}function g(t){var e=t.match(h);if(!e)return NaN;var i=b(e[1]),s=b(e[2]),r=b(e[3]);return function(t,e,i){if(24===t)return 0===e&&0===i;return i>=0&&i<60&&e>=0&&e<60&&t>=0&&t<25}(i,s,r)?i*n.vh+s*n.yJ+1e3*r:NaN}function b(t){return t&&parseFloat(t.replace(",","."))||0}function p(t){if("Z"===t)return 0;var e=t.match(u);if(!e)return 0;var i="+"===e[1]?-1:1,s=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,r)?i*(s*n.vh+r*n.yJ):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function T(t){return t%400===0||t%4===0&&t%100!==0}},59058:function(){(()=>{"use strict";var t={792:(t,e,i)=>{i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,':host{--divider-width: 1px;--divider-color: #fff;--divider-shadow: none;--default-handle-width: 50px;--default-handle-color: #fff;--default-handle-opacity: 1;--default-handle-shadow: none;--handle-position-start: 50%;position:relative;display:inline-block;overflow:hidden;line-height:0;direction:ltr}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){:host{outline-offset:1px}}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;right:0;line-height:normal;font-size:100%;max-height:100%;height:100%;width:100%;--exposure: 50%;--keyboard-transition-time: 0ms;--default-transition-time: 0ms;--transition-time: var(--default-transition-time)}.first .first-overlay-container{position:relative;clip-path:inset(0 var(--exposure) 0 0);transition:clip-path var(--transition-time);height:100%}.first .first-overlay{overflow:hidden;height:100%}.first.focused{will-change:clip-path}.first.focused .first-overlay-container{will-change:clip-path}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none){.first{--keyboard-transition-time: 50ms;--default-transition-time: 10ms;transform:translateX(calc(var(--exposure) * -1));transition:transform var(--transition-time);right:auto}.first .first-overlay-container{transform:translateX(var(--exposure));transition:transform var(--transition-time);clip-path:none}.first.focused{will-change:auto}.first.focused .first-overlay-container{will-change:auto}}}.second{position:relative}.handle-container{transform:translateX(50%);position:absolute;top:0;right:var(--exposure);height:100%;transition:right var(--transition-time),bottom var(--transition-time)}.focused .handle-container{will-change:right}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none){.handle-container{right:0}.focused .handle-container{will-change:auto}}}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color);box-shadow:var(--divider-shadow)}.handle{position:absolute;top:var(--handle-position-start);pointer-events:none;box-sizing:border-box;margin-left:1px;transform:translate(calc(-50% - 0.5px), -50%);line-height:0}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(var(--default-handle-shadow))}.default-handle path{stroke:var(--default-handle-color)}.vertical .first-overlay-container{clip-path:inset(0 0 var(--exposure) 0)}.vertical .handle-container{transform:translateY(50%);height:auto;top:unset;bottom:var(--exposure);width:100%;left:0;flex-direction:row}.vertical .divider:after{height:1px;width:100%;border-top-width:var(--divider-width);border-top-style:solid;border-top-color:var(--divider-color);border-left:0}.vertical .handle{top:auto;left:var(--handle-position-start);transform:translate(calc(-50% - 0.5px), -50%) rotate(90deg)}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none){.vertical.first{transform:translateY(calc(var(--exposure) * -1))}.vertical .first-overlay-container{transform:translateY(var(--exposure));clip-path:none}.vertical .handle-container{bottom:0}}}',""]);const r=s},609:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&s[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(792);const e="rendered",n=document.createElement("template");n.innerHTML='<div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> <div class="first" id="first"> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> <div class="handle-container"> <div class="divider"></div> <div class="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"/> </svg> </slot> </div> </div> </div> ';const s={ArrowLeft:-1,ArrowRight:1},r=["horizontal","vertical"],o=t=>({x:t.touches[0].pageX,y:t.touches[0].pageY}),a=t=>({x:t.pageX,y:t.pageY});class l extends HTMLElement{constructor(){super(),this.exposure=this.hasAttribute("value")?parseFloat(this.getAttribute("value")):50,this.slideOnHover=!1,this.slideDirection="horizontal",this.keyboard="enabled",this.isMouseDown=!1,this.animationDirection=0,this.isFocused=!1,this.onMouseMove=t=>{if(this.isMouseDown||this.slideOnHover){const e=a(t);this.slideToPage(e)}},this.bodyUserSelectStyle="",this.onMouseDown=t=>{if(this.slideOnHover)return;window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onWindowMouseUp),this.isMouseDown=!0,this.enableTransition();const e=a(t);this.slideToPage(e),this.focus(),this.bodyUserSelectStyle=window.document.body.style.userSelect,window.document.body.style.userSelect="none"},this.onWindowMouseUp=()=>{this.isMouseDown=!1,window.document.body.style.userSelect=this.bodyUserSelectStyle,window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onWindowMouseUp)},this.isTouchComparing=!1,this.hasTouchMoved=!1,this.onTouchStart=t=>{this.touchStartPoint=o(t),this.isFocused&&(this.enableTransition(),this.slideToPage(this.touchStartPoint))},this.onTouchMove=t=>{const e=o(t);if(this.isTouchComparing)return this.slideToPage(e),t.preventDefault(),!1;if(!this.hasTouchMoved){const i=Math.abs(e.y-this.touchStartPoint.y),n=Math.abs(e.x-this.touchStartPoint.x);if("horizontal"===this.slideDirection&&i<n||"vertical"===this.slideDirection&&i>n)return this.isTouchComparing=!0,this.focus(),this.slideToPage(e),t.preventDefault(),!1;this.hasTouchMoved=!0}},this.onTouchEnd=()=>{this.isTouchComparing=!1,this.hasTouchMoved=!1},this.onBlur=()=>{this.stopSlideAnimation(),this.isFocused=!1,this.firstElement.classList.remove("focused")},this.onFocus=()=>{this.isFocused=!0,this.firstElement.classList.add("focused")},this.onKeyDown=t=>{if("disabled"===this.keyboard)return;const e=s[t.key];this.animationDirection!==e&&void 0!==e&&(this.animationDirection=e,this.startSlideAnimation())},this.onKeyUp=t=>{if("disabled"===this.keyboard)return;const e=s[t.key];void 0!==e&&this.animationDirection===e&&this.stopSlideAnimation()},this.resetDimensions=()=>{this.imageWidth=this.offsetWidth,this.imageHeight=this.offsetHeight};const e=this.attachShadow({mode:"open"}),i=document.createElement("style");i.innerHTML=t.Z,this.getAttribute("nonce")&&i.setAttribute("nonce",this.getAttribute("nonce")),e.appendChild(i),e.appendChild(n.content.cloneNode(!0)),this.firstElement=e.getElementById("first"),this.secondElement=e.getElementById("second")}get value(){return this.exposure}set value(t){const e=parseFloat(t);e!==this.exposure&&(this.exposure=e,this.enableTransition(),this.setExposure())}get hover(){return this.slideOnHover}set hover(t){this.slideOnHover="false"!==t.toString().toLowerCase(),this.removeEventListener("mousemove",this.onMouseMove),this.slideOnHover&&this.addEventListener("mousemove",this.onMouseMove)}get direction(){return this.slideDirection}set direction(t){this.slideDirection=t.toString().toLowerCase(),this.slide(0),this.firstElement.classList.remove(...r),r.includes(this.slideDirection)&&this.firstElement.classList.add(this.slideDirection)}static get observedAttributes(){return["hover","direction"]}connectedCallback(){this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("dragstart",(t=>(t.preventDefault(),!1))),new ResizeObserver(this.resetDimensions).observe(this),this.setExposure(0),this.keyboard=this.hasAttribute("keyboard")&&"disabled"===this.getAttribute("keyboard")?"disabled":"enabled",this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp),this.addEventListener("focus",this.onFocus),this.addEventListener("blur",this.onBlur),this.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.addEventListener("touchend",this.onTouchEnd),this.addEventListener("mousedown",this.onMouseDown),this.hover=!!this.hasAttribute("hover")&&this.getAttribute("hover"),this.direction=this.hasAttribute("direction")?this.getAttribute("direction"):"horizontal",this.resetDimensions(),this.classList.contains(e)||this.classList.add(e),this.querySelectorAll('[slot="before"], [slot="after"]').length>0&&console.warn('<img-comparison-slider>: slot names "before" and "after" are deprecated and soon won\'t be supported. Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".')}disconnectedCallback(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)}attributeChangedCallback(t,e,i){"hover"===t&&(this.hover=i),"direction"===t&&(this.direction=i),"keyboard"===t&&(this.keyboard="disabled"===i?"disabled":"enabled")}setExposure(t=0){var e;this.exposure=(e=this.exposure+t)<0?0:e>100?100:e,this.firstElement.style.setProperty("--exposure",100-this.exposure+"%")}slide(t=0){this.setExposure(t);const e=new Event("slide");this.dispatchEvent(e)}slideToPage(t){"horizontal"===this.slideDirection&&this.slideToPageX(t.x),"vertical"===this.slideDirection&&this.slideToPageY(t.y)}slideToPageX(t){const e=t-this.getBoundingClientRect().left-window.scrollX;this.exposure=e/this.imageWidth*100,this.slide(0)}slideToPageY(t){const e=t-this.getBoundingClientRect().top-window.scrollY;this.exposure=e/this.imageHeight*100,this.slide(0)}enableTransition(){this.firstElement.style.setProperty("--transition-time","100ms"),this.transitionTimer=window.setTimeout((()=>{this.firstElement.style.setProperty("--transition-time","var(--default-transition-time)"),this.transitionTimer=null}),100)}startSlideAnimation(){let t=null,e=this.animationDirection;this.firstElement.style.setProperty("--transition-time","var(--keyboard-transition-time)");const i=n=>{if(0===this.animationDirection||e!==this.animationDirection)return;null===t&&(t=n);const s=(n-t)/16.666666666666668*this.animationDirection;this.slide(s),setTimeout((()=>window.requestAnimationFrame(i)),0),t=n};window.requestAnimationFrame(i)}stopSlideAnimation(){this.animationDirection=0,this.firstElement.style.setProperty("--transition-time","var(--default-transition-time)")}}"undefined"!=typeof window&&window.customElements.define("img-comparison-slider",l)})()})()},41997:function(t,e){"use strict";var i=function(){return i=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},i.apply(this,arguments)},n={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",alignThumbnails:"middle",thumbWidth:100,thumbHeight:"80px",thumbMargin:5,appendThumbnailsTo:".lg-components",toggleThumb:!1,enableThumbDrag:!0,enableThumbSwipe:!0,thumbnailSwipeThreshold:10,loadYouTubeThumbnail:!0,youTubeThumbSize:1,thumbnailPluginStrings:{toggleThumbnails:"Toggle thumbnails"}},s="lgContainerResize",r="lgUpdateSlides",o="lgBeforeOpen",a="lgBeforeSlide",l=function(){function t(t,e){return this.thumbOuterWidth=0,this.thumbTotalWidth=0,this.translateX=0,this.thumbClickable=!1,this.core=t,this.$LG=e,this}return t.prototype.init=function(){this.settings=i(i({},n),this.core.settings),this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.galleryItems.length*(this.settings.thumbWidth+this.settings.thumbMargin),this.translateX=0,this.setAnimateThumbStyles(),this.core.settings.allowMediaOverlap||(this.settings.toggleThumb=!1),this.settings.thumbnail&&(this.build(),this.settings.animateThumb?(this.settings.enableThumbDrag&&this.enableThumbDrag(),this.settings.enableThumbSwipe&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggleThumbBar(),this.thumbKeyPress())},t.prototype.build=function(){var t=this;this.setThumbMarkup(),this.manageActiveClassOnSlideChange(),this.$lgThumb.first().on("click.lg touchend.lg",(function(e){var i=t.$LG(e.target);i.hasAttribute("data-lg-item-id")&&setTimeout((function(){if(t.thumbClickable&&!t.core.lgBusy){var e=parseInt(i.attr("data-lg-item-id"));t.core.slide(e,!1,!0,!1)}}),50)})),this.core.LGel.on(a+".thumb",(function(e){var i=e.detail.index;t.animateThumb(i)})),this.core.LGel.on(o+".thumb",(function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth})),this.core.LGel.on(r+".thumb",(function(){t.rebuildThumbnails()})),this.core.LGel.on(s+".thumb",(function(){t.core.lgOpened&&setTimeout((function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth,t.animateThumb(t.core.index),t.thumbOuterWidth=t.core.outer.get().offsetWidth}),50)}))},t.prototype.setThumbMarkup=function(){var t="lg-thumb-outer ";this.settings.alignThumbnails&&(t+="lg-thumb-align-"+this.settings.alignThumbnails);var e='<div class="'+t+'">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';this.core.outer.addClass("lg-has-thumb"),".lg-components"===this.settings.appendThumbnailsTo?this.core.$lgComponents.append(e):this.core.outer.append(e),this.$thumbOuter=this.core.outer.find(".lg-thumb-outer").first(),this.$lgThumb=this.core.outer.find(".lg-thumb").first(),this.settings.animateThumb&&this.core.outer.find(".lg-thumb").css("transition-duration",this.core.settings.speed+"ms").css("width",this.thumbTotalWidth+"px").css("position","relative"),this.setThumbItemHtml(this.core.galleryItems)},t.prototype.enableThumbDrag=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0},i=!1;this.$thumbOuter.addClass("lg-grab"),this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb",(function(n){t.thumbTotalWidth>t.thumbOuterWidth&&(n.preventDefault(),e.cords.startX=n.pageX,e.startTime=new Date,t.thumbClickable=!1,i=!0,t.core.outer.get().scrollLeft+=1,t.core.outer.get().scrollLeft-=1,t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))})),this.$LG(window).on("mousemove.lg.thumb.global"+this.core.lgId,(function(n){t.core.lgOpened&&i&&(e.cords.endX=n.pageX,e=t.onThumbTouchMove(e))})),this.$LG(window).on("mouseup.lg.thumb.global"+this.core.lgId,(function(){t.core.lgOpened&&(e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0,i&&(i=!1,t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))}))},t.prototype.enableThumbSwipe=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0};this.$lgThumb.on("touchstart.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.startX=i.targetTouches[0].pageX,t.thumbClickable=!1,e.startTime=new Date)})),this.$lgThumb.on("touchmove.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.endX=i.targetTouches[0].pageX,e=t.onThumbTouchMove(e))})),this.$lgThumb.on("touchend.lg",(function(){e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0}))},t.prototype.rebuildThumbnails=function(){var t=this;this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),setTimeout((function(){t.thumbTotalWidth=t.core.galleryItems.length*(t.settings.thumbWidth+t.settings.thumbMargin),t.$lgThumb.css("width",t.thumbTotalWidth+"px"),t.$lgThumb.empty(),t.setThumbItemHtml(t.core.galleryItems),t.animateThumb(t.core.index)}),50),setTimeout((function(){t.$thumbOuter.removeClass("lg-rebuilding-thumbnails")}),200)},t.prototype.setTranslate=function(t){this.$lgThumb.css("transform","translate3d(-"+t+"px, 0px, 0px)")},t.prototype.getPossibleTransformX=function(t){return t>this.thumbTotalWidth-this.thumbOuterWidth&&(t=this.thumbTotalWidth-this.thumbOuterWidth),t<0&&(t=0),t},t.prototype.animateThumb=function(t){if(this.$lgThumb.css("transition-duration",this.core.settings.speed+"ms"),this.settings.animateThumb){var e=0;switch(this.settings.currentPagerPosition){case"left":e=0;break;case"middle":e=this.thumbOuterWidth/2-this.settings.thumbWidth/2;break;case"right":e=this.thumbOuterWidth-this.settings.thumbWidth}this.translateX=(this.settings.thumbWidth+this.settings.thumbMargin)*t-1-e,this.translateX>this.thumbTotalWidth-this.thumbOuterWidth&&(this.translateX=this.thumbTotalWidth-this.thumbOuterWidth),this.translateX<0&&(this.translateX=0),this.setTranslate(this.translateX)}},t.prototype.onThumbTouchMove=function(t){return t.newTranslateX=this.translateX,t.isMoved=!0,t.touchMoveTime=(new Date).valueOf(),t.newTranslateX-=t.cords.endX-t.cords.startX,t.newTranslateX=this.getPossibleTransformX(t.newTranslateX),this.setTranslate(t.newTranslateX),this.$thumbOuter.addClass("lg-dragging"),t},t.prototype.onThumbTouchEnd=function(t){t.isMoved=!1,t.endTime=new Date,this.$thumbOuter.removeClass("lg-dragging");var e=t.endTime.valueOf()-t.startTime.valueOf(),i=t.cords.endX-t.cords.startX,n=Math.abs(i)/e;return n>.15&&t.endTime.valueOf()-t.touchMoveTime<30?((n+=1)>2&&(n+=1),n+=n*(Math.abs(i)/this.thumbOuterWidth),this.$lgThumb.css("transition-duration",Math.min(n-1,2)+"settings"),i*=n,this.translateX=this.getPossibleTransformX(this.translateX-i),this.setTranslate(this.translateX)):this.translateX=t.newTranslateX,Math.abs(t.cords.endX-t.cords.startX)<this.settings.thumbnailSwipeThreshold&&(this.thumbClickable=!0),t},t.prototype.getThumbHtml=function(t,e){var i,n=this.core.galleryItems[e].__slideVideoInfo||{};return i=n.youtube&&this.settings.loadYouTubeThumbnail?"//img.youtube.com/vi/"+n.youtube[1]+"/"+this.settings.youTubeThumbSize+".jpg":t,'<div data-lg-item-id="'+e+'" class="lg-thumb-item '+(e===this.core.index?" active":"")+'" \n        style="width:'+this.settings.thumbWidth+"px; height: "+this.settings.thumbHeight+";\n            margin-right: "+this.settings.thumbMargin+'px;">\n            <img data-lg-item-id="'+e+'" src="'+i+'" />\n        </div>'},t.prototype.getThumbItemHtml=function(t){for(var e="",i=0;i<t.length;i++)e+=this.getThumbHtml(t[i].thumb,i);return e},t.prototype.setThumbItemHtml=function(t){var e=this.getThumbItemHtml(t);this.$lgThumb.html(e)},t.prototype.setAnimateThumbStyles=function(){this.settings.animateThumb&&this.core.outer.addClass("lg-animate-thumb")},t.prototype.manageActiveClassOnSlideChange=function(){var t=this;this.core.LGel.on(a+".thumb",(function(e){var i=t.core.outer.find(".lg-thumb-item"),n=e.detail.index;i.removeClass("active"),i.eq(n).addClass("active")}))},t.prototype.toggleThumbBar=function(){var t=this;this.settings.toggleThumb&&(this.core.outer.addClass("lg-can-toggle"),this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.thumbnailPluginStrings.toggleThumbnails+'" class="lg-toggle-thumb lg-icon"></button>'),this.core.outer.find(".lg-toggle-thumb").first().on("click.lg",(function(){t.core.outer.toggleClass("lg-components-open")})))},t.prototype.thumbKeyPress=function(){var t=this;this.$LG(window).on("keydown.lg.thumb.global"+this.core.lgId,(function(e){t.core.lgOpened&&t.settings.toggleThumb&&(38===e.keyCode?(e.preventDefault(),t.core.outer.addClass("lg-components-open")):40===e.keyCode&&(e.preventDefault(),t.core.outer.removeClass("lg-components-open")))}))},t.prototype.destroy=function(){this.settings.thumbnail&&(this.$LG(window).off(".lg.thumb.global"+this.core.lgId),this.core.LGel.off(".lg.thumb"),this.core.LGel.off(".thumb"),this.$thumbOuter.remove(),this.core.outer.removeClass("lg-has-thumb"))},t}();e.Z=l},24561:function(t,e,i){"use strict";var n=i(67294),s=function(){return s=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},s.apply(this,arguments)};var r=function(t){var e=t.animate,i=t.animateBegin,r=t.backgroundColor,o=t.backgroundOpacity,a=t.baseUrl,l=t.children,h=t.foregroundColor,u=t.foregroundOpacity,d=t.gradientRatio,c=t.gradientDirection,m=t.uniqueKey,f=t.interval,g=t.rtl,b=t.speed,p=t.style,v=t.title,T=t.beforeMask,y=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(t,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),w=m||Math.random().toString(36).substring(6),D=w+"-diff",x=w+"-animated-diff",O=w+"-aria",C=g?{transform:"scaleX(-1)"}:null,E="0; "+f+"; 1",M=b+"s",k="top-bottom"===c?"rotate(90)":void 0;return(0,n.createElement)("svg",s({"aria-labelledby":O,role:"img",style:s(s({},p),C)},y),v?(0,n.createElement)("title",{id:O},v):null,T&&(0,n.isValidElement)(T)?T:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+D+")",style:{fill:"url("+a+"#"+x+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:D},l),(0,n.createElement)("linearGradient",{id:x,gradientTransform:k},(0,n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:o},e&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:E,dur:M,repeatCount:"indefinite",begin:i})),(0,n.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:u},e&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:E,dur:M,repeatCount:"indefinite",begin:i})),(0,n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:o},e&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:E,dur:M,repeatCount:"indefinite",begin:i})))))};r.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var o=function(t){return t.children?(0,n.createElement)(r,s({},t)):(0,n.createElement)(a,s({},t))},a=function(t){return(0,n.createElement)(o,s({viewBox:"0 0 476 124"},t),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};e.ZP=o},13342:function(t,e,i){"use strict";var n=i(67294);const s=n.forwardRef((function(t,e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},t),n.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));e.Z=s}}]);