import * as C from './styles';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

import {formatCurrentDate} from '../../helpers/dateFilter';
import { Resume } from '../Resume/index';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  revenue: number;
  expense: number;
}

export const Information = ({ currentMonth, onMonthChange, revenue, expense }: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }


  return (
    <C.Container>
      <C.MonthArea>
        <C.Arrow onClick={handlePrevMonth}>
          <BsFillArrowLeftCircleFill color='blue'/>
        </C.Arrow>
        <C.MonthName>{formatCurrentDate(currentMonth)}</C.MonthName>
        <C.Arrow onClick={handleNextMonth}>
          <BsFillArrowRightCircleFill color='blue'/>
        </C.Arrow>
      </C.MonthArea>
      <C.Resume>
        <Resume title="Receitas" value={revenue}/>
        <Resume title="Despesas" value={expense}/>
        <Resume title="Balanço" value={revenue - expense}/>
      </C.Resume>
    </C.Container>
  );
}