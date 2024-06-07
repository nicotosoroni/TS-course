export class CustomMap {
  private map: google.maps.Map | undefined;

  constructor(
    private elementId: string = 'map',
    private zoom: number = 10,
    private center: google.maps.LatLngLiteral = { lat: 0, lng: 0 }
  ) {}

  public async initMap(): Promise<void> {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;
    this.map = new Map(document.getElementById(this.elementId) as HTMLElement, {
      zoom: this.zoom,
      center: this.center,
    });
  }

  public getMap(): google.maps.Map | undefined {
    return this.map;
  }
}
