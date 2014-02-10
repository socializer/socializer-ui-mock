/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!

Holder - 2.2 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/


var Holder = Holder || {};
(function (app, win) {

var preempted = false,
fallback = false,
canvas = document.createElement('canvas');
var dpr = 1, bsr = 1;
var resizable_images = [];

if (!canvas.getContext) {
	fallback = true;
} else {
	if (canvas.toDataURL("image/png")
		.indexOf("data:image/png") < 0) {
		//Android doesn't support data URI
		fallback = true;
	} else {
		var ctx = canvas.getContext("2d");
	}
}

if(!fallback){
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
}

var ratio = dpr / bsr;

var settings = {
	domain: "holder.js",
	images: "img",
	bgnodes: ".holderjs",
	themes: {
		"gray": {
			background: "#eee",
			foreground: "#aaa",
			size: 12
		},
		"social": {
			background: "#3a5a97",
			foreground: "#fff",
			size: 12
		},
		"industrial": {
			background: "#434A52",
			foreground: "#C2F200",
			size: 12
		},
		"sky": {
			background: "#0D8FDB",
			foreground: "#fff",
			size: 12
		},
		"vine": {
			background: "#39DBAC",
			foreground: "#1E292C",
			size: 12
		},
		"lava": {
			background: "#F8591A",
			foreground: "#1C2846",
			size: 12
		}
	},
	stylesheet: ""
};
app.flags = {
	dimensions: {
		regex: /^(\d+)x(\d+)$/,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				width: +exec[1],
				height: +exec[2]
			}
		}
	},
	fluid: {
		regex: /^([0-9%]+)x([0-9%]+)$/,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				width: exec[1],
				height: exec[2]
			}
		}
	},
	colors: {
		regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				size: settings.themes.gray.size,
				foreground: "#" + exec[2],
				background: "#" + exec[1]
			}
		}
	},
	text: {
		regex: /text\:(.*)/,
		output: function (val) {
			return this.regex.exec(val)[1];
		}
	},
	font: {
		regex: /font\:(.*)/,
		output: function (val) {
			return this.regex.exec(val)[1];
		}
	},
	auto: {
		regex: /^auto$/
	},
	textmode: {
		regex: /textmode\:(.*)/,
		output: function(val){
			return this.regex.exec(val)[1];
		}
	}
}

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}}

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a){
	a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2]);
	var ret=[];	b!==null&&(b.length?ret=b:b.length===0?ret=b:ret=[b]);	return ret;
}

//shallow object property extend
function extend(a,b){
	var c={};
	for(var i in a){
		if(a.hasOwnProperty(i)){
			c[i]=a[i];
		}
	}
	for(var i in b){
		if(b.hasOwnProperty(i)){
			c[i]=b[i];
		}
	}
	return c
}

//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
    /*jshint -W001, -W103 */
    Object.prototype.hasOwnProperty = function(prop) {
		var proto = this.__proto__ || this.constructor.prototype;
		return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
	}
    /*jshint +W001, +W103 */

function text_size(width, height, template) {
	height = parseInt(height, 10);
	width = parseInt(width, 10);
	var bigSide = Math.max(height, width)
	var smallSide = Math.min(height, width)
	var scale = 1 / 12;
	var newHeight = Math.min(smallSide * 0.75, 0.75 * bigSide * scale);
	return {
		height: Math.round(Math.max(template.size, newHeight))
	}
}

function draw(args) {
	var ctx = args.ctx;
	var dimensions = args.dimensions;
	var template = args.template;
	var ratio = args.ratio;
	var holder = args.holder;
	var literal = holder.textmode == "literal";
	var exact = holder.textmode == "exact";

	var ts = text_size(dimensions.width, dimensions.height, template);
	var text_height = ts.height;
	var width = dimensions.width * ratio,
		height = dimensions.height * ratio;
	var font = template.font ? template.font : "sans-serif";
	canvas.width = width;
	canvas.height = height;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = template.background;
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = template.foreground;
	ctx.font = "bold " + text_height + "px " + font;
	var text = template.text ? template.text : (Math.floor(dimensions.width) + "x" + Math.floor(dimensions.height));
	if (literal) {
		var dimensions = holder.dimensions;
		text = dimensions.width + "x" + dimensions.height;
	}
	else if(exact && holder.exact_dimensions){
		var dimensions = holder.exact_dimensions;
		text = (Math.floor(dimensions.width) + "x" + Math.floor(dimensions.height));
	}
	var text_width = ctx.measureText(text).width;
	if (text_width / width >= 0.75) {
		text_height = Math.floor(text_height * 0.75 * (width / text_width));
	}
	//Resetting font size if necessary
	ctx.font = "bold " + (text_height * ratio) + "px " + font;
	ctx.fillText(text, (width / 2), (height / 2), width);
	return canvas.toDataURL("image/png");
}

function render(mode, el, holder, src) {

	var dimensions = holder.dimensions,
		theme = holder.theme,
		text = holder.text ? decodeURIComponent(holder.text) : holder.text;
	var dimensions_caption = dimensions.width + "x" + dimensions.height;
	theme = (text ? extend(theme, {
		text: text
	}) : theme);
	theme = (holder.font ? extend(theme, {
		font: holder.font
	}) : theme);
	el.setAttribute("data-src", src);
	holder.theme = theme;
	el.holder_data = holder;

	if (mode == "image") {
		el.setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);
		if (fallback || !holder.auto) {
			el.style.width = dimensions.width + "px";
			el.style.height = dimensions.height + "px";
		}
		if (fallback) {
			el.style.backgroundColor = theme.background;
		} else {
			el.setAttribute("src", draw({ctx: ctx, dimensions: dimensions, template: theme, ratio:ratio, holder: holder}));

			if(holder.textmode && holder.textmode == "exact"){
				resizable_images.push(el);
				resizable_update(el);
			}

		}
	} else if (mode == "background") {
		if (!fallback) {
			el.style.backgroundImage = "url(" + draw({ctx:ctx, dimensions: dimensions, template: theme, ratio: ratio, holder: holder}) + ")";
			el.style.backgroundSize = dimensions.width + "px " + dimensions.height + "px";
		}
	} else if (mode == "fluid") {
		el.setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);
		if (dimensions.height.slice(-1) == "%") {
			el.style.height = dimensions.height
		} else {
			el.style.height = dimensions.height + "px"
		}
		if (dimensions.width.slice(-1) == "%") {
			el.style.width = dimensions.width
		} else {
			el.style.width = dimensions.width + "px"
		}
		if (el.style.display == "inline" || el.style.display === "" || el.style.display == "none") {
			el.style.display = "block";
		}
		if (fallback) {
			el.style.backgroundColor = theme.background;
		} else {
			resizable_images.push(el);
			resizable_update(el);
		}
	}
}

function dimension_check(el, callback) {
	var dimensions = {
		height: el.clientHeight,
		width: el.clientWidth
	};
	if (!dimensions.height && !dimensions.width) {
		if (el.hasAttribute("data-holder-invisible")) {
			throw new Error("Holder: placeholder is not visible");
		} else {
			el.setAttribute("data-holder-invisible", true)
			setTimeout(function () {
				callback.call(this, el)
			}, 1)
			return null;
		}
	} else {
		el.removeAttribute("data-holder-invisible")
	}
	return dimensions;
}

function resizable_update(element) {
	var images;
	if (element.nodeType == null) {
		images = resizable_images;
	} else {
		images = [element]
	}
	for (var i in images) {
		if (!images.hasOwnProperty(i)) {
			continue;
		}
		var el = images[i]
		if (el.holder_data) {
			var holder = el.holder_data;
			var dimensions = dimension_check(el, resizable_update)
			if(dimensions){
				if(holder.fluid){
					el.setAttribute("src", draw({
						ctx: ctx,
						dimensions: dimensions,
						template: holder.theme,
						ratio: ratio,
						holder: holder
					}))
				}
				if(holder.textmode && holder.textmode == "exact"){
					holder.exact_dimensions = dimensions;
					el.setAttribute("src", draw({
						ctx: ctx,
						dimensions: holder.dimensions,
						template: holder.theme,
						ratio: ratio,
						holder: holder
					}))
				}
			}
		}
	}
}

function parse_flags(flags, options) {
	var ret = {
		theme: extend(settings.themes.gray, {})
	};
	var render = false;
	for (sl = flags.length, j = 0; j < sl; j++) {
		var flag = flags[j];
		if (app.flags.dimensions.match(flag)) {
			render = true;
			ret.dimensions = app.flags.dimensions.output(flag);
		} else if (app.flags.fluid.match(flag)) {
			render = true;
			ret.dimensions = app.flags.fluid.output(flag);
			ret.fluid = true;
		} else if (app.flags.textmode.match(flag)) {
			ret.textmode = app.flags.textmode.output(flag)
		} else if (app.flags.colors.match(flag)) {
			ret.theme = app.flags.colors.output(flag);
		} else if (options.themes[flag]) {
			//If a theme is specified, it will override custom colors
			if(options.themes.hasOwnProperty(flag)){
				ret.theme = extend(options.themes[flag], {});
			}
		} else if (app.flags.font.match(flag)) {
			ret.font = app.flags.font.output(flag);
		} else if (app.flags.auto.match(flag)) {
			ret.auto = true;
		} else if (app.flags.text.match(flag)) {
			ret.text = app.flags.text.output(flag);
		}
	}
	return render ? ret : false;
}

for (var flag in app.flags) {
	if (!app.flags.hasOwnProperty(flag)) continue;
	app.flags[flag].match = function (val) {
		return val.match(this.regex)
	}
}
app.add_theme = function (name, theme) {
	name != null && theme != null && (settings.themes[name] = theme);
	return app;
};
app.add_image = function (src, el) {
	var node = selector(el);
	if (node.length) {
		for (var i = 0, l = node.length; i < l; i++) {
			var img = document.createElement("img")
			img.setAttribute("data-src", src);
			node[i].appendChild(img);
		}
	}
	return app;
};
app.run = function (o) {
	preempted = true;

	var options = extend(settings, o),
		images = [],
		imageNodes = [],
		bgnodes = [];
	if (typeof (options.images) == "string") {
		imageNodes = selector(options.images);
	} else if (window.NodeList && options.images instanceof window.NodeList) {
		imageNodes = options.images;
	} else if (window.Node && options.images instanceof window.Node) {
		imageNodes = [options.images];
	}

	if (typeof (options.bgnodes) == "string") {
		bgnodes = selector(options.bgnodes);
	} else if (window.NodeList && options.elements instanceof window.NodeList) {
		bgnodes = options.bgnodes;
	} else if (window.Node && options.bgnodes instanceof window.Node) {
		bgnodes = [options.bgnodes];
	}
	for (i = 0, l = imageNodes.length; i < l; i++) images.push(imageNodes[i]);
	var holdercss = document.getElementById("holderjs-style");
	if (!holdercss) {
		holdercss = document.createElement("style");
		holdercss.setAttribute("id", "holderjs-style");
		holdercss.type = "text/css";
		document.getElementsByTagName("head")[0].appendChild(holdercss);
	}
	if (!options.nocss) {
		if (holdercss.styleSheet) {
			holdercss.styleSheet.cssText += options.stylesheet;
		} else {
			holdercss.appendChild(document.createTextNode(options.stylesheet));
		}
	}
	var cssregex = new RegExp(options.domain + "\/(.*?)\"?\\)");
	for (var l = bgnodes.length, i = 0; i < l; i++) {
		var src = window.getComputedStyle(bgnodes[i], null)
			.getPropertyValue("background-image");
		var flags = src.match(cssregex);
		var bgsrc = bgnodes[i].getAttribute("data-background-src");
		if (flags) {
			var holder = parse_flags(flags[1].split("/"), options);
			if (holder) {
				render("background", bgnodes[i], holder, src);
			}
		} else if (bgsrc != null) {
			var holder = parse_flags(bgsrc.substr(bgsrc.lastIndexOf(options.domain) + options.domain.length + 1)
				.split("/"), options);
			if (holder) {
				render("background", bgnodes[i], holder, src);
			}
		}
	}
	for (l = images.length, i = 0; i < l; i++) {
		var attr_data_src, attr_src;
		attr_src = attr_data_src = src = null;
		try {
			attr_src = images[i].getAttribute("src");
			attr_datasrc = images[i].getAttribute("data-src");
		} catch (e) {}
		if (attr_datasrc == null && !! attr_src && attr_src.indexOf(options.domain) >= 0) {
			src = attr_src;
		} else if ( !! attr_datasrc && attr_datasrc.indexOf(options.domain) >= 0) {
			src = attr_datasrc;
		}
		if (src) {
			var holder = parse_flags(src.substr(src.lastIndexOf(options.domain) + options.domain.length + 1)
				.split("/"), options);
			if (holder) {
				if (holder.fluid) {
					render("fluid", images[i], holder, src)
				} else {
					render("image", images[i], holder, src);
				}
			}
		}
	}
	return app;
};
contentLoaded(win, function () {
	if (window.addEventListener) {
		window.addEventListener("resize", resizable_update, false);
		window.addEventListener("orientationchange", resizable_update, false);
	} else {
		window.attachEvent("onresize", resizable_update)
	}
	preempted || app.run();
});
if (typeof define === "function" && define.amd) {
	define([], function () {
		return app;
	});
}

})(Holder, window);

/*
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js

  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
 */

(function() {
  var __slice = [].slice;

  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery'], factory);
    } else {
      return factory(window.jQuery);
    }
  })(function($) {
    var $CONTAINER, Api, App, Atwho, Controller, DEFAULT_CALLBACKS, KEY_CODE, Model, View;
    App = (function() {
      function App(inputor) {
        this.current_flag = null;
        this.controllers = {};
        this.alias_maps = {};
        this.$inputor = $(inputor);
        this.listen();
      }

      App.prototype.controller = function(at) {
        return this.controllers[this.alias_maps[at] || at || this.current_flag];
      };

      App.prototype.set_context_for = function(at) {
        this.current_flag = at;
        return this;
      };

      App.prototype.reg = function(flag, setting) {
        var controller, _base;
        controller = (_base = this.controllers)[flag] || (_base[flag] = new Controller(this, flag));
        if (setting.alias) {
          this.alias_maps[setting.alias] = flag;
        }
        controller.init(setting);
        return this;
      };

      App.prototype.listen = function() {
        return this.$inputor.on('keyup.atwho', (function(_this) {
          return function(e) {
            return _this.on_keyup(e);
          };
        })(this)).on('keydown.atwho', (function(_this) {
          return function(e) {
            return _this.on_keydown(e);
          };
        })(this)).on('scroll.atwho', (function(_this) {
          return function(e) {
            var _ref;
            return (_ref = _this.controller()) != null ? _ref.view.hide() : void 0;
          };
        })(this)).on('blur.atwho', (function(_this) {
          return function(e) {
            var c;
            if (c = _this.controller()) {
              return c.view.hide(c.get_opt("display_timeout"));
            }
          };
        })(this));
      };

      App.prototype.dispatch = function() {
        return $.map(this.controllers, (function(_this) {
          return function(c) {
            if (c.look_up()) {
              return _this.set_context_for(c.at);
            }
          };
        })(this));
      };

      App.prototype.on_keyup = function(e) {
        var _ref;
        switch (e.keyCode) {
          case KEY_CODE.ESC:
            e.preventDefault();
            if ((_ref = this.controller()) != null) {
              _ref.view.hide();
            }
            break;
          case KEY_CODE.DOWN:
          case KEY_CODE.UP:
            $.noop();
            break;
          default:
            this.dispatch();
        }
      };

      App.prototype.on_keydown = function(e) {
        var view, _ref;
        view = (_ref = this.controller()) != null ? _ref.view : void 0;
        if (!(view && view.visible())) {
          return;
        }
        switch (e.keyCode) {
          case KEY_CODE.ESC:
            e.preventDefault();
            view.hide();
            break;
          case KEY_CODE.UP:
            e.preventDefault();
            view.prev();
            break;
          case KEY_CODE.DOWN:
            e.preventDefault();
            view.next();
            break;
          case KEY_CODE.TAB:
          case KEY_CODE.ENTER:
            if (!view.visible()) {
              return;
            }
            e.preventDefault();
            view.choose();
            break;
          default:
            $.noop();
        }
      };

      return App;

    })();
    Controller = (function() {
      var uuid, _uuid;

      _uuid = 0;

      uuid = function() {
        return _uuid += 1;
      };

      function Controller(app, at) {
        this.app = app;
        this.at = at;
        this.$inputor = this.app.$inputor;
        this.oDocument = this.$inputor[0].ownerDocument;
        this.oWindow = this.oDocument.defaultView || this.oDocument.parentWindow;
        this.id = this.$inputor[0].id || uuid();
        this.setting = null;
        this.query = null;
        this.pos = 0;
        this.cur_rect = null;
        this.range = null;
        $CONTAINER.append(this.$el = $("<div id='atwho-ground-" + this.id + "'></div>"));
        this.model = new Model(this);
        this.view = new View(this);
      }

      Controller.prototype.init = function(setting) {
        this.setting = $.extend({}, this.setting || $.fn.atwho["default"], setting);
        this.view.init();
        return this.model.reload(this.setting.data);
      };

      Controller.prototype.call_default = function() {
        var args, error, func_name;
        func_name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        try {
          return DEFAULT_CALLBACKS[func_name].apply(this, args);
        } catch (_error) {
          error = _error;
          return $.error("" + error + " Or maybe At.js doesn't have function " + func_name);
        }
      };

      Controller.prototype.trigger = function(name, data) {
        var alias, event_name;
        data.push(this);
        alias = this.get_opt('alias');
        event_name = alias ? "" + name + "-" + alias + ".atwho" : "" + name + ".atwho";
        return this.$inputor.trigger(event_name, data);
      };

      Controller.prototype.callbacks = function(func_name) {
        return this.get_opt("callbacks")[func_name] || DEFAULT_CALLBACKS[func_name];
      };

      Controller.prototype.get_opt = function(at, default_value) {
        var e;
        try {
          return this.setting[at];
        } catch (_error) {
          e = _error;
          return null;
        }
      };

      Controller.prototype.content = function() {
        if (this.$inputor.is('textarea, input')) {
          return this.$inputor.val();
        } else {
          return this.$inputor.text();
        }
      };

      Controller.prototype.catch_query = function() {
        var caret_pos, content, end, query, start, subtext;
        content = this.content();
        caret_pos = this.$inputor.caret('pos');
        subtext = content.slice(0, caret_pos);
        query = this.callbacks("matcher").call(this, this.at, subtext, this.get_opt('start_with_space'));
        if (typeof query === "string" && query.length <= this.get_opt('max_len', 20)) {
          start = caret_pos - query.length;
          end = start + query.length;
          this.pos = start;
          query = {
            'text': query.toLowerCase(),
            'head_pos': start,
            'end_pos': end
          };
          this.trigger("matched", [this.at, query.text]);
        } else {
          this.view.hide();
        }
        return this.query = query;
      };

      Controller.prototype.rect = function() {
        var c, scale_bottom;
        if (!(c = this.$inputor.caret('offset', this.pos - 1))) {
          return;
        }
        if (this.$inputor.attr('contentEditable') === 'true') {
          c = (this.cur_rect || (this.cur_rect = c)) || c;
        }
        scale_bottom = document.selection ? 0 : 2;
        return {
          left: c.left,
          top: c.top,
          bottom: c.top + c.height + scale_bottom
        };
      };

      Controller.prototype.reset_rect = function() {
        if (this.$inputor.attr('contentEditable') === 'true') {
          return this.cur_rect = null;
        }
      };

      Controller.prototype.mark_range = function() {
        if (this.$inputor.attr('contentEditable') === 'true') {
          this.range = this.get_range();
          return this.ie_range = this.get_ie_range();
        }
      };

      Controller.prototype.clear_range = function() {
        return this.range = null;
      };

      Controller.prototype.get_range = function() {
        return this.range || (this.oWindow.getSelection ? this.oWindow.getSelection().getRangeAt(0) : void 0);
      };

      Controller.prototype.get_ie_range = function() {
        return this.ie_range || (this.oDocument.selection ? this.oDocument.selection.createRange() : void 0);
      };

      Controller.prototype.insert_content_for = function($li) {
        var data, data_value, tpl;
        data_value = $li.data('value');
        tpl = this.get_opt('insert_tpl');
        if (this.$inputor.is('textarea, input') || !tpl) {
          return data_value;
        }
        data = $.extend({}, $li.data('item-data'), {
          'atwho-data-value': data_value,
          'atwho-at': this.at
        });
        return this.callbacks("tpl_eval").call(this, tpl, data);
      };

      Controller.prototype.insert = function(content, $li) {
        var $inputor, $insert_node, class_name, content_node, insert_node, pos, range, sel, source, start_str, text;
        $inputor = this.$inputor;
        if ($inputor.attr('contentEditable') === 'true') {
          class_name = "atwho-view-flag atwho-view-flag-" + (this.get_opt('alias') || this.at);
          content_node = "" + content + "<span contenteditable='false'>&nbsp;<span>";
          insert_node = "<span contenteditable='false' class='" + class_name + "'>" + content_node + "</span>";
          $insert_node = $(insert_node, this.oDocument).data('atwho-data-item', $li.data('item-data'));
          if (this.oDocument.selection) {
            $insert_node = $("<span contenteditable='true'></span>", this.oDocument).html($insert_node);
          }
        }
        if ($inputor.is('textarea, input')) {
          content = '' + content;
          source = $inputor.val();
          start_str = source.slice(0, Math.max(this.query.head_pos - this.at.length, 0));
          text = "" + start_str + content + " " + (source.slice(this.query['end_pos'] || 0));
          $inputor.val(text);
          $inputor.caret('pos', start_str.length + content.length + 1);
        } else if (range = this.get_range()) {
          pos = range.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length;
          range.setStart(range.endContainer, Math.max(pos, 0));
          range.setEnd(range.endContainer, range.endOffset);
          range.deleteContents();
          range.insertNode($insert_node[0]);
          range.collapse(false);
          sel = this.oWindow.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (range = this.get_ie_range()) {
          range.moveStart('character', this.query.end_pos - this.query.head_pos - this.at.length);
          range.pasteHTML(content_node);
          range.collapse(false);
          range.select();
        }
        $inputor.focus();
        return $inputor.change();
      };

      Controller.prototype.render_view = function(data) {
        var search_key;
        search_key = this.get_opt("search_key");
        data = this.callbacks("sorter").call(this, this.query.text, data.slice(0, 1001), search_key);
        return this.view.render(data.slice(0, this.get_opt('limit')));
      };

      Controller.prototype.look_up = function() {
        var query, _callback;
        if (!(query = this.catch_query())) {
          return;
        }
        _callback = function(data) {
          if (data && data.length > 0) {
            return this.render_view(data);
          } else {
            return this.view.hide();
          }
        };
        this.model.query(query.text, $.proxy(_callback, this));
        return query;
      };

      return Controller;

    })();
    Model = (function() {
      function Model(context) {
        this.context = context;
        this.at = this.context.at;
        this.storage = this.context.$inputor;
      }

      Model.prototype.saved = function() {
        return this.fetch() > 0;
      };

      Model.prototype.query = function(query, callback) {
        var data, search_key, _remote_filter;
        data = this.fetch();
        search_key = this.context.get_opt("search_key");
        data = this.context.callbacks('filter').call(this.context, query, data, search_key) || [];
        _remote_filter = this.context.callbacks('remote_filter');
        if (data.length > 0 || (!_remote_filter && data.length === 0)) {
          return callback(data);
        } else {
          return _remote_filter.call(this.context, query, callback);
        }
      };

      Model.prototype.fetch = function() {
        return this.storage.data(this.at) || [];
      };

      Model.prototype.save = function(data) {
        return this.storage.data(this.at, this.context.callbacks("before_save").call(this.context, data || []));
      };

      Model.prototype.load = function(data) {
        if (!(this.saved() || !data)) {
          return this._load(data);
        }
      };

      Model.prototype.reload = function(data) {
        return this._load(data);
      };

      Model.prototype._load = function(data) {
        if (typeof data === "string") {
          return $.ajax(data, {
            dataType: "json"
          }).done((function(_this) {
            return function(data) {
              return _this.save(data);
            };
          })(this));
        } else {
          return this.save(data);
        }
      };

      return Model;

    })();
    View = (function() {
      function View(context) {
        this.context = context;
        this.$el = $("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>");
        this.timeout_id = null;
        this.context.$el.append(this.$el);
        this.bind_event();
      }

      View.prototype.init = function() {
        var id;
        id = this.context.get_opt("alias") || this.context.at.charCodeAt(0);
        return this.$el.attr({
          'id': "at-view-" + id
        });
      };

      View.prototype.bind_event = function() {
        var $menu;
        $menu = this.$el.find('ul');
        $menu.on('mouseenter.atwho-view', 'li', function(e) {
          $menu.find('.cur').removeClass('cur');
          return $(e.currentTarget).addClass('cur');
        }).on('click', (function(_this) {
          return function(e) {
            _this.choose();
            return e.preventDefault();
          };
        })(this));
        return this.$el.on('mouseenter.atwho-view', 'ul', (function(_this) {
          return function(e) {
            return _this.context.mark_range();
          };
        })(this)).on('mouseleave.atwho-view', 'ul', (function(_this) {
          return function(e) {
            return _this.context.clear_range();
          };
        })(this));
      };

      View.prototype.visible = function() {
        return this.$el.is(":visible");
      };

      View.prototype.choose = function() {
        var $li, content;
        $li = this.$el.find(".cur");
        content = this.context.insert_content_for($li);
        this.context.insert(this.context.callbacks("before_insert").call(this.context, content, $li), $li);
        this.context.trigger("inserted", [$li]);
        return this.hide();
      };

      View.prototype.reposition = function(rect) {
        var offset;
        if (rect.bottom + this.$el.height() - $(window).scrollTop() > $(window).height()) {
          rect.bottom = rect.top - this.$el.height();
        }
        offset = {
          left: rect.left,
          top: rect.bottom
        };
        this.$el.offset(offset);
        return this.context.trigger("reposition", [offset]);
      };

      View.prototype.next = function() {
        var cur, next;
        cur = this.$el.find('.cur').removeClass('cur');
        next = cur.next();
        if (!next.length) {
          next = this.$el.find('li:first');
        }
        return next.addClass('cur');
      };

      View.prototype.prev = function() {
        var cur, prev;
        cur = this.$el.find('.cur').removeClass('cur');
        prev = cur.prev();
        if (!prev.length) {
          prev = this.$el.find('li:last');
        }
        return prev.addClass('cur');
      };

      View.prototype.show = function() {
        var rect;
        if (!this.visible()) {
          this.$el.show();
        }
        if (rect = this.context.rect()) {
          return this.reposition(rect);
        }
      };

      View.prototype.hide = function(time) {
        var callback;
        if (isNaN(time && this.visible())) {
          this.context.reset_rect();
          return this.$el.hide();
        } else {
          callback = (function(_this) {
            return function() {
              return _this.hide();
            };
          })(this);
          clearTimeout(this.timeout_id);
          return this.timeout_id = setTimeout(callback, time);
        }
      };

      View.prototype.render = function(list) {
        var $li, $ul, item, li, tpl, _i, _len;
        if (!($.isArray(list) && list.length > 0)) {
          this.hide();
          return;
        }
        this.$el.find('ul').empty();
        $ul = this.$el.find('ul');
        tpl = this.context.get_opt('tpl');
        for (_i = 0, _len = list.length; _i < _len; _i++) {
          item = list[_i];
          item = $.extend({}, item, {
            'atwho-at': this.context.at
          });
          li = this.context.callbacks("tpl_eval").call(this.context, tpl, item);
          $li = $(this.context.callbacks("highlighter").call(this.context, li, this.context.query.text));
          $li.data("item-data", item);
          $ul.append($li);
        }
        this.show();
        return $ul.find("li:first").addClass("cur");
      };

      return View;

    })();
    KEY_CODE = {
      DOWN: 40,
      UP: 38,
      ESC: 27,
      TAB: 9,
      ENTER: 13
    };
    DEFAULT_CALLBACKS = {
      before_save: function(data) {
        var item, _i, _len, _results;
        if (!$.isArray(data)) {
          return data;
        }
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          item = data[_i];
          if ($.isPlainObject(item)) {
            _results.push(item);
          } else {
            _results.push({
              name: item
            });
          }
        }
        return _results;
      },
      matcher: function(flag, subtext, should_start_with_space) {
        var match, regexp;
        flag = flag.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        if (should_start_with_space) {
          flag = '(?:^|\\s)' + flag;
        }
        regexp = new RegExp(flag + '([A-Za-z0-9_\+\-]*)$|' + flag + '([^\\x00-\\xff]*)$', 'gi');
        match = regexp.exec(subtext);
        if (match) {
          return match[2] || match[1];
        } else {
          return null;
        }
      },
      filter: function(query, data, search_key) {
        var item, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          item = data[_i];
          if (~item[search_key].toLowerCase().indexOf(query)) {
            _results.push(item);
          }
        }
        return _results;
      },
      remote_filter: null,
      sorter: function(query, items, search_key) {
        var item, _i, _len, _results;
        if (!query) {
          return items;
        }
        _results = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          item.atwho_order = item[search_key].toLowerCase().indexOf(query);
          if (item.atwho_order > -1) {
            _results.push(item);
          }
        }
        return _results.sort(function(a, b) {
          return a.atwho_order - b.atwho_order;
        });
      },
      tpl_eval: function(tpl, map) {
        var error;
        try {
          return tpl.replace(/\$\{([^\}]*)\}/g, function(tag, key, pos) {
            return map[key];
          });
        } catch (_error) {
          error = _error;
          return "";
        }
      },
      highlighter: function(li, query) {
        var regexp;
        if (!query) {
          return li;
        }
        regexp = new RegExp(">\\s*(\\w*)(" + query.replace("+", "\\+") + ")(\\w*)\\s*<", 'ig');
        return li.replace(regexp, function(str, $1, $2, $3) {
          return '> ' + $1 + '<strong>' + $2 + '</strong>' + $3 + ' <';
        });
      },
      before_insert: function(value, $li) {
        return value;
      }
    };
    Api = {
      load: function(at, data) {
        var c;
        if (c = this.controller(at)) {
          return c.model.load(data);
        }
      },
      getInsertedItemsWithIDs: function(at) {
        var c, ids, items;
        if (!(c = this.controller(at))) {
          return [null, null];
        }
        if (at) {
          at = "-" + (c.get_opt('alias') || c.at);
        }
        ids = [];
        items = $.map(this.$inputor.find("span.atwho-view-flag" + (at || "")), function(item) {
          var data;
          data = $(item).data('atwho-data-item');
          if (ids.indexOf(data.id) > -1) {
            return;
          }
          if (data.id) {
            ids.push = data.id;
          }
          return data;
        });
        return [ids, items];
      },
      getInsertedItems: function(at) {
        return Api.getInsertedItemsWithIDs.apply(this, [at])[1];
      },
      getInsertedIDs: function(at) {
        return Api.getInsertedItemsWithIDs.apply(this, [at])[0];
      },
      run: function() {
        return this.dispatch();
      }
    };
    Atwho = {
      init: function(options) {
        var $this, app;
        app = ($this = $(this)).data("atwho");
        if (!app) {
          $this.data('atwho', (app = new App(this)));
        }
        app.reg(options.at, options);
        return this;
      }
    };
    $CONTAINER = $("<div id='atwho-container'></div>");
    $.fn.atwho = function(method) {
      var result, _args;
      _args = arguments;
      $('body').append($CONTAINER);
      result = null;
      this.filter('textarea, input, [contenteditable=true]').each(function() {
        var app;
        if (typeof method === 'object' || !method) {
          return Atwho.init.apply(this, _args);
        } else if (Api[method]) {
          if (app = $(this).data('atwho')) {
            return result = Api[method].apply(app, Array.prototype.slice.call(_args, 1));
          }
        } else {
          return $.error("Method " + method + " does not exist on jQuery.caret");
        }
      });
      return result || this;
    };
    return $.fn.atwho["default"] = {
      at: void 0,
      alias: void 0,
      data: null,
      tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
      insert_tpl: "<span>${atwho-data-value}</span>",
      callbacks: DEFAULT_CALLBACKS,
      search_key: "name",
      start_with_space: true,
      limit: 5,
      max_len: 20,
      display_timeout: 300
    };
  });

}).call(this);

/*
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js

  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
 */


/*
本插件操作 textarea 或者 input 内的插入符
只实现了获得插入符在文本框中的位置，我设置
插入符的位置.
 */

(function() {
  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery'], factory);
    } else {
      return factory(window.jQuery);
    }
  })(function($) {
    "use strict";
    var EditableCaret, InputCaret, Mirror, Utils, methods, oDocument, oFrame, oWindow, pluginName;
    pluginName = 'caret';
    EditableCaret = (function() {
      function EditableCaret($inputor) {
        this.$inputor = $inputor;
        this.domInputor = this.$inputor[0];
      }

      EditableCaret.prototype.setPos = function(pos) {
        return this.domInputor;
      };

      EditableCaret.prototype.getIEPosition = function() {
        return $.noop();
      };

      EditableCaret.prototype.getPosition = function() {
        return $.noop();
      };

      EditableCaret.prototype.getOldIEPos = function() {
        var preCaretTextRange, textRange;
        textRange = oDocument.selection.createRange();
        preCaretTextRange = oDocument.body.createTextRange();
        preCaretTextRange.moveToElementText(this.domInputor);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        return preCaretTextRange.text.length;
      };

      EditableCaret.prototype.getPos = function() {
        var clonedRange, pos, range;
        if (range = this.range()) {
          clonedRange = range.cloneRange();
          clonedRange.selectNodeContents(this.domInputor);
          clonedRange.setEnd(range.endContainer, range.endOffset);
          pos = clonedRange.toString().length;
          clonedRange.detach();
          return pos;
        } else if (oDocument.selection) {
          return this.getOldIEPos();
        }
      };

      EditableCaret.prototype.getOldIEOffset = function() {
        var range, rect;
        range = oDocument.selection.createRange().duplicate();
        range.moveStart("character", -1);
        rect = range.getBoundingClientRect();
        return {
          height: rect.bottom - rect.top,
          left: rect.left,
          top: rect.top
        };
      };

      EditableCaret.prototype.getOffset = function(pos) {
        var clonedRange, offset, range, rect;
        if (oWindow.getSelection && (range = this.range())) {
          if (range.endOffset - 1 < 0) {
            return null;
          }
          clonedRange = range.cloneRange();
          clonedRange.setStart(range.endContainer, range.endOffset - 1);
          clonedRange.setEnd(range.endContainer, range.endOffset);
          rect = clonedRange.getBoundingClientRect();
          offset = {
            height: rect.height,
            left: rect.left + rect.width,
            top: rect.top
          };
          clonedRange.detach();
        } else if (oDocument.selection) {
          offset = this.getOldIEOffset();
        }
        if (offset && !oFrame) {
          offset.top += $(oWindow).scrollTop();
          offset.left += $(oWindow).scrollLeft();
        }
        return offset;
      };

      EditableCaret.prototype.range = function() {
        var sel;
        if (!oWindow.getSelection) {
          return;
        }
        sel = oWindow.getSelection();
        if (sel.rangeCount > 0) {
          return sel.getRangeAt(0);
        } else {
          return null;
        }
      };

      return EditableCaret;

    })();
    InputCaret = (function() {
      function InputCaret($inputor) {
        this.$inputor = $inputor;
        this.domInputor = this.$inputor[0];
      }

      InputCaret.prototype.getIEPos = function() {
        var endRange, inputor, len, normalizedValue, pos, range, textInputRange;
        inputor = this.domInputor;
        range = oDocument.selection.createRange();
        pos = 0;
        if (range && range.parentElement() === inputor) {
          normalizedValue = inputor.value.replace(/\r\n/g, "\n");
          len = normalizedValue.length;
          textInputRange = inputor.createTextRange();
          textInputRange.moveToBookmark(range.getBookmark());
          endRange = inputor.createTextRange();
          endRange.collapse(false);
          if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
            pos = len;
          } else {
            pos = -textInputRange.moveStart("character", -len);
          }
        }
        return pos;
      };

      InputCaret.prototype.getPos = function() {
        if (oDocument.selection) {
          return this.getIEPos();
        } else {
          return this.domInputor.selectionStart;
        }
      };

      InputCaret.prototype.setPos = function(pos) {
        var inputor, range;
        inputor = this.domInputor;
        if (oDocument.selection) {
          range = inputor.createTextRange();
          range.move("character", pos);
          range.select();
        } else if (inputor.setSelectionRange) {
          inputor.setSelectionRange(pos, pos);
        }
        return inputor;
      };

      InputCaret.prototype.getIEOffset = function(pos) {
        var h, textRange, x, y;
        textRange = this.domInputor.createTextRange();
        pos || (pos = this.getPos());
        textRange.move('character', pos);
        x = textRange.boundingLeft;
        y = textRange.boundingTop;
        h = textRange.boundingHeight;
        return {
          left: x,
          top: y,
          height: h
        };
      };

      InputCaret.prototype.getOffset = function(pos) {
        var $inputor, offset, position;
        $inputor = this.$inputor;
        if (oDocument.selection) {
          offset = this.getIEOffset(pos);
          offset.top += $(oWindow).scrollTop() + $inputor.scrollTop();
          offset.left += $(oWindow).scrollLeft() + $inputor.scrollLeft();
          return offset;
        } else {
          offset = $inputor.offset();
          position = this.getPosition(pos);
          return offset = {
            left: offset.left + position.left - $inputor.scrollLeft(),
            top: offset.top + position.top - $inputor.scrollTop(),
            height: position.height
          };
        }
      };

      InputCaret.prototype.getPosition = function(pos) {
        var $inputor, at_rect, format, html, mirror, start_range;
        $inputor = this.$inputor;
        format = function(value) {
          return value.replace(/</g, '&lt').replace(/>/g, '&gt').replace(/`/g, '&#96').replace(/"/g, '&quot').replace(/\r\n|\r|\n/g, "<br />");
        };
        if (pos === void 0) {
          pos = this.getPos();
        }
        start_range = $inputor.val().slice(0, pos);
        html = "<span>" + format(start_range) + "</span>";
        html += "<span id='caret'>|</span>";
        mirror = new Mirror($inputor);
        return at_rect = mirror.create(html).rect();
      };

      InputCaret.prototype.getIEPosition = function(pos) {
        var h, inputorOffset, offset, x, y;
        offset = this.getIEOffset(pos);
        inputorOffset = this.$inputor.offset();
        x = offset.left - inputorOffset.left;
        y = offset.top - inputorOffset.top;
        h = offset.height;
        return {
          left: x,
          top: y,
          height: h
        };
      };

      return InputCaret;

    })();
    Mirror = (function() {
      Mirror.prototype.css_attr = ["overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "fontFamily", "borderStyle", "borderWidth", "wordWrap", "fontSize", "lineHeight", "overflowX", "text-align"];

      function Mirror($inputor) {
        this.$inputor = $inputor;
      }

      Mirror.prototype.mirrorCss = function() {
        var css;
        css = {
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: -20000,
          'white-space': 'pre-wrap'
        };
        $.each(this.css_attr, (function(_this) {
          return function(i, p) {
            return css[p] = _this.$inputor.css(p);
          };
        })(this));
        return css;
      };

      Mirror.prototype.create = function(html) {
        this.$mirror = $('<div></div>');
        this.$mirror.css(this.mirrorCss());
        this.$mirror.html(html);
        this.$inputor.after(this.$mirror);
        return this;
      };

      Mirror.prototype.rect = function() {
        var $flag, pos, rect;
        $flag = this.$mirror.find("#caret");
        pos = $flag.position();
        rect = {
          left: pos.left,
          top: pos.top,
          height: $flag.height()
        };
        this.$mirror.remove();
        return rect;
      };

      return Mirror;

    })();
    Utils = {
      contentEditable: function($inputor) {
        return !!($inputor[0].contentEditable && $inputor[0].contentEditable === 'true');
      }
    };
    methods = {
      pos: function(pos) {
        if (pos) {
          return this.setPos(pos);
        } else {
          return this.getPos();
        }
      },
      position: function(pos) {
        if (oDocument.selection) {
          return this.getIEPosition(pos);
        } else {
          return this.getPosition(pos);
        }
      },
      offset: function(pos) {
        var iOffset, offset;
        offset = this.getOffset(pos);
        if (oFrame) {
          iOffset = $(oFrame).offset();
          offset.top += iOffset.top;
          offset.left += iOffset.left;
        }
        return offset;
      }
    };
    oDocument = null;
    oWindow = null;
    oFrame = null;
    $.fn.caret = function(method) {
      var caret;
      oDocument = this[0].ownerDocument;
      oWindow = oDocument.defaultView || oDocument.parentWindow;
      oFrame = oWindow.frameElement;
      caret = Utils.contentEditable(this) ? new EditableCaret(this) : new InputCaret(this);
      if (methods[method]) {
        return methods[method].apply(caret, Array.prototype.slice.call(arguments, 1));
      } else {
        return $.error("Method " + method + " does not exist on jQuery.caret");
      }
    };
    $.fn.caret.EditableCaret = EditableCaret;
    $.fn.caret.InputCaret = InputCaret;
    $.fn.caret.Utils = Utils;
    return $.fn.caret.apis = methods;
  });

}).call(this);
(function() {
  this.resetNoteForm = function() {
    $('#note_content').removeAttr('style').val('');
    $('#new_note').on('click', function() {
      $('#note_form_actions').removeClass('hidden');
      return $('#note_content').animate({
        height: 100
      }, 'fast');
    });
    return $('#note_content').on('click focus', function() {
      $('#note_form_actions').removeClass('hidden');
      return $(this).animate({
        height: 100
      }, 'fast');
    });
  };

  jQuery(function() {
    resetNoteForm();
    return $('#note_form_cancel').on('click', function() {
      $('#note_form_actions').addClass('hidden');
      return $('#note_content').removeAttr('style').val('');
    });
  });

}).call(this);


var emojis = [
  "smile", "iphone", "girl", "smiley", "heart", "kiss", "copyright", "coffee",
  "a", "ab", "airplane", "alien", "ambulance", "angel", "anger", "angry",
  "arrow_forward", "arrow_left", "arrow_lower_left", "arrow_lower_right",
  "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right",
  "art", "astonished", "atm", "b", "baby", "baby_chick", "baby_symbol",
  "balloon", "bamboo", "bank", "barber", "baseball", "basketball", "bath",
  "bear", "beer", "beers", "beginner", "bell", "bento", "bike", "bikini",
  "bird", "birthday", "black_square", "blue_car", "blue_heart", "blush",
  "boar", "boat", "bomb", "book", "boot", "bouquet", "bow", "bowtie",
  "boy", "bread", "briefcase", "broken_heart", "bug", "bulb",
  "person_with_blond_hair", "phone", "pig", "pill", "pisces", "plus1",
  "point_down", "point_left", "point_right", "point_up", "point_up_2",
  "police_car", "poop", "post_office", "postbox", "pray", "princess",
  "punch", "purple_heart", "question", "rabbit", "racehorse", "radio",
  "up", "us", "v", "vhs", "vibration_mode", "virgo", "vs", "walking",
  "warning", "watermelon", "wave", "wc", "wedding", "whale", "wheelchair",
  "white_square", "wind_chime", "wink", "wink2", "wolf", "woman",
  "womans_hat", "womens", "x", "yellow_heart", "zap", "zzz", "+1",
  "-1"
]

var emojis_list = $.map(emojis, function(value, i) {
  return {'id':i,'name':value};
});

var names  = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia", "Alexander", "Sophia", "William", "Ava", "Joshua", "Emily", "Daniel", "Madison", "Jayden", "Abigail", "Noah", "Chloe", "Dominic", "Martin", "Tom"];
var names = $.map(names,function(value,i) {
  return {'id':i,'name':value,'email':value+"@email.com"};
});

var hash_tags = ["socializer", "social", "tag", "blog", "code", "caturday"]
var hash_tags = $.map(hash_tags, function(value, i) {
  return {'id':i,'name':value};
});

//http://a248.e.akamai.net/assets.github.com/images/icons/emoji/8.png
$("#note_content")
  .atwho({
    at: "@",
    data: names,
    tpl: "<li data-value='@${name}'>${name} <small>${email}</small></li>",
    show_the_at: true
  })
  .atwho({
    at: "#",
    tpl: '<li data-value="#${name}">${name}</li>',
    data: hash_tags
  })
  .atwho({
    at: ":",
    tpl: "<li data-value=':${name}:'><img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png' height='20' width='20'/> ${name} </li>",
    data: emojis_list
  });
