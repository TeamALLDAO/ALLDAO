const sidebarButton = document.querySelector('.fa-bars');
const closeSidebarButton = document.querySelector('.fa-xmark');
const sideBar = document.querySelector('.sidebar');
const addDao = document.querySelector('.nav-1');
const dropdown1 = document.querySelector('.dropdown-1');
const resources = document.querySelector('.nav-2');
const dropdown2 = document.querySelector('.dropdown-2');
const community = document.querySelector('.nav-3');
const dropdown3 = document.querySelector('.dropdown-3');
const profile = document.querySelector('.nav-4');
const dropdown4 = document.querySelector('.dropdown-4');

// sidebar functionality
function toggleSidebar() {
  if (window.innerWidth <= 820) {
    sideBar.style.display = 'block';
  } else {
    sideBar.style.display = 'none';
  }
}

sidebarButton.addEventListener('click', function () {
    toggleSidebar();
});

window.addEventListener('resize', function() {
    if (sideBar.style.display = 'block') {
        sideBar.style.display = 'none';
    }
});

closeSidebarButton.addEventListener('click', function () {
    sideBar.style.display = 'none';
});

// nav drop down functionality
addDao.addEventListener('mouseover', function () {
  dropdown1.style.display = 'block';
});

addDao.addEventListener('mouseout', function () {
  dropdown1.style.display = 'none';
});

dropdown1.addEventListener('mouseover', function () {
  dropdown1.style.display = 'block';
});

dropdown1.addEventListener('mouseout', function () {
  dropdown1.style.display = 'none';
});

resources.addEventListener('mouseover', function () {
  dropdown2.style.display = 'block';
});

resources.addEventListener('mouseout', function () {
  dropdown2.style.display = 'none';
});

dropdown2.addEventListener('mouseover', function () {
  dropdown2.style.display = 'block';
});

dropdown2.addEventListener('mouseout', function () {
  dropdown2.style.display = 'none';
});

community.addEventListener('mouseover', function () {
  dropdown3.style.display = 'block';
});

community.addEventListener('mouseout', function () {
  dropdown3.style.display = 'none';
});

dropdown3.addEventListener('mouseover', function () {
  dropdown3.style.display = 'block';
});

dropdown3.addEventListener('mouseout', function () {
  dropdown3.style.display = 'none';
});

profile.addEventListener('mouseover', function () {
  dropdown4.style.display = 'block';
});

profile.addEventListener('mouseout', function () {
  dropdown4.style.display = 'none';
});

dropdown4.addEventListener('mouseover', function () {
  dropdown4.style.display = 'block';
});

dropdown4.addEventListener('mouseout', function () {
  dropdown4.style.display = 'none';
});