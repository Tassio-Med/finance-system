import { Item } from "../../types/Item";

type Props = {
  list: Item[]
}

 export const Table = ({list}:Props) => {
  return (
    <div className="w-full h-24 rounded-md shadow-xl ">
      <header className="w-full p-10 grid grid-cols-4 gap-4 font-semibold">
        <tr>Data</tr>
        <tr>Categoria</tr>
        <tr>Título</tr>
        <tr>Valor</tr>
      </header>
      <body className="">
        {list.map((item, index) => (
          <div key={index}>
            <td></td>
            <td></td>
            <td>{item.title}</td>
            <td></td>
          </div>
        ))}
      </body>
    </div>
  );
 }