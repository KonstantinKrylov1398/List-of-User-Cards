import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./userpage.css";
import Email from "../../../assets/Email.svg";
import ArrowLeft from "../../../assets/ArrowLeft.svg";
import Exit from "../../../assets/Exit.svg";
import axios from "axios";
export function UserPage() {
  const [getUser, setGetUser] = useState<any>({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${params.id}`).then((resp) => {
      console.log(resp.data.data);
      setGetUser(resp.data.data);
    });
  }, [setGetUser]);
  return (
    <div className={style.background}>
      <div className={style.userpage_header}>
        <ArrowLeft
          onClick={() => {
            navigate("/users");
          }}
          className={style.userpage_showsvg}
        />
        <button
          onClick={() => {
            navigate("/users");
          }}
          className={style.userpage_headerbuttonone}
        >
          Назад
        </button>
        <div className={style.userpage_user}>
          <img
            className={style.userpage_headerimg}
            src={getUser.avatar}
            alt=""
          />
          <div className={style.userpage_textusername}>
            <div className={style.userpage_username}>
              {getUser.first_name} {getUser.last_name}
            </div>
            <div className={style.userpage_partner}>Партнер</div>
          </div>
        </div>
        <Exit
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("test");
          }}
          className={style.userpage_showsvg}
        />
        <button
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("test");
          }}
          className={style.userpage_headerbuttontwo}
        >
          Выход
        </button>
      </div>
      <div className={style.userpage_main}>
        <div className={style.userpage_textcontent}>
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
          <br></br>
          <br></br>В работе с клиентами недостаточно просто решить конкретную
          проблему или помочь справиться с трудностями. Не менее важно уделять
          внимание обмену знаниями: "Один из самых позитивных моментов — это
          осознание того, что ты помог клиенту перейти на совершенно новый
          уровень компетентности, уверенность в том, что после окончания проекта
          у клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".
          <br></br>
          <br></br>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </div>
        <div className={style.userpage_email}>
          <Email />
          <div className={style.userpage_emailname}>{getUser.email}</div>
        </div>
      </div>
    </div>
  );
}
