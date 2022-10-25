import { useState, useEffect } from 'react';

import { Category } from './types/Category';
import { Item } from './types/Item';
import { categories } from './data/categories'; 
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';

const App = () => {
 const [list, setList] = useState(items);
 const [filterList, setFilterList] = useState<Item[]>([]);
 const [month, setMonth] = useState(getCurrentMonth());

 useEffect(() =>{

 }, [list, month]);

  return (
    <div className="">
      <h1>Olá mundo</h1>
    </div>
  );
}

export default App;