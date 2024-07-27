export function isSameDate(a: Date, b?: Date) {
  if (!b) {
    return false;
  }
  return a.toLocaleDateString() === b.toLocaleDateString();
}
