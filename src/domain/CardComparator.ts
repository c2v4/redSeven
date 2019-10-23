import { Card } from "./Card";

export const cardComparator = (first: Card, second: Card) =>
  first.effective() - second.effective();
