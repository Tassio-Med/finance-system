import { useState, useEffect } from 'react';

import { Category } from './types/Category';
import { Item } from './types/Item';

import { categories } from './data/categories'; 
import { items } from './data/items';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { Table } from './components/Table';

const App = () => {
 const [list, setList] = useState(items);
 const [filterList, setFilterList] = useState<Item[]>([]);
 const [month, setMonth] = useState(getCurrentMonth());

 useEffect(() =>{
  setFilterList( filterListByMonth(list, month) );
 }, [list, month]);

  return (
    <div className="w-full h-screen flex justify-center">
      <Table list={filterList}/>
    </div>
  );
}

export default App;