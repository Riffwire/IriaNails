
function refreshpage() {
  location.reload();

}
function displayLoadMore() {
  document.querySelector('.about-layer').style.display = 'none';
  document.querySelector('.top-layer').style.display = 'none';
  document.querySelector('.services-layer').style.display = 'none';
  document.querySelector('.gallery-layer').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  document.querySelector('.load-more-layer').style.display = 'grid';
  window.scrollTo(99999, 0);
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, true)
  else if (window.attachEvent) window.attachEvent("onload", scrollBottom);
}
function HideLoadMore() {
  var x = window.matchMedia("(max-width: 900px)")
  if (x.matches) {
    document.querySelector('.about-layer').style.display = 'grid';
  } else {
    document.querySelector('.about-layer').style.display = 'flex';
  }
  document.querySelector('.footer').style.display = 'flex';
  document.querySelector('.top-layer').style.display = 'flex';
  document.querySelector('.gallery-layer').style.display = 'inline-block';
  document.querySelector('.load-more-layer').style.display = 'none';
  document.querySelector('.services-layer').style.display = 'flex';

}

function displayMenu() {
  document.querySelector('.menu').style.display = 'flex';
  document.querySelector('.menu-icon i').style.display = 'none';
}
function hideMenu() {
  document.querySelector('.menu').style.display = 'none';
  var x = window.matchMedia("(max-width: 900px)")
  if (x.matches) {
    document.querySelector('.menu-icon i').style.display = 'block';
  }
}