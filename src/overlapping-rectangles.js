export const isOverlapping = (l1x, l1y, r1x, r1y, l2x, l2y, r2x, r2y) => {
  if (l1x >= r2x || l2x > r1x) return false;
  if (l1y <= r2y || l2y <= r1y) return false;
  return true;
};
