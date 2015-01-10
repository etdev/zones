import Ember from "ember";

var a = Ember.ObjectController.extend({
  actions: {
      //Toggle showing of navbar links (when pressing hamburger button)
      toggleHam: function(){
        var navLinks = document.querySelectorAll(".nav-link");
        var navBar = document.querySelector("nav.navA");
        for (var i=0; i<navLinks.length; i++){
          if (navLinks[i].style.visibility !== 'visible'){
            navLinks[i].style.visibility = 'visible';
            navBar.style.height = '250px';
          }
          else { navLinks[i].style.visibility = 'hidden';
            navBar.style.height = '50px';
          }
        }
      }
    }
});

export default a;
