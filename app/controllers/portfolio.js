import Ember from "ember";

var a = Ember.ObjectController.extend({
  actions: {
      //Toggle showing of navbar links (when pressing hamburger button)
      toggleHam: function(){
        var navLinks = document.querySelectorAll(".nav-link");
        var navBar = document.querySelector("nav.navA");
        for (var i=0; i<navLinks.length; i++){
          if (navLinks[i].style.display !== 'block'){
            navLinks[i].style.display = 'block';
            navBar.style.height = '250px';
          }
          else { navLinks[i].style.display = 'block';
            navBar.style.height = '50px';
            navLinks[i].style.display = 'none';
          }
        }
      }
    }
});

export default a;
