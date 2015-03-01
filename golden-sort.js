
function swap(arraySwap, positionA, positionB) {
  var tmp = arraySwap[positionA];

  arraySwap[positionA] = arraySwap[positionB];
  arraySwap[positionB] = tmp;

  return arraySwap;
}

function getOptimalStrategyFast(n) {
  return Math.round(n / Math.E);
}


function goldenSort(arrayToSort) {
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  var currentStrategy,
    relevantArrayLength = arrayToSort.length,
    relevantArrayLastIndex = relevantArrayLength - 1,
    currentMax,
    currentMaxIndex,
    index,
    done;

  do {
    currentMax = -Infinity;
    index = 0;
    currentStrategy = getOptimalStrategyFast(relevantArrayLength);

    do {
      if (currentMax < arrayToSort[index]) {
        currentMax = arrayToSort[index];
        currentMaxIndex = index;
      }

      index += 1;
    } while (index < currentStrategy);

    if (currentMaxIndex !== relevantArrayLastIndex && arrayToSort[relevantArrayLastIndex] < arrayToSort[currentMaxIndex]) {
       swap(arrayToSort, relevantArrayLastIndex, currentMaxIndex);
    }

    do {
      if (currentMax < arrayToSort[index]) {
        if (index !== relevantArrayLastIndex && arrayToSort[relevantArrayLastIndex] < arrayToSort[index]) {
          swap(arrayToSort, relevantArrayLastIndex, index);
        }
      }

      index += 1;
    } while (index < relevantArrayLength);

    relevantArrayLength -= 1;
    relevantArrayLastIndex -= 1;
  } while (relevantArrayLength > 1);

  return arrayToSort;
}

exports.getOptimalStrategyFast = getOptimalStrategyFast;
exports.swap = swap;
exports.sort = goldenSort;
