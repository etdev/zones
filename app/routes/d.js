import Ember from "ember";

  var DRoute = Ember.Route.extend({
    page_type: 'D',
    model: function(){
             console.log("Entering page " + this.page_type);
           }
  });

export default DRoute;
