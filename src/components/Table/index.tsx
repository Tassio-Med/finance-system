import { Item } from "../../types/Item";
import { TableItem } from '../TableItem';

type Props = {
  list: Item[]
}

 export const Table = ({list}:Props) => {
  return (
    <div className="w-[50%] h-[20%] mt-10 rounded-md shadow-xl bg-slate-50 flex flex-col justify-center items-center">
      <thead className="w-full p-4 flex justify-center items-center">
        <tr className="w-full grid grid-cols-4 gap-10 font-semibold text-center">
          <th>Data</th>
          <th>Categoria</th>
          <th>Título</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody className="w-full px-4">
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </div>
  );
 }