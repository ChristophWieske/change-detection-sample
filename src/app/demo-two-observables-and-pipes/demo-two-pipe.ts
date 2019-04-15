import { Pipe, PipeTransform } from '@angular/core';
import { filterAndOrder } from './filter-and-order';

@Pipe({
  name: 'Demo2PurePipe',
  pure: true
})
export class Demo2PurePipe implements PipeTransform {

  transform(value: any, filter: string, orderBy: string) {
    return filterAndOrder(value, filter, orderBy);
  }
}
