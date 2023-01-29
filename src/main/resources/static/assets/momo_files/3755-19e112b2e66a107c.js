"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3755],{41997:function(t,e){var i=function(){return i=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)},n={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",alignThumbnails:"middle",thumbWidth:100,thumbHeight:"80px",thumbMargin:5,appendThumbnailsTo:".lg-components",toggleThumb:!1,enableThumbDrag:!0,enableThumbSwipe:!0,thumbnailSwipeThreshold:10,loadYouTubeThumbnail:!0,youTubeThumbSize:1,thumbnailPluginStrings:{toggleThumbnails:"Toggle thumbnails"}},r="lgContainerResize",s="lgUpdateSlides",u="lgBeforeOpen",h="lgBeforeSlide",o=function(){function t(t,e){return this.thumbOuterWidth=0,this.thumbTotalWidth=0,this.translateX=0,this.thumbClickable=!1,this.core=t,this.$LG=e,this}return t.prototype.init=function(){this.settings=i(i({},n),this.core.settings),this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.galleryItems.length*(this.settings.thumbWidth+this.settings.thumbMargin),this.translateX=0,this.setAnimateThumbStyles(),this.core.settings.allowMediaOverlap||(this.settings.toggleThumb=!1),this.settings.thumbnail&&(this.build(),this.settings.animateThumb?(this.settings.enableThumbDrag&&this.enableThumbDrag(),this.settings.enableThumbSwipe&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggleThumbBar(),this.thumbKeyPress())},t.prototype.build=function(){var t=this;this.setThumbMarkup(),this.manageActiveClassOnSlideChange(),this.$lgThumb.first().on("click.lg touchend.lg",(function(e){var i=t.$LG(e.target);i.hasAttribute("data-lg-item-id")&&setTimeout((function(){if(t.thumbClickable&&!t.core.lgBusy){var e=parseInt(i.attr("data-lg-item-id"));t.core.slide(e,!1,!0,!1)}}),50)})),this.core.LGel.on(h+".thumb",(function(e){var i=e.detail.index;t.animateThumb(i)})),this.core.LGel.on(u+".thumb",(function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth})),this.core.LGel.on(s+".thumb",(function(){t.rebuildThumbnails()})),this.core.LGel.on(r+".thumb",(function(){t.core.lgOpened&&setTimeout((function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth,t.animateThumb(t.core.index),t.thumbOuterWidth=t.core.outer.get().offsetWidth}),50)}))},t.prototype.setThumbMarkup=function(){var t="lg-thumb-outer ";this.settings.alignThumbnails&&(t+="lg-thumb-align-"+this.settings.alignThumbnails);var e='<div class="'+t+'">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';this.core.outer.addClass("lg-has-thumb"),".lg-components"===this.settings.appendThumbnailsTo?this.core.$lgComponents.append(e):this.core.outer.append(e),this.$thumbOuter=this.core.outer.find(".lg-thumb-outer").first(),this.$lgThumb=this.core.outer.find(".lg-thumb").first(),this.settings.animateThumb&&this.core.outer.find(".lg-thumb").css("transition-duration",this.core.settings.speed+"ms").css("width",this.thumbTotalWidth+"px").css("position","relative"),this.setThumbItemHtml(this.core.galleryItems)},t.prototype.enableThumbDrag=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0},i=!1;this.$thumbOuter.addClass("lg-grab"),this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb",(function(n){t.thumbTotalWidth>t.thumbOuterWidth&&(n.preventDefault(),e.cords.startX=n.pageX,e.startTime=new Date,t.thumbClickable=!1,i=!0,t.core.outer.get().scrollLeft+=1,t.core.outer.get().scrollLeft-=1,t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))})),this.$LG(window).on("mousemove.lg.thumb.global"+this.core.lgId,(function(n){t.core.lgOpened&&i&&(e.cords.endX=n.pageX,e=t.onThumbTouchMove(e))})),this.$LG(window).on("mouseup.lg.thumb.global"+this.core.lgId,(function(){t.core.lgOpened&&(e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0,i&&(i=!1,t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))}))},t.prototype.enableThumbSwipe=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0};this.$lgThumb.on("touchstart.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.startX=i.targetTouches[0].pageX,t.thumbClickable=!1,e.startTime=new Date)})),this.$lgThumb.on("touchmove.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.endX=i.targetTouches[0].pageX,e=t.onThumbTouchMove(e))})),this.$lgThumb.on("touchend.lg",(function(){e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0}))},t.prototype.rebuildThumbnails=function(){var t=this;this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),setTimeout((function(){t.thumbTotalWidth=t.core.galleryItems.length*(t.settings.thumbWidth+t.settings.thumbMargin),t.$lgThumb.css("width",t.thumbTotalWidth+"px"),t.$lgThumb.empty(),t.setThumbItemHtml(t.core.galleryItems),t.animateThumb(t.core.index)}),50),setTimeout((function(){t.$thumbOuter.removeClass("lg-rebuilding-thumbnails")}),200)},t.prototype.setTranslate=function(t){this.$lgThumb.css("transform","translate3d(-"+t+"px, 0px, 0px)")},t.prototype.getPossibleTransformX=function(t){return t>this.thumbTotalWidth-this.thumbOuterWidth&&(t=this.thumbTotalWidth-this.thumbOuterWidth),t<0&&(t=0),t},t.prototype.animateThumb=function(t){if(this.$lgThumb.css("transition-duration",this.core.settings.speed+"ms"),this.settings.animateThumb){var e=0;switch(this.settings.currentPagerPosition){case"left":e=0;break;case"middle":e=this.thumbOuterWidth/2-this.settings.thumbWidth/2;break;case"right":e=this.thumbOuterWidth-this.settings.thumbWidth}this.translateX=(this.settings.thumbWidth+this.settings.thumbMargin)*t-1-e,this.translateX>this.thumbTotalWidth-this.thumbOuterWidth&&(this.translateX=this.thumbTotalWidth-this.thumbOuterWidth),this.translateX<0&&(this.translateX=0),this.setTranslate(this.translateX)}},t.prototype.onThumbTouchMove=function(t){return t.newTranslateX=this.translateX,t.isMoved=!0,t.touchMoveTime=(new Date).valueOf(),t.newTranslateX-=t.cords.endX-t.cords.startX,t.newTranslateX=this.getPossibleTransformX(t.newTranslateX),this.setTranslate(t.newTranslateX),this.$thumbOuter.addClass("lg-dragging"),t},t.prototype.onThumbTouchEnd=function(t){t.isMoved=!1,t.endTime=new Date,this.$thumbOuter.removeClass("lg-dragging");var e=t.endTime.valueOf()-t.startTime.valueOf(),i=t.cords.endX-t.cords.startX,n=Math.abs(i)/e;return n>.15&&t.endTime.valueOf()-t.touchMoveTime<30?((n+=1)>2&&(n+=1),n+=n*(Math.abs(i)/this.thumbOuterWidth),this.$lgThumb.css("transition-duration",Math.min(n-1,2)+"settings"),i*=n,this.translateX=this.getPossibleTransformX(this.translateX-i),this.setTranslate(this.translateX)):this.translateX=t.newTranslateX,Math.abs(t.cords.endX-t.cords.startX)<this.settings.thumbnailSwipeThreshold&&(this.thumbClickable=!0),t},t.prototype.getThumbHtml=function(t,e){var i,n=this.core.galleryItems[e].__slideVideoInfo||{};return i=n.youtube&&this.settings.loadYouTubeThumbnail?"//img.youtube.com/vi/"+n.youtube[1]+"/"+this.settings.youTubeThumbSize+".jpg":t,'<div data-lg-item-id="'+e+'" class="lg-thumb-item '+(e===this.core.index?" active":"")+'" \n        style="width:'+this.settings.thumbWidth+"px; height: "+this.settings.thumbHeight+";\n            margin-right: "+this.settings.thumbMargin+'px;">\n            <img data-lg-item-id="'+e+'" src="'+i+'" />\n        </div>'},t.prototype.getThumbItemHtml=function(t){for(var e="",i=0;i<t.length;i++)e+=this.getThumbHtml(t[i].thumb,i);return e},t.prototype.setThumbItemHtml=function(t){var e=this.getThumbItemHtml(t);this.$lgThumb.html(e)},t.prototype.setAnimateThumbStyles=function(){this.settings.animateThumb&&this.core.outer.addClass("lg-animate-thumb")},t.prototype.manageActiveClassOnSlideChange=function(){var t=this;this.core.LGel.on(h+".thumb",(function(e){var i=t.core.outer.find(".lg-thumb-item"),n=e.detail.index;i.removeClass("active"),i.eq(n).addClass("active")}))},t.prototype.toggleThumbBar=function(){var t=this;this.settings.toggleThumb&&(this.core.outer.addClass("lg-can-toggle"),this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.thumbnailPluginStrings.toggleThumbnails+'" class="lg-toggle-thumb lg-icon"></button>'),this.core.outer.find(".lg-toggle-thumb").first().on("click.lg",(function(){t.core.outer.toggleClass("lg-components-open")})))},t.prototype.thumbKeyPress=function(){var t=this;this.$LG(window).on("keydown.lg.thumb.global"+this.core.lgId,(function(e){t.core.lgOpened&&t.settings.toggleThumb&&(38===e.keyCode?(e.preventDefault(),t.core.outer.addClass("lg-components-open")):40===e.keyCode&&(e.preventDefault(),t.core.outer.removeClass("lg-components-open")))}))},t.prototype.destroy=function(){this.settings.thumbnail&&(this.$LG(window).off(".lg.thumb.global"+this.core.lgId),this.core.LGel.off(".lg.thumb"),this.core.LGel.off(".thumb"),this.$thumbOuter.remove(),this.core.outer.removeClass("lg-has-thumb"))},t}();e.Z=o},19302:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(67294);function r(t,e,i){var r=this,s=(0,n.useRef)(null),u=(0,n.useRef)(0),h=(0,n.useRef)(null),o=(0,n.useRef)([]),a=(0,n.useRef)(),l=(0,n.useRef)(),m=(0,n.useRef)(t),c=(0,n.useRef)(!0);m.current=t;var b=!e&&0!==e&&"undefined"!==typeof window;if("function"!==typeof t)throw new TypeError("Expected a function");e=+e||0;var g=!!(i=i||{}).leading,d=!("trailing"in i)||!!i.trailing,f="maxWait"in i,T=f?Math.max(+i.maxWait||0,e):null;(0,n.useEffect)((function(){return c.current=!0,function(){c.current=!1}}),[]);var p=(0,n.useMemo)((function(){var t=function(t){var e=o.current,i=a.current;return o.current=a.current=null,u.current=t,l.current=m.current.apply(i,e)},i=function(t,e){b&&cancelAnimationFrame(h.current),h.current=b?requestAnimationFrame(t):setTimeout(t,e)},n=function(t){if(!c.current)return!1;var i=t-s.current,n=t-u.current;return!s.current||i>=e||i<0||f&&n>=T},p=function(e){return h.current=null,d&&o.current?t(e):(o.current=a.current=null,l.current)},v=function(){var t=Date.now();if(n(t))return p(t);if(c.current){var r=t-s.current,h=t-u.current,o=e-r,a=f?Math.min(o,T-h):o;i(v,a)}},y=function(){for(var m=[],b=0;b<arguments.length;b++)m[b]=arguments[b];var d=Date.now(),T=n(d);if(o.current=m,a.current=r,s.current=d,T){if(!h.current&&c.current)return u.current=s.current,i(v,e),g?t(s.current):l.current;if(f)return i(v,e),t(s.current)}return h.current||i(v,e),l.current};return y.cancel=function(){h.current&&(b?cancelAnimationFrame(h.current):clearTimeout(h.current)),u.current=0,o.current=s.current=a.current=h.current=null},y.isPending=function(){return!!h.current},y.flush=function(){return h.current?p(Date.now()):l.current},y}),[g,f,e,T,d,b]);return p}}}]);