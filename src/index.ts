import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

// hecho en el curso curso
// new google.maps.Map(document.getElementById('map') as HTMLElement, {
//   zoom: 1,
//   center: { lat: 0, lng: 0 },
// });

// porporcionada por google
let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById('map') as HTMLElement, {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  });
}

initMap();
