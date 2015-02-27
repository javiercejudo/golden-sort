
function swap(arraySwap, positionA, positionB) {
  var tmp = arraySwap[positionA];

  arraySwap[positionA] = arraySwap[positionB];
  arraySwap[positionB] = tmp;

  return arraySwap;
}

function getOptimalStrategyStrict(n) {
  var strategyCandidate = Math.floor(n / Math.E),
    sum = 0,
    i;

  for(i = strategyCandidate + 2; i <= n; i += 1) {
    sum += 1 / (i - 1);
  }

  return (sum > 1) ? strategyCandidate + 1 : strategyCandidate;
}

function getOptimalStrategyFast(n) {
  return Math.round(n / Math.E);
}

function goldenSort(_arrayToSort) {
  if (_arrayToSort.length < 2) {
    return _arrayToSort;
  }

  var arrayToSort = _arrayToSort.slice(0),
    currentStrategy,
    relevantArrayLenght = arrayToSort.length,
    relevantArrayLastIndex = relevantArrayLenght - 1,
    swaps,
    currentMax,
    currentMaxIndex,
    index,
    done;

  do {
    currentMax = -Infinity;
    index = 0;
    swaps = 1;
    currentStrategy = getOptimalStrategyFast(relevantArrayLenght);

    do {
      if (currentMax < arrayToSort[index]) {
        currentMax = arrayToSort[index];
        currentMaxIndex = index;
      }

      index += 1;
    } while (index < currentStrategy);

    if (index !== relevantArrayLastIndex && arrayToSort[relevantArrayLastIndex] < arrayToSort[currentMaxIndex]) {
       swap(arrayToSort, relevantArrayLastIndex, currentMaxIndex);

       if (arrayToSort[relevantArrayLastIndex - 1] < arrayToSort[currentMaxIndex]) {
         swap(arrayToSort, relevantArrayLastIndex - 1, currentMaxIndex);
       }
    }

    do {
      if (currentMax < arrayToSort[index]) {
        if (index !== relevantArrayLastIndex && arrayToSort[relevantArrayLastIndex] < arrayToSort[index]) {
          swap(arrayToSort, relevantArrayLastIndex, index);

          if (arrayToSort[relevantArrayLastIndex - 1] < arrayToSort[index]) {
            swap(arrayToSort, relevantArrayLastIndex - 1, index);
          }
        }
      }

      index += 1;
    } while (index < relevantArrayLenght);

    relevantArrayLenght -= swaps;
    relevantArrayLastIndex -= swaps;
  } while (relevantArrayLenght > 1);

  return arrayToSort;
}

exports.getOptimalStrategyStrict = getOptimalStrategyStrict;
exports.getOptimalStrategyFast = getOptimalStrategyFast;
exports.swap = swap;
exports.sort = goldenSort;

// var result = goldenSort([6, 9, 5, 1, 4, 3, 0, 2, 8, 7]);
var result = goldenSort([6, 7, 8, 9, 1, 2, 3, 4, 5]);
//
// console.log(result);
