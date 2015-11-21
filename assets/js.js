"use strict";

document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener('click', function (event) {
		var links = document.querySelectorAll('a:not([target]):not([href^="/"]');
		var target = event.target;

		for (var i = 0, l = links.length; i < l; i++) {
			var el = target;
			var p = links[i];

			while (el && el !== document) {
				if (el === p) {
					if (p.getAttribute('href').indexOf('//' + location.host) >= 0) {
						return p.setAttribute('target', '_self');
					} else {
						return p.setAttribute('target', '_blank');
					}
				}

				el = el.parentNode;
			}
		}
	});
});