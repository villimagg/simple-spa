(function ($, hbs){
	
    'use strict';
	
	// declare some usefull variables to use throughout the app
	var
		doc = document,
		newPath = '';
	
	// 1: Manually trigger a hashchange to start the app.
	window.onload = function (e) {
		window.history.pushState(null, '', window.location.href + '#home');
		$(window).trigger('hashchange');
	};
	
	// 2: Catch clicks on the root-level element for anchor tag clicks.
	doc.body.addEventListener('click', function (e) {
		var tag = e.target;
		
		// check element clicket
		if (tag.tagName === 'A' && tag.href && e.button === 0) {
			// it's a left-click on an anchor. Lets navigate!
			if (tag.origin === window.location.origin) {
				// prevent the page from navigating
				e.preventDefault();
				
				// it's a link within the site, HURRAY!
				newPath = tag.href;
				
				// Update the URL bar! IMPORTANT!
				window.history.pushState(null, '', newPath);
				render(window.location.hash, data, e);
			}
		}
	});
	
	// Some dummy data. To be fetched from a DB later, preferably.
	var data = {
		'projectName': 'SPA Simple',
		'year': function () {
			var date = new Date();
			return date.getFullYear();
		}
	};
	
	// register Handlebars partials
	hbs.registerPartial({
		'header': hbs.templates.header,
		'footer': hbs.templates.footer
	});
	
	window.onhashchange = function (e) {
		// On every hash change the render function is called with the new hash.
		render(window.location.hash, data, e);
	};
	
	function render(url, data, evt) {
		var temp = url.split('/')[0];
		
		// Hide current page
		$('.pages').addClass('hidden');

		var map = {
			'': function (data) {
				renderPage('home', data);
			},
			'#home': function (data) {
				renderPage('home', data);
			},
			'#gallery': function (data) {
				renderPage('gallery', data);
			},
			'#about': function (data) {
				renderPage('about', data);
			},
			'#blog': function (data) {
				renderPage('blog', data);
			}
		};
		
		if (map[temp]) {
			map[temp](data);
		} else {
			renderErrorPage(data);
		}
	}
	
	function renderPage(page, data) {
		var tpl = hbs.templates[page](data);
		generateView(tpl, page);
	}
	
	function renderErrorPage(data) {
		renderPage('error', data);
	}
	
	function generateView(tpl, page) {
		var pageId = '#' + page;
		
		// remove hidden class from content to be shown
		$(pageId).removeClass('hidden');
		// add the template to the html
		$('.container').html(tpl);
		// move the active class from the former active link
		$('.nav-parent').removeClass('active');
		
		// get the current hash of the location
		var newHash = window.location.hash,
			// get all links
			_links = document.querySelectorAll('.links'),
			currentActiveLink = '';
			
		// iterate over the _links object and find the link with href === newHash
		for ( var i = 0; i < _links.length; i++ ) {
			if ( _links[i].getAttribute('href') === newHash ) {
				// store the link with href == newHash 
				// inside the currentActiveLink variable
				currentActiveLink = _links[i];
			}
		}
		
		// add active class to current active link
		currentActiveLink.parentElement.classList.add('active');
	}
	
})(jQuery, Handlebars);