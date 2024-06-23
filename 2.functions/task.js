// Задача-1
function getArrayParams(...arr) { 
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задача-2
function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// Задача-2-п-2
function differenceMaxMinWorker(...arr) {
  let  min = Infinity;
  let  max = -Infinity;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
  }

  return max - min;
}
// Задача-2-п-3
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0) sumEvenElement += arr[i]; else sumOddElement += arr[i];
  }

  return sumEvenElement - sumOddElement;
}

//задача-2-п-4
function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}
// Задача-3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let i;
  let res;
  let numbers;

  if(arrOfArr.length === 0) return 0;

  for(i = 0; i < arrOfArr.length; i++) {
    numbers = arrOfArr[i];
    res = func(...numbers);
    if(res > maxWorkerResult) maxWorkerResult = res;
  }

  return maxWorkerResult;
}
