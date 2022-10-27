import * as C from './styles';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

import {formatCurrentDate} from '../../helpers/dateFilter';

type Props = {
  currentMonth: string;
}

export const Information = ({ currentMonth }: Props) => {
  return (
    <C.Container>
      <C.MonthArea>
        <C.Arrow><BsFillArrowLeftCircleFill color='blue'/></C.Arrow>
        <C.MonthName>{formatCurrentDate(currentMonth)}</C.MonthName>
        <C.Arrow><BsFillArrowRightCircleFill color='blue'/></C.Arrow>
      </C.MonthArea>
      <C.Resume>

      </C.Resume>
    </C.Container>
  );
}