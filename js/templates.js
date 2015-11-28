(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"about\" class=\"page\">\n	<h1>About</h1>\n	<p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['error'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"error\" class=\"page\">\n	<h1>Error! Not found!</h1>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<footer id=\"footer\" class=\"footer\">\n	<p>&copy; Company "
    + container.escapeExpression(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"year","hash":{},"data":data}) : helper)))
    + "</p>\n</footer>";
},"useData":true});
templates['gallery'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"gallery\" class=\"page\">\n	<h1>Gallery</h1>\n	<p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"header clearfix\">\n	<nav>\n		<ul class=\"nav nav-pills pull-right\">\n		<li role=\"presentation\" class=\"nav-parent active\"><a href=\"#home\" class=\"links\">Home</a></li>\n		<li role=\"presentation\" class=\"nav-parent\"><a href=\"#gallery\" class=\"links\">Gallery</a></li>\n		<li role=\"presentation\" class=\"nav-parent\"><a href=\"#about\" class=\"links\">About</a></li>\n		<li role=\"presentation\" class=\"nav-parent\"><a href=\"#contact\" class=\"links\">Contact</a></li>\n		</ul>\n	</nav>\n	<h3 class=\"text-muted\">"
    + container.escapeExpression(((helper = (helper = helpers.projectName || (depth0 != null ? depth0.projectName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"projectName","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>";
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"home\" class=\"page\">\n      <div class=\"jumbotron\">\n            <h1>Jumbotron heading</h1>\n            <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n            <p><a class=\"btn btn-lg btn-success\" href=\"#\" role=\"button\">Sign up today</a></p>\n            </div>\n      \n            <div class=\"row marketing\">\n            <div class=\"col-lg-6\">\n            <h4>Subheading</h4>\n            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n      \n            <h4>Subheading</h4>\n            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>\n      \n            <h4>Subheading</h4>\n            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n            </div>\n      \n            <div class=\"col-lg-6\">\n            <h4>Subheading</h4>\n            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n      \n            <h4>Subheading</h4>\n            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>\n\n          <h4>Subheading</h4>\n          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n      </div>\n   </div>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();