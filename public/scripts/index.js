window.addEventListener("hashchange", e => {
  switch(e.newURL.substring(23)){
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
