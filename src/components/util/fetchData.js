export const fetchData = async (url, setState, page = 1, previousResponse = []) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.message;
    // if (response.next) {
    //   page++;

    //   fetchData(url, setState, page, mergedResults);
    //   return;
    // }

    setState(generateSplitArray(results, 4, 6));
  } catch (error) {
    console.error(error);
  }
};

export const generateSplitArray = (array, columnNumber, columnLength) => {
  let currentArrayPart = array;
  const splitArray = [];
  for (let i = 0; i < columnNumber; i++) {
    const newArray = [...currentArrayPart];
    const subArray = newArray.splice(columnLength);
    currentArrayPart = subArray;
    splitArray[i] = newArray;
  }
  return splitArray;
};
