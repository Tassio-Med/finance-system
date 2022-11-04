import { useState, useEffect } from 'react';
import * as C from './App.styles';
// import { Category } from './types/Category';
// import { GiMoneyStack } from 'react-icons/gi'
import { Item } from './types/Item';
import { categories } from './data/categories'; 
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { Table } from './components/Table';
import { Information } from './components/Information';
import { Input } from './components/Input';

const App = () => {
 const [list, setList] = useState(items);
 const [filterList, setFilterList] = useState<Item[]>([]);
 const [currentMonth, setMonth] = useState(getCurrentMonth());
 const [revenue, setRevenue] = useState(0);
 const [expense, setExpense] = useState(0);

 useEffect(() =>{
  setFilterList( filterListByMonth(list, currentMonth) );
 }, [list, currentMonth]);

 useEffect(() => {
  let income = 0;
  let expenseCount = 0;

  for(let i in filterList){
    if(categories[filterList[i].category].expense){
      expenseCount += filterList[i].value;
    } else {
      income += filterList[i].value;
    }
  }

  setRevenue(income);
  setExpense(expenseCount);
 }, [filterList]);

 const handleMonthChange = (newMonth: string) => {
  setMonth(newMonth);
 }

 const handleAdd = (item: Item) => {
  let newList = [...list];
  newList.push(item);
  setList(newList);
 }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
        {/* <GiMoneyStack color='white' size='40px'/> */}
      </C.Header>
      <C.Body>
        <Information 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          revenue={revenue}
          expense={expense}
        />

        <Input onAdd={handleAdd}/>

        <Table list={filterList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;