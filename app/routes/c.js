import Ember from "ember";

  var CRoute = Ember.Route.extend({
    page_type: 'C',
    model: function(){
             console.log("Entering page " + this.page_type);
           }
  });

export default CRoute;
