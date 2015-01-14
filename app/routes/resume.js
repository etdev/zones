import Ember from "ember";

  var ResumeRoute = Ember.Route.extend({
    page_name: 'Resume',
    model: function(){
             console.log("Entering page " + this.page_type);
           }
  });

export default ResumeRoute;
