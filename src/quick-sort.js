export class QuickSort {
  sort(arr) {
    arr = arr.map((val) => {
      item = parseInt(item);
      return item;
    });
    this.quickSort(arr, 0, arr.length - 1);
  }

  partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
  }

  quickSort(arr, low, high) {
    if (low < high) {
      /* pi is partitioning index, arr[pi] is  
          now at right place */
      let pi = this.partition(arr, low, high);

      // Recursively sort elements before
      // partition and after partition
      this.quickSort(arr, low, pi - 1);
      this.quickSort(arr, pi + 1, high);
    }
  }
}
