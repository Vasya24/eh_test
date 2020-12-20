// Setting custom marks for the map in tours section
const museumMark = new google.maps.Marker({
  position: {lat: 52.139305, lng: 28.479693},
  title: "Музей деда Талаша",
  icon: 'src/css/img/maptags/museum_normal.png'
});
const boatMark = new google.maps.Marker({
  position: {lat: 52.103638, lng: 28.447186},
  title: "Пристань на реке Припять",
  icon: 'src/css/img/maptags/boat_normal.png'
});
const gunMark = new google.maps.Marker({
  position: {lat: 52.114897, lng: 28.421141},
  title: "Охотничья база",
  icon: 'src/css/img/maptags/gun_normal.png'
});
const woodsMark = new google.maps.Marker({
  position: {lat: 52.085931, lng: 28.408547},
  title: 'Лес',
  icon: 'src/css/img/maptags/woods_normal.png'
})

// Initializing map in tours section
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.120614, lng: 28.441947 },
    zoom: 12,
    mapTypeId: 'satellite'
  })

  museumMark.setMap(map);
  boatMark.setMap(map);
  gunMark.setMap(map);
  woodsMark.setMap(map);
}

initMap();

// Setting picture and description switching
let picBox = document.querySelector('.map-pic');

google.maps.event.addListener(museumMark, 'click', function() {
  picBox.style.backgroundImage = 'url("src/css/img/activities/tours.png")'
  museumMark.icon = 'src/css/img/maptags/museum_selected.png'
})

// Setting mark in contacts section
const defaultMark = new google.maps.Marker({
  position: { lat: 52.120614, lng: 28.441947 },
  icon: 'src/css/img/maptags/default.png'
});

// Initializing map in contacts section
function contMap() {
  const cMap = new google.maps.Map(document.getElementById('map-contacts'), {
    center: { lat: 52.120614, lng: 28.441947 },
    zoom: 12,
    mapTypeId: 'satellite'
  })
  defaultMark.setMap(cMap);
}

contMap();
