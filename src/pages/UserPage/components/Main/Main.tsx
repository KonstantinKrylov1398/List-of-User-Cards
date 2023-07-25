import React from "react";
import style from "./style.css";
import Email from "src/assets/Email.svg";
import { User } from "src/types";
type Props = {
  user: User.Entity;
};
export function Main({ user }: Props) {
  return (
    <div className={style.main}>
      <div className={style.main__textcontent}>
        Клиенты видят в нем эксперта по вопросам разработки комплексных решений
        финансовых продуктов, включая такие аспекты, как организационная
        структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам
        лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
        применения новейших технологий и увеличивать продажи, используя самые
        современные аналитические инструменты.
        <br></br>
        <br></br>В работе с клиентами недостаточно просто решить конкретную
        проблему или помочь справиться с трудностями. Не менее важно уделять
        внимание обмену знаниями: "Один из самых позитивных моментов — это
        осознание того, что ты помог клиенту перейти на совершенно новый уровень
        компетентности, уверенность в том, что после окончания проекта у клиента
        есть все необходимое, чтобы дальше развиваться самостоятельно".
        <br></br>
        <br></br>
        Помимо разнообразных проектов для клиентов финансового сектора, Сорин
        ведет активную предпринимательскую деятельность. Он является
        совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
        инновационный подход к красоте, а также инвестором других
        бизнес-проектов.
      </div>
      <div className={style.main__email}>
        <Email />
        <div className={style.main__emailname}>{user.email}</div>
      </div>
    </div>
  );
}
