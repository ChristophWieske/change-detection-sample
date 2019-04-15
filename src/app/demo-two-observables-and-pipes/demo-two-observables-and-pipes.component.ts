import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ItemNodeData } from './item-node';
import { BehaviorSubject } from 'rxjs';
import { merge, map, shareReplay, tap } from 'rxjs/operators';
import { filterAndOrder } from './filter-and-order';

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
export class Demo2Component {

  orderBy = 'title';

  filter = '';

  get displayItems() {
    return filterAndOrder(this.items, this.filter, this.orderBy);
  }

  setOrderBy(field: string) {
    this.orderBy = field;
  }

  setFilter(filter: string) {
    this.filter = filter;
  }































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
}
