import Ember from "ember";

  var BRoute = Ember.Route.extend({
    page_type: 'B',
    model: function(){
             console.log("Entering page " + this.page_type);
           }
  });

export default BRoute;
