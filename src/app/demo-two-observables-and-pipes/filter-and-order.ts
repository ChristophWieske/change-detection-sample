import { wait } from '../wait';

export function filterAndOrder(items: any[], filter: string, orderBy: string) {
  console.log(`Running: filterAndOrder (filter: "${filter}", orderBy: "${orderBy})`);

  let snapshot = items.slice();

  // Lets presume this lasts pretty long.
  wait(50);

  if (filter) {
    snapshot = snapshot.filter(x =>
      x.title.indexOf(filter) > -1
      || x.type.indexOf(filter) > -1);
  }

  if (orderBy) {
    snapshot.sort((x, y) => {
      if (typeof x[orderBy] === 'string') {
        return x[orderBy].localeCompare(y[orderBy]);
      } else {
        return x[orderBy] - y[orderBy];
      }
    });
  }

  return snapshot;
}
