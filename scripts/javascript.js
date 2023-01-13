
function refreshpage() {
  location.reload();
}


function displayMenu() {
  document.querySelector('.menu').style.display = 'flex';
  document.querySelector('.menu-icon i').style.display = 'none';
}
function hideMenu() {
  document.querySelector('.menu').style.display = 'none';
  var x = window.matchMedia("(max-width: 700px)")
  if (x.matches) {
    document.querySelector('.menu-icon i').style.display = 'block';
  }
}