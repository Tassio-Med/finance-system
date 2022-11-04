import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  //Mẽs começa a partir de 0 no javascript;
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = ( list: Item[], date: string ): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for(let i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
}

export const formatDate = (date:Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZero(day)}/${addZero(month)}/${year}`;
}

const addZero = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentDate = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month)-1]} de ${year}`;
}

export const newDateAdjusted = (dateField: string) => {
  let [year, month, day] = dateField.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}