
document.addEventListener("DOMContentLoaded", function(){
	/*
	document.addEventListener('click', function(event) {
		var links = document.querySelectorAll('a:not([target]):not([href^="/"]');
		var target = event.target;
		
		console.log(event.target)
		
		for (var i = 0, l = links.length; i < l; i++) {
			var el = target;
			var p = links[i];
			
			while(el && el !== document) {
				if (el === p) {
					if( p.getAttribute('href').indexOf('//' + location.host) >= 0 ){
						return p.setAttribute('target', '_self');
					}else{
						return p.setAttribute('target', '_blank');
					}
				}
				
				el = el.parentNode;
			}
		}
	})
	*/

	function delegationLinks(target){
		if( target.getAttribute('href').indexOf('//' + location.host) >= 0 ){
			return target.setAttribute('target', '_self');
		}else{
			return target.setAttribute('target', '_blank');
		}
	}
	
	function delegationVideoPlayerStart(target){
		var body = target.offsetParent
		body.innerHTML = body.querySelector('textarea').textContent
	}

	function handler_links(evt){
		for (var target=evt.target; target && target!=this; target=target.parentNode) {
			// loop parent nodes from the target to the delegation node
			//if (target.matches('a:not([target]):not([href^="/"]')) {
			if( elmatches(target, 'a:not([target]):not([href^="/"]):not([href^="javascript:"])') ){
				return delegationLinks(target, evt);
				break;
			}else if( elmatches(target, '.videoplayer a.thumbnail') ){
				return delegationVideoPlayerStart(target, evt);
				break;
			}
		}
	}

	['click', 'pointerdown'].forEach(function(e){
		document.addEventListener(e, handler_links)
	})
	/*
	document.addEventListener("click", function(e) {
		for (var target=e.target; target && target!=this; target=target.parentNode) {
			// loop parent nodes from the target to the delegation node
			//if (target.matches('a:not([target]):not([href^="/"]')) {
			if( elmatches(target, 'a:not([target]):not([href^="/"]):not([href^="javascript:"])') ){
				return delegationLinks(target, e);
				break;
			}else if( elmatches(target, '.videoplayer a.thumbnail') ){
				return delegationVideoPlayerStart(target, e);
				break;
			}
		}
	}, false);
	*/
})
