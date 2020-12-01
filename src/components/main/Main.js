import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  const history = useHistory();
  const personalClick = () => {
    history.push("/personal");
  };
  const groupClick = () => {
    history.push("/group");
  };
  return (
    <S.Main>
      <S.GlobalStyle />
      <S.MainDiv>
        <Header></Header>
        <S.BtnDiv>
          <S.Btn onClick={personalClick}>개인</S.Btn>
          <S.Btn onClick={groupClick}>단체</S.Btn>
        </S.BtnDiv>
      </S.MainDiv>
    </S.Main>
  );
};

export default Main;
