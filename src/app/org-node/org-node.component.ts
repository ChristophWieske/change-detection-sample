import { Component, OnInit, Input, HostBinding, AfterViewChecked, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { OrgNode } from '../org-node';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-org-node',
  templateUrl: './org-node.component.html',
  styleUrls: ['./org-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'levelClass'
  }
})
export class OrgNodeComponent implements OnInit, AfterViewChecked, AfterContentChecked {

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

  constructor(private _zone: NgZone, private _changeDetectorRef: ChangeDetectorRef) {
    const original = _changeDetectorRef.markForCheck;
    _changeDetectorRef.markForCheck = () => {
      debugger;
      original.call(_changeDetectorRef);
    };

    const original2 = _changeDetectorRef.detectChanges;
    _changeDetectorRef.detectChanges = () => {
      debugger;
      original2.call(_changeDetectorRef);
    };
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log('Anchor');
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

  ngAfterContentChecked() {

  }

  clicked() {
    // We don´t need anything here.
  }
}
