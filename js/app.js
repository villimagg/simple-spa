var App = (function(hbs) {
    'use strict';
    
    // declare some usefull variables to use throughout the app
    var
        doc = document,
        newPath = '';
    
    // Some dummy data. To be fetched from a DB later, preferably.
    var data = {
        'projectName': 'SPA Simple',
        'year': function() {
            var date = new Date();
            return date.getFullYear();
        }
    };
    
    // register Handlebars partials
    hbs.registerPartial({
        'header': hbs.templates.header,
        'footer': hbs.templates.footer
    });
    
    // 2: Catch clicks on the root-level element for anchor tag clicks.
    doc.body.addEventListener('click', function(e) {
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
    
    function triggerHashChange(el) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('hashchange', true, false);
        el.dispatchEvent(event);
    }
    
    // define a new Data Type for working with the URL
    function Url() {
        this.location = window.location;
        this.origin = this.location.origin;
        this.fullHash = this.location.hash;
        this.hashArray = this.location.hash.split('/');
        this.hash = this.hashArray[0];
        this.href = this.location.href;
    }
    
    // 1: Manually trigger a hashchange to start the app.
    function initialize() {
        window.onload = function(e) {
            var url = new Url();
            
            // check url if user is elsewhere than on the home page
            // if so then trigger hashchange on that url
            if ( url.hashArray.length > 1 && url.hash !== '#home' || url.hash === ''  ) {
                // user is on the home page, lets reload and pushState
                // to trigger the hashchange event
                window.history.pushState(null, '', url.origin + '/' + '#home');
                triggerHashChange(window);
            } else {
                // user is somewhere else in the document, lets not reload to #home
                triggerHashChange(window);
            }
        }
    }
    
    window.onhashchange = function(e) {
        // On every hash change the render function is called with the new hash.
        render(window.location.hash, data, e);
    };
    
    function render(url, data, evt) {
        var temp = url.split('/')[0];
        
        // map the url hash to functions to render relative page
        // can be moved into a seperate function or object Router f.ex.
        var map = {
            '': function(data) {
                renderPage('home', data);
            },
            '#home': function(data) {
                renderPage('home', data);
            },
            '#gallery': function(data) {
                renderPage('gallery', data);
            },
            '#about': function(data) {
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
        var pageId = '#' + page;

        // add the template to the html
        $('.container').html(tpl);
        // move the active class from the former active link
        $('.nav-parent').removeClass('active');

        // get the current hash of the location
        var newHash = window.location.hash,
            // get all links
            _links = document.querySelectorAll('.links'),
            _currentActiveLink = '';

        // iterate over the _links object and find the link with href === newHash
        for (var i = 0; i < _links.length; i++) {
            if (_links[i].getAttribute('href') === newHash) {
                // store the link with href == newHash
                // inside the currentActiveLink variable
                _currentActiveLink = _links[i];
            }
        }

        // add active class to current active link
        _currentActiveLink.parentElement.classList.add('active');
    }
    
    // return the app object
    return {
        initialize: initialize
    };
    
}(Handlebars));