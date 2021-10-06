export const generatorID = (quantityNumb = 4) => {
  let uniqID = "";
  for (let i = 0; i < quantityNumb; i++) {
    let num = parseInt(Math.random() * 10);
    uniqID = uniqID + num;
  }
  return uniqID;
};
