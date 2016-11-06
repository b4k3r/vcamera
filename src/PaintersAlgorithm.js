export default class PaintersAlgorithm {
  static compare(p1, p2) {
    if (p1.maxZ() < p2.minZ()) {
      return 1;
    }

    if (p1.distanceToObserver() > p2.distanceToObserver()) {
      return -1;
    }

    if (p1.distanceToObserver() < p2.distanceToObserver()) {
      return 1;
    } else {
      return 0;
    }
  }
}
