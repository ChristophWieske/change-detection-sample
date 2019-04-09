import { Component } from '@angular/core';
import { OrgNode } from './org-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Change Detection Demo';

  private _levels = 2;

  org: OrgNode;

  constructor() {
    this.org = this.createNode(0, 0, 'C1');
  }

  private childsPerLevel(level: number) {
    switch (level) {
      case 0:
        return 3;
      case 1:
        return 1;
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
