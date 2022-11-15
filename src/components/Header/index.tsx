import { HeaderContainer, HeaderContent, NewTranscationButton } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTranscationButton>Nova Transação</NewTranscationButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
