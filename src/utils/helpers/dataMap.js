export const dataMap = (data) => {
  const dataList = [];
  for (let datum in data) {
    dataList.push(data[datum]);
  }
  return dataList
}