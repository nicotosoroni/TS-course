import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

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
  map = new Map(document.getElementById('firstMap') as HTMLElement, {
    zoom: 3,
    center: { lat: 0, lng: 0 },
  });
}

initMap();

async function initializeMap() {
  const customMap = new CustomMap('map', undefined, {
    lat: -31.391622871152208,
    lng: -64.1848243756961,
  });
  await customMap.initMap();
}

initializeMap().catch(console.error);
