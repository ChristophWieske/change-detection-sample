import { Component, OnInit } from '@angular/core';
import { OrgNode } from '../org-node';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _levels = 3;

  org: OrgNode;

  constructor() {
    this.org = this.createNode(0, 0, 'C1');
  }

  ngOnInit() {

  }

  private childsPerLevel(level: number) {
    switch (level) {
      case 0:
        return 2;
      case 1:
        return 3;
      default:
        return 1;
    }
  }

  private createNode(level: number = 0, index: number = 0, prefix: string) {
    const childCount = this.childsPerLevel(level);
    const node: OrgNode = {
      title: prefix + (level === 0 ? '' : '.' + (index + 1))
    };

    if (level < this._levels) {
      node.children = [];
      for (let i = 0; i < childCount; i++) {
        node.children.push(this.createNode(level + 1, i, node.title));
      }
    }

    return node;
  }
}
