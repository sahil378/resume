const ele = document.querySelector("#home");
const x = getComputedStyle(ele);
const homedisplay = x.display;
function openevt(evnt, name) {
  var i, tabs, tabcontent;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i] = tabcontent[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("nav_items");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", "");
  }
  if (screen.width <= 480) {
    document.getElementById(name).style.display = "inline";
  } else {
    document.getElementById(name).style.display = "flex";
  }

  evnt.currentTarget.className += " active";
}
