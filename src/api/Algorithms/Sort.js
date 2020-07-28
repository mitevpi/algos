export class Sort {
  /**
   * Sort an array of numbers using the Bubble Sort algorithm.
   * Iterating through all items in the array, we compare the current item with the next
   * one in the array. If the current one is greater, the positions are swapped. This is repeated
   * until there is no more swapping necessary.
   * @param {Number[]} array An array of numbers to merge.
   * @returns {Number[]} An array of sorted numbers.
   */
  static bubbleSort(array) {
    let swapped = false;
    do {
      swapped = false;
      // eslint-disable-next-line no-loop-func
      array.map((current, i) => {
        // if the current element is larger than the one after it
        if (current > array[i + 1]) {
          const temp = current;

          // move the next element to the current position
          array[i] = array[i + 1];
          // move the current element to the next position
          array[i + 1] = temp;
          swapped = true;
        }
      });
    } while (swapped);
    return array;
  }

  /**
   * Sort an array of numbers using the Insertion Sort algorithm.
   * Insertion merge is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
   * The array elements are compared with each other sequentially and then arranged simultaneously
   * in some particular order. The analogy can be understood from the style we arrange a deck of cards.
   * @param {Number[]} array An array of numbers to merge.
   * @returns {Number[]} An array of sorted numbers.
   */
  static insertionSort(array) {
    // outer loop for iteration over the main parent array
    for (let outer = 1; outer < array.length; outer++) {
      // inner loop for comparing items within the newly formed "sorted" array we're building
      for (let inner = 0; inner < outer; inner++) {
        if (array[outer] < array[inner]) {
          const [element] = array.splice(outer, 1);
          array.splice(inner, 0, element);
        }
      }
    }
    return array;
  }

  /**
   * Sort an array of numbers using the Merge Sort algorithm.
   * The MergeSort function repeatedly divides the array into two halves until we reach a stage where
   * we try to perform MergeSort on a subarray of size 1 i.e. p == r. After that, the merge function comes
   * into play and combines the sorted arrays into larger arrays until the whole array is merged.
   * @param {Number[]} array An array of numbers to merge.
   * @returns {Number[]} An array of sorted numbers.
   */
  static mergeSort(array) {
    // if the array can't be split, return the array
    if (array.length < 2) {
      return array;
    }

    function merge(smallOne, smallTwo) {
      const sorted = [];
      // while the chunks have anything in them
      while (smallOne.length && smallTwo.length) {
        // compare the first item of the two chunks. push whichever value is smaller
        // to the sorted list, and remove it from the chunk
        if (smallOne[0] <= smallTwo[0]) {
          sorted.push(smallOne.shift());
        } else {
          sorted.push(smallTwo.shift());
        }
      }
      // return a concat of everything already sorted + the (now modified) original chunks
      return [...sorted, ...smallOne, ...smallTwo];
    }

    const mid = Math.floor(array.length / 2);
    const smallOne = array.slice(0, mid);
    const smallTwo = array.slice(mid);
    return merge(this.mergeSort(smallOne), this.mergeSort(smallTwo));
  }

  /**
   * Sort an array of numbers using the Quick Sort algorithm.
   * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around
   * the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
   * @param {Number[]} array An array of numbers to merge.
   * @returns {Number[]} An array of sorted numbers.
   */
  static quickSort(array) {
    // if the array can't be split, return the array
    if (array.length < 2) {
      return array;
    }
    const chosenIndex = array.length - 1;
    const chosen = array[chosenIndex];
    const a = [];
    const b = [];
    for (let i = 0; i < chosenIndex; i++) {
      const temp = array[i];
      temp < chosen ? a.push(temp) : b.push(temp);
    }

    return [...this.quickSort(a), chosen, ...this.quickSort(b)];
  }
}
