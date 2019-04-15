import { Component, OnInit, OnDestroy } from '@angular/core';
import { TreeNodeData, incrementNodeAndTheirChildren } from './tree-node';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-one-change-detection',
  templateUrl: './demo-one-change-detection.component.html',
  styleUrls: ['./demo-one-change-detection.component.scss']
})
export class Demo1Component implements OnDestroy {

  private _levels = 3;
  private _itemsPerLevel = 2;
  private _botSubsciption?: Subscription;

  rootNode: TreeNodeData;

  constructor() {
    this.rootNode = this.createNode(0, 0);
  }

  startBot() {
    this._botSubsciption = interval(2000).subscribe(() => this.addMotivationalMessage());
  }

  stopBot() {
    if (this._botSubsciption) {
      this._botSubsciption.unsubscribe();
      this._botSubsciption = undefined;
      this.addMessage('Tschüsselchen', 'Motivation Bot');
    }
  }

  ngOnDestroy() {

  }




































  private addMotivationalMessage() {
    const message = this.motivationalMessage[Math.floor(Math.random() * this.motivationalMessage.length)];
    this.addMessage(message, 'Motivation Bot');
  }

  get botRunning() {
    return this._botSubsciption != null;
  }

  private createNode(level: number = 0, index: number = 0) {
    const childCount = this._itemsPerLevel;
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
    incrementNodeAndTheirChildren(this.rootNode);
  }

  private addMessage(message: string, from: string) {
    this.messages = [
      { author: from, message },
      ...this.messages
    ];
  }

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
}
