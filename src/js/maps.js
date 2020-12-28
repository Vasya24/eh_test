/* eslint-disable no-undef, no-unused-vars */

// Setting custom marks for the map in tours section
const museumMark = new google.maps.Marker({
  position: { lat: 52.139305, lng: 28.479693 },
  title: 'Музей деда Талаша',
  icon: 'css/img/maptags/museum_normal.png',
});
const boatMark = new google.maps.Marker({
  position: { lat: 52.103638, lng: 28.447186 },
  title: 'Пристань на реке Припять',
  icon: 'css/img/maptags/boat_normal.png',
});
const gunMark = new google.maps.Marker({
  position: { lat: 52.114897, lng: 28.421141 },
  title: 'Охотничья база',
  icon: 'css/img/maptags/gun_normal.png',
});
const woodsMark = new google.maps.Marker({
  position: { lat: 52.085931, lng: 28.408547 },
  title: 'Лес',
  icon: 'css/img/maptags/woods_normal.png',
});

// Initializing map in tours section
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.120614, lng: 28.441947 },
    zoom: 12,
    mapTypeId: 'satellite',
  });

  museumMark.setMap(map);
  boatMark.setMap(map);
  gunMark.setMap(map);
  woodsMark.setMap(map);
}

initMap();

// Setting picture and description switching
const picBox = document.querySelector('.map-pic');
const textHead = document.querySelector('.map-text > h6');
const text = document.querySelector('.map-text > span');

google.maps.event.addListener(museumMark, 'click', () => {
  picBox.style.backgroundImage = 'url("css/img/activities/tours.png")';
  textHead.textContent = 'Музей деда Талаша';
  text.textContent = 'Музей деда Талаша Музей национального героя Деда Талашаи партизанского движения на Петриковщине.';
});

google.maps.event.addListener(boatMark, 'click', (e) => {
  picBox.style.backgroundImage = 'url("css/img/activities/fishing.png")';
  textHead.textContent = 'Пристань на реке Припять';
  text.textContent = 'Здесь у вас будет возможность искупаться или порыбачить';
});

google.maps.event.addListener(gunMark, 'click', (e) => {
  picBox.style.backgroundImage = 'url("css/img/activities/hunting.png")';
  textHead.textContent = 'Охотничья база';
  text.textContent = 'Легальная охота рядом с местом вашего отдыха. Только при наличии охотничьего билета';
});

google.maps.event.addListener(woodsMark, 'click', (e) => {
  picBox.style.backgroundImage = 'url("css/img/activities/quadros.png")';
  textHead.textContent = 'Лес';
  text.textContent = 'Место для единения с природой, философских прогулок или катания на квадроциклах.';
});

// Setting mark in contacts section
const defaultMark = new google.maps.Marker({
  position: { lat: 52.120614, lng: 28.441947 },
  icon: 'css/img/maptags/default.png',
});

// Initializing map in contacts section
function contMap() {
  const cMap = new google.maps.Map(document.getElementById('map-contacts'), {
    center: { lat: 52.120614, lng: 28.441947 },
    zoom: 12,
    mapTypeId: 'satellite',
  });
  defaultMark.setMap(cMap);
}

contMap();
