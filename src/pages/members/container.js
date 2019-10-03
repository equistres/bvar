import React, { useContext } from "react";
import "../../index.css";
import MemberComponent from "./component";
import { Store } from "../../helpers/context";

//SI RECIBE PROPS COMO PARAMETRO TENGO TODOS LOS DATOS DEL DOM
export default function MemberContainer(props) {
  const { state } = useContext(Store);

  let contenido;
  let members = [];
  let staff = [];

  if (state) {
    const users = state.users;
    Object.keys(users).map((item, key) => {
      if (users[item].staff) {
        return staff.push(<MemberComponent key={key} data={users[item]} />);
      } else {
        return members.push(<MemberComponent key={key} data={users[item]} />);
      }
    });
  } else {
    contenido = <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>↳{props.location.pathname}</h2>

      <div className="container mt-4">
        <h3>Oficiales</h3>
        <div className="row" style={{ justifyContent: "center" }}>
          {contenido}
          {staff}
        </div>
      </div>
      <div className="container mt-4">
        <h3>Miembros</h3>
        <div className="row" style={{ justifyContent: "center" }}>
          {contenido}
          {members}
        </div>
      </div>
    </div>
  );
}
