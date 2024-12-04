import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const {history, setHistory} = useVisualMode(EMPTY);

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {props.interview ?
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => console.log("CONFIRM")}
          onEdit={() => console.log("EDIT")}
        />
        :
        <Empty onAdd={() => console.log("CREATE")} />}
    </article>
  );
}
