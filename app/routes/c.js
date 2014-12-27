import Ember from "ember";

  var CRoute = Ember.Route.extend({
    model: function(){
             console.log("Entering page C");
           }
  });

export default CRoute;
