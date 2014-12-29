import Ember from "ember";

  var IndexRoute = Ember.Route.extend({
    setupController: function(controller){
      console.log("Running Index setupController");
      document.title = controller.get('title');
      //controller.set('title', "ZC - Index");
    },
    page_type: 'Index',
    model: function(){
      console.log("Entering page " + this.page_type);
    },
    title: 'Test title'
  });

export default IndexRoute;
