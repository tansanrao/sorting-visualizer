export const bubbleSort = (arr, animColor, animSwap) => {
  let temp, i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      animColor("#42CDE7", j, j + 1);
      if (arr[j] > arr[j + 1]) {
        animSwap(j, arr[j + 1]);
        animSwap(j + 1, arr[j]);
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      animColor("#ff7350", j, j + 1);
    }
    animColor("#ABF1BE", arr.length - 1 - i, arr.length - 1 - i);
  }
  animColor("#ABF1BE", 0, 0);
  return arr;
};
