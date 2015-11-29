"use strict";

function elmatches(elm, selector) {
	var matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),
	    i = matches.length;
	while (--i >= 0 && matches.item(i) !== elm);
	return i > -1;
}

document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", function (e) {
		for (var target = e.target; target && target != this; target = target.parentNode) {
			if (elmatches(target, 'a:not([target]):not([href^="/"]):not([href^="javascript:"])')) {
				return delegationLinks(target, e);
				break;
			} else if (elmatches(target, '.videoplayer a.thumbnail')) {
				return delegationVideoPlayerStart(target, e);
				break;
			}
		}
	}, !1);
});

function delegationLinks(target) {
	if (target.getAttribute('href').indexOf('//' + location.host) >= 0) {
		return target.setAttribute('target', '_self');
	} else {
		return target.setAttribute('target', '_blank');
	}
}

function delegationVideoPlayerStart(target) {
	var body = target.offsetParent;
	body.innerHTML = body.querySelector('textarea').textContent;
}

"use strict";var KCTip = (function () {
	function t(t, e) {
		for (var i = (t.document || t.ownerDocument).querySelectorAll(e), o = i.length; --o >= 0 && i.item(o) !== t;);return o > -1;
	}function e(t) {
		var e = t.getBoundingClientRect(),
		    i = window.pageXOffset || document.documentElement.scrollLeft,
		    o = window.pageYOffset || document.documentElement.scrollTop;return { top: e.top + o, left: e.left + i };
	}function i(t) {
		s = t.clientX, c = t.clientY, n || requestAnimationFrame(o), n = !0;
	}function o() {
		n = !1;var t = document.documentElement.clientWidth,
		    e = document.documentElement.clientHeight,
		    i = window.pageXOffset || document.documentElement.scrollLeft,
		    o = window.pageYOffset || document.documentElement.scrollTop,
		    r = s + 10 + i,
		    a = c + 25 + o;return r + h.w + 10 > t + i && (r = t + i - h.w - 10), a + h.h + 10 > e + o && (a = e + o - h.h - 10), h.move(r, a);
	}var n = !1,
	    s = void 0,
	    c = void 0,
	    r = document.createElement("style");r.innerHTML = '#kctip{z-index:100;position:absolute;display:none;top:-1000px;left:-1000px;color:#f2f2f2;background:rgba(38,38,38,.9);font-size:14px;line-height:150%;opacity:0;cursor:default!important;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-box-shadow:0 5px 5px rgba(0,0,0,.35);box-shadow:0 5px 5px rgba(0,0,0,.35);max-width:320px}#kctip>.wrapper{display:block;position:relative;z-index:1;border:1px solid #cec6a5;padding:8px 10px}#kctip.mod-blur-backdrop,#kctip.mod-blur-backdrop>.wrapper{background:rgba(38,38,38,.5)}#kctip.on{opacity:1}#kctip.on.mod-blur-backdrop{-webkit-backdrop-filter:blur(7.5px);backdrop-filter:blur(7.5px)}#kctip.show{display:block;will-change:opacity}#kctip:before{position:absolute;width:0;height:0;overflow:hidden;content:"";border:5px solid transparent}#kctip .loading{padding:.25em .75em}#kctip[kctip-indicator-pos=bottom]:before{border-top-color:#cec6a5;left:50%;left:-webkit-calc(50% - 4px);left:calc(50% - 4px);bottom:-10px}#kctip[kctip-indicator-pos=bottom]{-webkit-box-shadow:0 -5px 5px rgba(0,0,0,.35);box-shadow:0 -5px 5px rgba(0,0,0,.35)}#kctip[kctip-indicator-pos=top]:before{border-bottom-color:#cec6a5;left:50%;left:-webkit-calc(50% - 4px);left:calc(50% - 4px);top:-10px}#kctip[kctip-indicator-pos=left]:before{border-right-color:#cec6a5;top:50%;top:-webkit-calc(50% - 4px);top:calc(50% - 4px);left:-10px}#kctip[kctip-indicator-pos=right]:before{border-left-color:#cec6a5;top:50%;top:-webkit-calc(50% - 4px);top:calc(50% - 4px);right:-10px}#kctip[kctip-class=equipments] h3{display:block;position:relative;padding-left:42px;margin:0}#kctip[kctip-class=equipments] h3>s{display:block;width:36px;height:36px;position:absolute;top:0;left:0;background:50% 50% no-repeat}#kctip[kctip-class=equipments] h3>strong{font-size:22px;line-height:22px;color:#e8dfc2;display:block;position:relative;font-weight:400;padding:0 0 2px}#kctip[kctip-class=equipments] h3>strong small{padding-left:.35em;font-size:smaller}#kctip[kctip-class=equipments] h3>small{font-size:14px;font-weight:400;color:#c9c19f;display:block;font-family:"Helvetica Neue",Helvetica,"Nimbus Sans L",Arial,"Liberation Sans","Microsoft YaHei UI","Microsoft YaHei","Hiragino Sans GB","Wenquanyi Micro Hei","WenQuanYi Zen Hei","ST Heiti",SimHei,"WenQuanYi Zen Hei Sharp",Meiryo,sans-serif;padding:0;line-height:14px;margin-top:2px}#kctip[kctip-class=equipments] h3~span{display:block}#kctip[kctip-class=equipments] h3~span.requirement{padding-left:22px;background:0 50% no-repeat;-webkit-background-size:16px 16px;background-size:16px 16px}#kctip[kctip-class=equipments] h3~span.requirement.is-blueprint{background-image:url(http://fleet.diablohu.com/!/assets/images/blueprint.png)}#kctip[kctip-class=equipments] h3~span.requirement.is-catapult{background-image:url(http://fleet.diablohu.com/!/assets/images/catapult.png)}#kctip[kctip-class=equipments] h3+span{border-top:1px dashed #c9c19f;padding-top:8px;margin-top:10px}#kctip[kctip-class=equipments] h3+span.requirement{background-position-y:-webkit-calc(50% + 4px);background-position-y:calc(50% + 4px)}', document.head.appendChild(r);var a = !1,
	    d = !1,
	    p = !1,
	    h = { pos: "bottom", size_indicator: 8, language: "zh_cn", cache: {}, types: ["equipments"], filters: [], countdown_fade: 250, init: function init() {
			if (this.is_init) return this;this.body = document.createElement("div"), this.body.classList.add("kctip"), this.body.setAttribute("id", "kctip");var t = ["transitionend", "webkitTransitionEnd", "mozTransitionEnd"];t.forEach(function (t) {
				this.body.addEventListener(t, function (t) {
					var e = window.getComputedStyle ? getComputedStyle(t.target, null) : t.target.currentStyle;t.currentTarget == t.target && "opacity" == t.propertyName && 0 == e.opacity && h.hideAfter();
				});
			}, this), document.body.appendChild(this.body), this.container = document.createElement("div"), this.container.classList.add("wrapper"), this.body.appendChild(this.container), ("backdrop-filter" in document.documentElement.style || "-webkit-backdrop-filter" in document.documentElement.style) && this.body.addClass("mod-blur-backdrop"), this.is_init = !0;
		}, show: function show(t, e, i) {
			return !a && p && t ? (t = t || document.body, this.el = t, (e = this.content(e)) ? (clearTimeout(this.timeout_fade), this.pos = i || t.getAttribute("kctip-position") || this.pos, this.init(), this.body.classList.contains("show") || this.body.classList.add("show"), this.update(e), this.position(i), void (this.is_showing = !0)) : !1) : !1;
		}, position: function position(t) {
			this.body.style.top = "", this.body.style.left = "", this.w = this.body.offsetWidth, this.h = this.body.offsetHeight;var e = this["pos_" + (t || this.pos)](this.w, this.h);e && this.move(e.x, e.y);
		}, hide: function hide(t) {
			function e() {
				h.body.classList.remove("on"), h.el.removeEventListener(i), h.el = null, h.is_showing = !1, h.pos = "bottom";
			}return this.is_init && this.is_showing ? void ("mouse" == this.pos ? requestAnimationFrame(e) : this.timeout_fade = setTimeout(e, t ? 0 : this.countdown_fade)) : !1;
		}, hideAfter: function hideAfter() {
			this.body.classList.remove("show"), this.body.style.top = "", this.body.style.left = "", this.body.removeAttribute("kctip-indicator-pos"), this.body.removeAttribute("kctip-indicator-offset-x"), this.body.removeAttribute("kctip-indicator-offset-y"), this.body.removeAttribute("kctip-class"), this.container.innerHTML = "", delete this.curLoading, delete this.t, delete this.w, delete this.h, s = null, c = null;
		}, content: function content(t, e) {
			if (!t) {
				var i = void 0,
				    o = void 0;e = e || this.el, t = e.getAttribute("href");var n = /\/([a-z]+)\/([0-9]+)/gi.exec(t);return n && n.length > 1 && (i = n[1], o = n[2]), i && o && this.types.indexOf(i) >= 0 ? (this.t = i, this.cache[i] || (this.cache[i] = {}), this.cache[i][this.language] || (this.cache[i][this.language] = {}), this.cache[i][this.language][o] ? this.cache[i][this.language][o] : this.load(i, o, this.language)) : null;
			}return t;
		}, update: function update(t, e) {
			return this.t = e || this.t, t.nodeType && 1 == t.nodeType ? this.container.appendChild(t) : this.container.innerHTML = t, this.t && this.body.setAttribute("kctip-class", this.t), this.position();
		}, load: function load(t, e, i) {
			this.curLoading = t + "::" + e + "::" + i;var o = document.createElement("script");return o.src = "http://fleet.diablohu.com/!/tip/" + t + "/" + i + "/" + e + ".js", o.addEventListener("error", function (t) {
				h.update("发生错误...", "error");
			}), document.head.appendChild(o), this.t = "loading", "载入中...";
		}, loaded: function loaded(t, e, i, o) {
			return this.cache[t] || (this.cache[t] = {}), this.cache[t][this.language] || (this.cache[t][this.language] = {}), this.cache[t][this.language][e] = o, t + "::" + e + "::" + i == this.curLoading ? h.update(o, t) : void 0;
		}, move: function move(t, e) {
			this.body.style.top = e + "px", this.body.style.left = t + "px", this.body.classList.add("on");
		}, get_indicator_size: function get_indicator_size() {
			return this.size_indicator;
		}, pos_mouse: function pos_mouse(t, e) {
			this.el.addEventListener("mousemove", i);
		}, pos_bottom: function pos_bottom(t, i) {
			var o = e(this.el),
			    n = o.left + (this.el.offsetWidth - this.body.offsetWidth) / 2,
			    s = o.top + this.el.offsetHeight + this.get_indicator_size();return this.body.setAttribute("kctip-indicator-pos", "top"), this.checkpos(n, s, t, i);
		}, pos_top: function pos_top(t, i) {
			var o = e(this.el),
			    n = o.left + (this.el.offsetWidth - this.body.offsetWidth) / 2,
			    s = o.top - i - this.get_indicator_size();return this.body.setAttribute("kctip-indicator-pos", "bottom"), this.checkpos(n, s, t, i);
		}, pos_left: function pos_left(t, i) {
			var o = e(this.el),
			    n = o.left - t - this.get_indicator_size(),
			    s = o.top + (this.el.offsetHeight - this.body.offsetHeight) / 2;return this.body.setAttribute("kctip-indicator-pos", "right"), this.checkpos(n, s, t, i);
		}, pos_right: function pos_right(t, i) {
			var o = e(this.el),
			    n = o.left + this.el.offsetWidth + this.get_indicator_size(),
			    s = o.top + (this.el.offsetHeight - this.body.offsetHeight) / 2;return this.body.setAttribute("kctip-indicator-pos", "left"), this.checkpos(n, s, t, i);
		}, checkpos: function checkpos(t, i, o, n) {
			var s = e(this.el),
			    c = t,
			    r = i,
			    a = { x: c, y: r },
			    d = document.documentElement.clientWidth,
			    p = document.documentElement.clientHeight,
			    h = window.pageXOffset || document.documentElement.scrollLeft,
			    l = window.pageYOffset || document.documentElement.scrollTop;return o = o || this.w, n = n || this.h, t + o > d + h ? a = o > s.left ? { x: d + h - o - 2, y: i } : this.pos_left(o, n) : 0 > t && (a = { x: 10, y: i }), i + n > l + p ? a = this.pos_top(o, n) : l > i && (a = this.pos_bottom(o, n)), this.body.setAttribute("kctip-indicator-offset-x", t - c + "px"), this.body.setAttribute("kctip-indicator-offset-y", i - r + "px"), a;
		}, trigger_by_el: function trigger_by_el(t) {
			this.show(t);
		} };return document.addEventListener("DOMContentLoaded", function () {
		function e(t) {
			a = !0, d = !0, p = !1;
		}function i(t) {
			a = !1, d = !1, p = !1;
		}document.body.addEventListener("touchstart", e), document.body.addEventListener("touchend", i), document.body.addEventListener("touchcancel", i), document.body.addEventListener("pointerover", function (t) {
			"touch" == t.pointerType ? e() : (a = !1, d = !1);
		}), document.body.addEventListener("mouseover", function (t) {
			d ? (d = !1, a = !0) : (a = !1, p = !0);
		}), document.body.addEventListener("mouseout", function (t) {
			p = !1;
		});var o = '[href^="http://fleet.diablohu.com/"], [kctip]',
		    n = document.createEvent("Event"),
		    s = document.createEvent("Event");n.initEvent("tipshow", !0, !0), s.initEvent("tiphide", !0, !0), document.body.addEventListener("mouseover", function (e) {
			if (!a) for (var i = e.target; i && i != this; i = i.parentNode) if (t(i, o)) return h.show(i);
		}, !1), document.body.addEventListener("mouseout", function (e) {
			for (var i = e.target; i && i != this; i = i.parentNode) if (t(i, o)) return h.hide();
		}, !1), document.body.addEventListener("click", function (e) {
			for (var i = e.target; i && i != this; i = i.parentNode) if (t(i, o)) return h.hide(!0);
		}, !1), document.body.addEventListener("tipshow", function (e) {
			for (var i = e.target; i && i != this; i = i.parentNode) if (t(i, o)) return h.trigger_by_el(i);
		}, !1), document.body.addEventListener("tiphide", function (e) {
			for (var i = e.target; i && i != this; i = i.parentNode) if (t(i, o)) return h.hide();
		}, !1);
	}), h;
})();