import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter"
import { categories } from "../../data/categories";

type Props = {
  item: Item;
}

export const TableItem = ({ item }: Props) => {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-full grid grid-cols-4 gap-10 text-center">
        <td>{formatDate(item.date)}</td>
        <td>{categories[item.category].title}</td>
        <td>{item.title}</td>
        <td>R$ {item.value}</td>
      </div>
    </div>
  );
}