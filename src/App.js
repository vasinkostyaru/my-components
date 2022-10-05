import { Button } from './components/Button.styled.js';
import { CustomWrapper } from './components/CustomWrapper.js';
import { Vtext } from './components/Vtext';

function App() {
  return (
    <CustomWrapper>
      <Vtext fontWeight="thin">Параграф тонкий шрифт ( fontWeight="thin" )</Vtext>
      <Vtext fontWeight="bold">Параграф жирный шрифт ( fontWeight="bold" )</Vtext>
      <Vtext size="small">Параграф мелкий шрифт ( size="small" )</Vtext>
      <Vtext size="big">Параграф большой шрифт ( size="big" )</Vtext>
      <Vtext italic>Параграф косой ( italic )</Vtext>
      <Vtext underline>Параграф подчернутый ( underline )</Vtext>
      <Vtext crossed>Параграф зачеркнутый ( crossed )</Vtext>
      <Vtext as="a" href="#">В виде ссылки ( as="a" href="#" )</Vtext>
      <Vtext color="red">Цвет шрифта крассный ( color="red" )</Vtext>
      <Vtext color="green">Цвет шрифта зеленый ( color="green" )</Vtext>
      <Vtext gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}  fontWeight="bold"  size="big">Параграф градиентом</Vtext>
      <Vtext transform="capitalize">Капиталайз параграфа ( transform="capitalize" )</Vtext>
      <Vtext transform="uppercase">верхний регистр ( transform="uppercase" )</Vtext>
      <Vtext align="center">Выравнивание по центру ( align="center" )</Vtext>
      <Vtext align="right">Выравнивание оп правому краю ( align="right" )</Vtext>
      
      <Button bgcolor="springGreen">first styled btn</Button>
    </CustomWrapper>
  );
}

export default App;
