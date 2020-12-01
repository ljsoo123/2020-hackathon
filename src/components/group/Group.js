import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import * as S from "./styles";
import axios from "axios";
import io from "socket.io-client";
import xlsx from "xlsx";

const socketClient = io.connect("http://192.168.0.19:3000");

const Group = () => {
  const grade = useRef();
  const studentClass = useRef();
  const num = useRef();
  const [datas, setDatas] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const count = useRef(0);
  const [excelBtn, setExcelBtn] = useState(false);
  useEffect(() => {
    grade.current = prompt("학년을 입력하세요");
    studentClass.current = prompt("반을 입력하세요");
    num.current = prompt("인원수를 입력하세요");

    axios
      .post("http://192.168.0.19:3000/main", {
        student_grade: grade.current * 1,
        student_class: studentClass.current * 1,
        length: num.current * 1,
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    socketClient.on("check", (data) => {
      if (count.current === parseInt(num.current) - 1) {
        setExcelBtn(true);
      } else if (count.current === parseInt(num.current)) return;
      setDatas((prev) => prev.concat(Number(data).toFixed(1)));
      count.current++;
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
    const ws = xlsx.utils.json_to_sheet(finalData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(
      wb,
      ws,
      `${grade.current}-${studentClass.current}`
    );
    xlsx.writeFile(wb, `${grade.current}-${studentClass.current}.xlsx`);
  };
  return (
    <S.Main>
      <S.GlobalStyle />
      <Header />
      <S.Body>
        <S.TitleTable>
          <table>
            <tr>
              <td>번호</td>
              <td>체온</td>
              <td>정상/비정상</td>
            </tr>
            {finalData.map((now) => {
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
        {excelBtn ? <S.Btn onClick={btnClick}>EXCEL 출력</S.Btn> : <></>}
      </S.Body>
    </S.Main>
  );
};

export default Group;
