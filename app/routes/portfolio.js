import Ember from "ember";

  var PortfolioRoute = Ember.Route.extend({
    page_name: 'Portfolio',
    model: function(){
      document.title = "Eric Turner - " + this.page_name;
           }
   });

export default PortfolioRoute;
