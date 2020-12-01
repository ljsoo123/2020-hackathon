import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import Header from "../Header/Header";
import io from "socket.io-client";
import xlsx from "xlsx";
const socketClient = io.connect("http://192.168.0.19:3000");
const Personal = () => {
  const input = useRef();
  const studentClass = useRef();
  const num = useRef();
  const [datas, setDatas] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const count = useRef(0);
  const history = useHistory();
  useEffect(() => {
    socketClient.on("check", (data) => {
      setDatas((prev) => prev.concat(Number(data).toFixed(1)));
    });
  }, []);
  useEffect(() => {
    setFinalData(
      datas.map((temp, i) => ({
        id: i + 1,
        checkTemp: temp,
        isNormal: temp > 33 && temp < 37.5 ? true : false,
      }))
    );
  }, [datas]);
  const btnClick = () => {
    history.push("/");
    const ws = xlsx.utils.json_to_sheet(finalData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Temperature-Check");
    xlsx.writeFile(wb, "Temperature-Check.xlsx");
  };
  return (
    <S.Main>
      <S.MainDiv>
        <S.GlobalStyle />
        <S.Header>
          <Header />
        </S.Header>
        <S.Body>
          <S.TitleTable>
            <table>
              <tr>
                <td>번호</td>
                <td>체온</td>
                <td>정상/비정상</td>
              </tr>
              {finalData.map((now, i) => {
                return (
                  <tr>
                    <td>{now.id}</td>
                    <td>{now.checkTemp}</td>
                    <td>{now.isNormal ? "정상" : "비정상"}</td>
                  </tr>
                );
              })}
            </table>
          </S.TitleTable>
          <S.Btn>
            <button onClick={btnClick}>EXCEL로 저장</button>
          </S.Btn>
        </S.Body>
      </S.MainDiv>
    </S.Main>
  );
};

export default Personal;
