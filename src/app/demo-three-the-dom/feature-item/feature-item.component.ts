import { Component, OnInit } from '@angular/core';
import { wait } from 'src/app/wait';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {

  constructor() {
    wait(50);
  }

  ngOnInit() {
  }

}
