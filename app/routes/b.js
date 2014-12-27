import Ember from "ember";

  var BRoute = Ember.Route.extend({
    model: function(){
             console.log("Entering page B");
           }
  });

export default BRoute;
