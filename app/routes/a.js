import Ember from "ember";

  var ARoute = Ember.Route.extend({
    model: function(){
             console.log("Entering page A");
           }
   });

export default ARoute;
