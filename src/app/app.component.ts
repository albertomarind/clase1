import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soy una propiedad';

  dato = {
    url: 'https://img.remediosdigitales.com/de1542/lamborghini-huracan_evo-2019-1280-01/1366_2000.jpg',
    descripcion: 'Soy una descripcion 123123'
  };

  cards = [
    {
      url: 'https://img.remediosdigitales.com/de1542/lamborghini-huracan_evo-2019-1280-01/1366_2000.jpg',
      descripcion: 'Soy una descripcion 1',
      precio:49
    },
    {
      url: 'https://img.remediosdigitales.com/de1542/lamborghini-huracan_evo-2019-1280-01/1366_2000.jpg',
      descripcion: 'Soy una descripcion 2',
      precio:70
    },
    {
      url: 'https://img.remediosdigitales.com/de1542/lamborghini-huracan_evo-2019-1280-01/1366_2000.jpg',
      descripcion: 'Soy una descripcion 3',
      precio:150
    }
  ];

}
