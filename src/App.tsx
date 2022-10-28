import { useState, useEffect } from 'react';

import * as C from './App.styles';

import { Category } from './types/Category';
import { Item } from './types/Item';

import { categories } from './data/categories'; 
import { items } from './data/items';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { Table } from './components/Table';
import { Information } from './components/Information';

const App = () => {
 const [list, setList] = useState(items);
 const [filterList, setFilterList] = useState<Item[]>([]);
 const [currentMonth, setMonth] = useState(getCurrentMonth());

 useEffect(() =>{
  setFilterList( filterListByMonth(list, currentMonth) );
 }, [list, currentMonth]);

 const handleMonthChange = (newMonth: string) => {
  setMonth(newMonth);
 }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <Information 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <Table list={filterList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;