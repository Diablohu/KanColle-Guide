"use strict";

function elmatches(elm, selector) {
	var matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),
	    i = matches.length;
	while (--i >= 0 && matches.item(i) !== elm);
	return i > -1;
	return false;
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
	}, false);
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