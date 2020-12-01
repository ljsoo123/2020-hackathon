import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin : 0;
        padding:0;
    }
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const MainDiv = styled.div`
  @font-face {
    font-family: "HangeulNuri-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: HangeulNuri-Bold;
  width: 100%;
`;

export const TextDiv = styled.div`
  text-align: center;
  font-size: 50px;
`;

export const BtnDiv = styled.div`
  width: 60%;
  height: 500px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.div`
  width: 300px;
  height: 100px;
  border: 5px solid black;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;
