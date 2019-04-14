import { Component, OnInit, OnDestroy } from '@angular/core';
import { TreeNodeData, incrementNodeAndTheirChildren } from '../tree-node';
import { interval } from 'rxjs';

@Component({
  selector: 'app-demo-one-change-detection',
  templateUrl: './demo-one-change-detection.component.html',
  styleUrls: ['./demo-one-change-detection.component.scss']
})
export class Demo1Component implements OnInit, OnDestroy {

  private _levels = 3;

  org: TreeNodeData;

  messages: { author: string, message: string}[] = [];

  motivationalMessage = [
    'Chaka!!!',
    'Du schaffst das!',
    'Wer wenn nicht du?',
    'Keiner ist besser dafür geeignet',
    'Ich glaube an dich',
    'Mama ist stolz auf dich',
    'Wahnsinn was du drauf hast',
    'Jetzt mal ehrlich: ist schon geil...',
    '... ich glaube den Knopf solltest du nicht drücken...'
  ];

  constructor() {
    this.org = this.createNode(0, 0);
  }

  ngOnInit() {
    /* Motivational Bot */
    /* interval(2000).subscribe(() => this.addMotivationalMessage()); */
    /* setInterval(() => {
      this.addMotivationalMessage();
    }, 2000); */
  }

  private addMotivationalMessage() {
    const message = this.motivationalMessage[Math.floor(Math.random() * this.motivationalMessage.length)];
    this.addMessage(message, 'Motivation Bot');
  }

  ngOnDestroy() {

  }

  private childsPerLevel(level: number) {
    /* switch (level) {
      case 0:
        return 2;
      case 1:
        return 3;
      default:
        return 1;
    } */

    return 2;
  }

  private createNode(level: number = 0, index: number = 0) {
    const childCount = this.childsPerLevel(level);
    const node: TreeNodeData = {
      counter: 0
    };

    if (level < this._levels) {
      node.children = [];
      for (let i = 0; i < childCount; i++) {
        node.children.push(this.createNode(level + 1, i));
      }
    }

    return node;
  }

  sendMessage(message: string) {
    this.addMessage(message, 'Du');
  }

  incrementAll() {
    incrementNodeAndTheirChildren(this.org);
  }

  private addMessage(message: string, from: string) {
    this.messages = [
      { author: from, message },
      ...this.messages
    ];
  }
}
