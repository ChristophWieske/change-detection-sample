import { Pipe, PipeTransform } from '@angular/core';
import { wait } from '../item-node';

@Pipe({
  name: 'Demo2PurePipe',
  pure: true
})
export class Demo2PurePipe implements PipeTransform {

  transform(value: any, filter: string, order: string) {

    let snapshot = value.slice();

    // Lets presume this lasts pretty long.
    wait(50);

    if (filter) {
      console.log('(Pipe) filter for: ' + filter);
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
}
