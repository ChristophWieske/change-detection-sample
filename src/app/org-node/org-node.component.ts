import { Component, Input, HostBinding, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone, AfterViewChecked } from '@angular/core';
import { OrgNode } from '../org-node';

@Component({
  selector: 'app-org-node',
  templateUrl: './org-node.component.html',
  styleUrls: ['./org-node.component.scss'],
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'levelClass'
  }
})
export class OrgNodeComponent implements AfterViewChecked {

  @Input()
  data: OrgNode;

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
    // We don´t need anything here.
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
