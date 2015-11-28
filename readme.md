# Help much appreciated

**Problem:** Nav links not updating their `active` state when navigating within the site allthough console.log shows an updated class list of the supposed-to-be formely active li element.

---

At line 28 in `js/app.js` I'm doing an `$('.nav-parent').removeClass('active');`. It doesn't seem to matter weather or not I'm using jQuery or plain vanilla Javascript. The class `active` doesn't get removed from the DOM when clicking on a navigation link. I've tried `event.stopPropagation();` in various places and `$(el).off();` to unbind the click event from the handler without any luck.