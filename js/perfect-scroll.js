/*!
 *
 * perfect-scroll.js v0.0.1
 * Rémi Delhaye - https://github.com/RemiDelhaye/Perfect-Scroll
 *
 * Released under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

var nextscroll, prevscroll, scrolling = false, currpage = 0;
var body = document.getElementById("page");

if(body.addEventListener)
{
	body.addEventListener("mousewheel", Scroll, false);
	body.addEventListener("DOMMouseScroll", Scroll, false);
} else {
	body.attachEvent("onmousewheel", Scroll);
};

function Scroll(scrollEvent)
{
	scrollEvent.preventDefault();
	var scrollEvent = window.event || scrollEvent;
	var pos = Math.max(-1, Math.min(1, (scrollEvent.wheelDelta || -scrollEvent.detail)));
	if(!scrolling)
	{
		scrolling = true;
		if(pos > 0)
		{
			if(currpage > 0)
			{
				currpage --;
			};
		} else {
			if(pos < 0)
			{
				if(currpage<$(".full")["length"])
				{
					currpage ++;
				};
			};
		};

		$("html,body").animate({scrollTop:($(".full").height() * currpage) + "px"},800,function ()
		{
			scrolling = false;
		});
	};
};