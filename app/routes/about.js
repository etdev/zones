import Ember from "ember";

  var AboutRoute = Ember.Route.extend({
    page_name: 'About',
    model: function(){
             console.log("Entering page " + this.page_type);
           }
  });

export default AboutRoute;
