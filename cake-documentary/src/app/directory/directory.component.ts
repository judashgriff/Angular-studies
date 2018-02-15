import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  cakes = [
    {name: 'Dobostorta', type: 'chocolate', color: 'chocolate'},
    {name: 'Zserbó', type: 'chocolate', color: 'chocolate'},
    {name: 'Krémes', type: 'vanillia cream', color: 'wheat'},
    {name: 'Rákóczi túrós', type: 'cabbage cheese', color: 'cornsilk'},
    {name: 'Mandula torta', type: 'almond cream', color: 'LightGoldenRodYellow'},
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
