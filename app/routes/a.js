import Ember from "ember";

  var ARoute = Ember.Route.extend({
    page_type: 'A',
    nav_pc: function(){
      return document.getElementById('nav-ham');
    },
    model: function(){
           }
   });

export default ARoute;
