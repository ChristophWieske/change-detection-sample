import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ItemNodeData, wait } from '../item-node';
import { BehaviorSubject } from 'rxjs';
import { merge, map, shareReplay, tap } from 'rxjs/operators';

interface OrderOption {
  display: string;
  field: string;
}

@Component({
  selector: 'app-demo-two-observables-and-pipes',
  templateUrl: './demo-two-observables-and-pipes.component.html',
  styleUrls: ['./demo-two-observables-and-pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo2Component implements OnInit {

  items: ItemNodeData[] = [
    { rating: 90, title: 'Gut gemacht...', type: 'Feedback' },
    { rating: 15, title: 'Viele Fehler!', type: 'Feedback' },
    { rating: 100, title: '100 Punkte :-)', type: 'Rezension' },
    { rating: 85, title: 'Gute Dokumentation', type: 'Kommentar' },
    { rating: 0, title: 'Jetzt mal ehrlich: so nicht!', type: 'Kommentar' },
    { rating: 92, title: 'Tolles Produkt', type: 'Rezension' },
    { rating: 90, title: 'Ich bin sehr zufrieden', type: 'Rezension' },
    { rating: 78, title: 'Seit V1.0 hat sich viel getan', type: 'Feedback' },
    { rating: 50, title: 'Braucht man das wirklich?', type: 'Kommentar' }
  ];

  orderOptions: OrderOption[] = [
    { display: 'Nach Bewertung', field: 'rating' },
    { display: 'Nach Titel', field: 'title' },
    { display: 'Nach Typ', field: 'type' }
  ];

  selectedOrderOption = this.orderOptions[0];

  filter = '';

  get filteredAndOrderedItems() {
    return this.filterAndOrder(this.items, this.filter, this.selectedOrderOption.field);
  }

  constructor() { }

  ngOnInit() {
  }

  filterAndOrder(items: any[], filter: string, order: string) {
    let snapshot = items.slice();

    // Lets presume this lasts pretty long.
    wait(50);

    if (filter) {
      console.log('filter for: ' + filter);
      snapshot = snapshot.filter(x =>
        x.title.indexOf(filter) > -1
        || x.type.indexOf(filter) > -1);
    }

    if (order) {
      snapshot.sort((x, y) => {
        if (typeof x[order] === 'string') {
          return x[order].localeCompare(y[order]);
        } else {
          return x[order] - y[order];
        }
      });
    }

    return snapshot;
  }

  orderOptionPicked(option: OrderOption) {
    this.selectedOrderOption = option;
  }

  filterSet(filter: string) {
    this.filter = filter;
  }

}
