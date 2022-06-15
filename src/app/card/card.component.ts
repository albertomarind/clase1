import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  id!: number;

  @Input()
  imagePath: string = 'https://www.azendportafolio.com/static/img/not-found.png';

  @Input()
  description: string = '';

  @Input()
  precio: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    alert('Soy un click' + this.id);
  }

}
