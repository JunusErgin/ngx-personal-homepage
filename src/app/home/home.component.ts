import { Component, OnInit } from '@angular/core';
import { MetaConfig } from '../config/meta.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  meta = MetaConfig;

  constructor() { }

  ngOnInit() {
  }

}
