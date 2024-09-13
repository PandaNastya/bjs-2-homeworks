function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= max) {
      max = arr[i];
    } else if (arr[i] <= min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr.length === 0){
    return 0;
  }

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  if (arr.length === 0) {
    return 0;
  }
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i += 1) {
    const res = func(...arrOfArr[i]);
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
