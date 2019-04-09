import { Component, Input, HostBinding, AfterViewChecked, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { OrgNode } from '../org-node';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'levelClass'
  }
})
export class TreeNodeComponent implements AfterViewChecked {

  @Input()
  data: OrgNode;

  @Input()
  level = 0;

  @ViewChild('visiblePart', { read: ElementRef})
  visiblePart: ElementRef;

  @ViewChild('adorner', { read: ElementRef})
  adorner: ElementRef;

  @HostBinding('class')
  get levelClass() {
    return 'level-' + this.level;
  }

  constructor(private _zone: NgZone) {

  }

  ngAfterViewChecked() {

    if (this.visiblePart) {
      this.visiblePart.nativeElement.classList.remove('highlight');

      this._zone.runOutsideAngular(() => {
        timer(10).pipe(
          take(1)
        ).subscribe(() => {
          this.visiblePart.nativeElement.classList.add('highlight');
          let html = this.adorner.nativeElement.innerHTML;
          if (!html || html === '') {
            html = 1;
          } else {
            html = +html + 1;
          }

          this.adorner.nativeElement.innerHTML = html;
        });
      });
    }
  }

  clicked() {
    // We don´t need anything here.
    this.data.title = 'Hello World';

    if (this.data.children && this.data.children.length > 0) {
      debugger;
      this.data.children[0].title = 'Hello World';
    }
  }
}
