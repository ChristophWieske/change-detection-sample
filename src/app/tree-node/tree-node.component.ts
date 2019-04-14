import { Component, Input, HostBinding, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone, AfterViewChecked } from '@angular/core';
import { TreeNodeData, incrementNodeAndTheirChildren } from '../tree-node';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  /* changeDetection: ChangeDetectionStrategy.OnPush */
})
export class TreeNodeComponent implements AfterViewChecked {

  @Input()
  data: TreeNodeData;

  @Input()
  level = 0;

  @ViewChild('visiblePart', { read: ElementRef})
  visiblePart: ElementRef;

  @ViewChild('adorner', { read: ElementRef})
  adorner: ElementRef;

  @ViewChild('rootAdorner', { read: ElementRef})
  rootAdorner: ElementRef;

  @Input()
  showRootAdorner = false;

  @HostBinding('class')
  get levelClass() {
    return 'level-' + this.level;
  }

  get justSomeGetter() {
    this.noticeCD();
    return undefined;
  }

  constructor(private _zone: NgZone) { }

  ngAfterViewChecked() {
    if (this.showRootAdorner) {
      this.incrementAdorner(this.rootAdorner);
    }
  }

  clicked() {
    incrementNodeAndTheirChildren(this.data);
  }

  noticeCD() {
    if (this.visiblePart) {

      this._zone.runOutsideAngular(() => {
        this.visiblePart.nativeElement.addEventListener('animationend', event => {
          this.visiblePart.nativeElement.classList.remove('highlight');
        });
      });

      this.visiblePart.nativeElement.classList.add('highlight');

      this.incrementAdorner(this.adorner);
    }
  }

  incrementAdorner(adorner: ElementRef) {
    let html = adorner.nativeElement.innerHTML;
      if (!html || html === '') {
        html = 1;
      } else {
        html = +html + 1;
      }

      adorner.nativeElement.innerHTML = html;
  }
}
