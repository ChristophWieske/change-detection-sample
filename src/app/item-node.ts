export interface ItemNodeData {
  rating: number;
  title: string;
  type: 'Kommentar' | 'Rezension' | 'Feedback';
}

export function wait(ms: number) {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}
