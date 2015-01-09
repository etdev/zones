import Ember from "ember";

  var ARoute = Ember.Route.extend({
    page_type: 'A',
    model: function(){
             console.log("Entering page " + this.page_type);
           },
    toggleNav: function(){
             console.log("Toggling navbar");
           }
   });

export default ARoute;
