(function ($, hbs){
	
    'use strict';
	
	// declare some usefull variables to use throughout the app
	var
		doc = document,
		oldPath = '',
		newPath = '',
		navParentEl = '';
		
	
	// 1: Manually trigger a hashchange to start the app.
	window.onload = function (e) {
		$(window).trigger('hashchange');
	};
	
	// 2: Catch clicks on the root-level element for anchor tag clicks.
	doc.body.addEventListener('click', function (e) {
		//e.stopPropagation();
		var tag = e.target;
		
		// check element clicket
		if (tag.tagName === 'A' && tag.href && e.button === 0) {
			// it's a left-click on an anchor. Lets navigate!
			if (tag.origin === window.location.origin) {
				// prevent the page from navigating
				$('.nav-parent').removeClass('active');
				e.preventDefault();
				
				// it's a link within the site, HURRAY!
				oldPath = window.location;
				newPath = tag.href,
				navParentEl = tag.parentElement;
				console.log(navParentEl);
				// Update the URL bar! IMPORTANT!
				// @TODO: MOVE INTO A FUNCTION OR OBJECT
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
	
	$(window).on('hashchange', function (e) {
		// On every hash change the render function is called with the new hash.
		render(window.location.hash, data, e);
	});
	
	function render(url, data, evt) {
		var temp = url.split('/')[0];
		
		/*if (evt) {
			evt.stopPropagation();
		}
		*/
		
		// Hide current page
		$('.pages').addClass('hidden');
		
		// remove anchors .active class
		//$('.nav-parent').removeClass('active');
		
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
		var pageId = '#' + page,
			container = document.getElementsByClassName('container');
		
		//pageId.classList.remove('hidden');
		$(pageId).removeClass('hidden');
		$('.container').html(tpl);
		
		// add .active class to the new active anchor element
		//$(navParentEl).addClass('active');
		
	}
	
	/*
	// initialize
	$('.page').hide();
	$('#home').show();
    
	// toggle views
	var links = $('.links');
	links.click(function (e) {
		e.preventDefault();
		$('.page').hide();
		$('.nav-parent').removeClass('active');
		
		var
			$this = $(this),
			pageId = $this.attr('href'),
			parentEl = $this.parent();
		
		parentEl.addClass('active');
		$(pageId).show();
	});
	*/
})(jQuery, Handlebars);