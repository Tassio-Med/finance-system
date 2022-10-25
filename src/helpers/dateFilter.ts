export const getCurrentMonth = () => {
  let now = new Date();
  //Mẽs começa a partir de 0 no javascript;
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

