import * as C from './styles';

type Props = {
  title: string;
  value: number;
}

export const Resume = ({ title, value }: Props) => {
  return(
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info>R$ {value}</C.Info>
    </C.Container>
  );
}