// import { User } from './User';
// import { Company } from './Company';
console.log(document.getElementById('map'));

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});
