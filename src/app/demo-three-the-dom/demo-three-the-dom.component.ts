import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

let globalId = 1;

class FeatureOption {
  id = globalId++;
  selected = false;

  constructor(public name: string) { }
}

@Component({
  selector: 'app-demo-three-the-dom',
  templateUrl: './demo-three-the-dom.component.html',
  styleUrls: ['./demo-three-the-dom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo3Component {

  markAll() {
    const elements = document.getElementsByTagName('app-feature-item');
    for (let i = 0; i < elements.length; i++) {
      elements.item(i).classList.add('marked');
      elements.item(i).setAttribute('item-' + (i + 1), 'true');
    }
  }

  trackByIndex(index: number, feature: FeatureOption) {
    return index;
  }

  trackByFeatureId(index: number, feature: FeatureOption) {
    return feature.id;
  }
















































  page1 = [
    new FeatureOption('Goldener Wasserhahn'),
    new FeatureOption('Zeitreisen'),
    new FeatureOption('"Uups, das wollte ich nicht"-Funktion'),
    new FeatureOption('Fünftes Rad'),
    new FeatureOption('Eingaben-Validierung (<-- Feigling)'),
    new FeatureOption('Mehrsprachigkeit'),
    new FeatureOption('Dynamische Theme-Auswahl'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.'),
    new FeatureOption('usw.')
  ];

  page2 = [
    new FeatureOption('Page 2: Goldener Wasserhahn'),
    new FeatureOption('Page 2: Zeitreisen'),
    new FeatureOption('Page 2: "Uups, das wollte ich nicht"-Funktion'),
    new FeatureOption('Page 2: Fünftes Rad'),
    new FeatureOption('Page 2: Eingaben-Validierung (<-- Feigling)'),
    new FeatureOption('Page 2: Mehrsprachigkeit'),
    new FeatureOption('Page 2: Dynamische Theme-Auswahl'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.'),
    new FeatureOption('Page 2: usw.')
  ];

  switchPage() {
    if (this.featureOptions.value.length === this.page1.length) {
      this.featureOptions.next(this.page2.slice());
    } else {
      this.featureOptions.next(this.page1.slice());
    }
  }

  featureOptions: BehaviorSubject<FeatureOption[]> = new BehaviorSubject(this.page1);

  allSelected = this.featureOptions.pipe(
    map(x => !x.some(y => !y.selected))
  );

  update(feature: FeatureOption, selected: boolean) {
    const nextArray = this.featureOptions.value.slice();
    const index = nextArray.indexOf(feature);
    const updatedFeature = Object.assign({}, feature, { selected });
    nextArray.splice(index, 1, updatedFeature);

    this.featureOptions.next(nextArray);
  }

  updateAll() {
    const allSelected = !this.featureOptions.value.some(x => !x.selected);

    let nextArray: FeatureOption[];

    if (allSelected) {
      nextArray = this.featureOptions.value.map(x => {
        return Object.assign({}, x, { selected: false });
      });
    } else {
      nextArray = this.featureOptions.value.map(x => {
        return Object.assign({}, x, { selected: true });
      });
    }

    this.featureOptions.next(nextArray);
  }

}
