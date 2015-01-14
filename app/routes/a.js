import Ember from "ember";

  var PortfolioRoute = Ember.Route.extend({
    page_name: 'Portfolio',
    model: function(){
      document.title = document.title + " - " + this.page_name;
           }
   });

export default PortfolioRoute;
