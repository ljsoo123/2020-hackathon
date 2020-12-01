import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body{
        margin : 0;
        padding:0;
    }
    
`;
export const Header = styled.div``;
export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  @font-face {
    font-family: "HangeulNuri-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: HangeulNuri-Bold;
`;

export const TitleTable = styled.div`
  width: 60%;

  font-size: 30px;
  > table > tr:nth-child(1) > td {
    background-color: black;
    color: white;
    border: none;
  }
  > table {
    width: 100%;
    text-align: center;
  }
  > table > tr {
    width: 100%;
  }
  > table > tr > td {
    border: 1px solid black;
    width: 33%;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.div`
  > button {
    @font-face {
      font-family: "HangeulNuri-Bold";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: HangeulNuri-Bold;
    width: 150px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    font-size: 20px;
  }
`;
