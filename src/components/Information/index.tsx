import * as C from './styles';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

type Props = {
  currentDate: string;
}

export const Information = ({ currentDate }: Props) => {
  return (
    <C.Container>
      <C.MonthArea>
        <C.Arrow><BsFillArrowLeftCircleFill color='blue'/></C.Arrow>
        <C.MonthName>currentDate</C.MonthName>
        <C.Arrow><BsFillArrowRightCircleFill color='blue'/></C.Arrow>
      </C.MonthArea>
      <C.Resume>

      </C.Resume>
    </C.Container>
  );
}