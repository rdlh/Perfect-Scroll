#Perfect-Scroll#

What is this ?
--------------

*This is a javascript and html document inspired by Apple's iPhone 5C and 5S website*

> ### [DEMO HERE !](http://remidelhaye.github.io/Perfect-Scroll)


How it works ?
--------------

First, I use JQuerys powerness. This is a very simple, light, and easy to use template.

##### HTML :

```html

<!-- A simple <div> tag works very well -->

<div id="page">

    <div class="full lightgreen"></div>
    <div class="full lightblue"></div>
    <div class="full lightgrey"></div>
    <div class="full darkblue"></div>
    
</div>

```

##### Javascript :

```javascript

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

```

##### CSS :

```css

.full { 
  width: 100%;
  height: 100%;
  font-family: 'Open Sans',Helvetica,Arial,san-serif; 
}

.full { overflow: hidden; position: relative; }

.number {
  width: 400px;
  height: 400px;
  border-radius: 100%;
  .wo(.1);
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;
  z-index:9;
  text-align: center;
  &:before{
    font-size:300px;
    line-height:360px;
    display:block;
    width:360px;
    height:360px;
    position:absolute;
    border-radius:100%;
    top:20px;
    left:20px;
  }
}

```

Contributors
------------

 * Creator : [@RemiDelhaye](https://github.com/RemiDelhaye) ([http://remidelhaye.fr](http://remidelhaye.fr))
