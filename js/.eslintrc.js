/*jslint browser: false */
/*eslint browser: true */
/*
CLCP v2.1 Clear Links to Current Page
Jonathan Snook
This code is offered unto the public domain
http://www.snook.ca/jonathan/
*/

/* Modified, June 24, 2011 to add capability to change all or only the first link found,
by Bob Novell http://www.bobnovell.com
*/

function clearCurrentLink(changeAll) {
     "use strict";
     var a, i;
     a = document.getElementsByTagName("A");
     for (i = 0; i < a.length; i = i + 1) {
          if (a[i].href === window.location.href.split("#")[0]) {     // code ignores references to named anchors on the same page
               a[i].innerHTML = "<span class='currentlpage'>" + a[i].innerHTML + "</span>";
               removeNode(a[i]);
               if (changeAll === undefined) {  // if nothing is passed for changeAll, we only do one reset - in the navagation list - this is in case pages contain
                    return;                    // If you are unsure what to code for changeAll, specify true if you want all links changed and don't code anything
               }                              // if you want only the first link found changed - like if you only want to change the link in a navigation table.
          }
     }
}

function removeNode(n) {
     "use strict";
     var i;
     if (n.hasChildNodes()) {
          for (i = 0; i < n.childNodes.length; i = i + 1) {
               n.parentNode.insertBefore(n.childNodes[i].cloneNode(true), n);
          }
     }
     n.parentNode.removeChild(n);
}