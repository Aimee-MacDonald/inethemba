var menuOpen = false;
function toggleMenu(){
  menuOpen = !menuOpen;

  var el_menu = document.getElementById("menu");
  var el_menuToggle = document.getElementById("menutoggle");

  if(menuOpen){
    el_menu.style.height = "auto";
    el_menuToggle.classList = "menu-open";
  } else {
    el_menu.style.height = "0";
    el_menuToggle.classList = "menu-closed";
  }
}

window.addEventListener("hashchange", e => {
  toggleMenu();
  switch(e.newURL.substring(e.newURL.indexOf("#") + 1)){
    case 'home':
      document.getElementById("home-container").style.width = "100%";
      document.getElementById("artists-container").style.width = "0%";
      document.getElementById("venues-container").style.width = "0%";
      document.getElementById("events-container").style.width = "0%";
      document.getElementById("blog-container").style.width = "0%";
      break;

    case 'artists':
      document.getElementById("home-container").style.width = "0%";
      document.getElementById("artists-container").style.width = "100%";
      document.getElementById("venues-container").style.width = "0%";
      document.getElementById("events-container").style.width = "0%";
      document.getElementById("blog-container").style.width = "0%";
      break;

    case 'venues':
      document.getElementById("home-container").style.width = "0%";
      document.getElementById("artists-container").style.width = "0%";
      document.getElementById("venues-container").style.width = "100%";
      document.getElementById("events-container").style.width = "0%";
      document.getElementById("blog-container").style.width = "0%";
      break;

    case 'events':
      document.getElementById("home-container").style.width = "0%";
      document.getElementById("artists-container").style.width = "0%";
      document.getElementById("venues-container").style.width = "0%";
      document.getElementById("events-container").style.width = "100%";
      document.getElementById("blog-container").style.width = "0%";
      break;

    case 'blog':
      document.getElementById("home-container").style.width = "0%";
      document.getElementById("artists-container").style.width = "0%";
      document.getElementById("venues-container").style.width = "0%";
      document.getElementById("events-container").style.width = "0%";
      document.getElementById("blog-container").style.width = "100%";
      break;
  }
});
