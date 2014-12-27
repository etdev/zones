import Ember from "ember";

  var ARoute = Ember.Route.extend({
    page_type: 'A',
    model: function(){
             console.log("Entering page " + this.page_type);
           }
   });

export default ARoute;
