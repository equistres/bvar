import React, { useContext } from 'react'
import '../../index.css'
import MemberComponent from './component';
import { Store } from '../../helpers/context';


//SI RECIBE PROPS COMO PARAMETRO TENGO TODOS LOS DATOS DEL DOM
export default function MemberContainer(props) {

    const { state } = useContext(Store);

    let contenido;
    if (state) {
        const users = state.users;
        contenido = Object.keys(users).sort((a, b) => { return a - b }).map((item, key) => {
            return (
                <MemberComponent key={key} data={users[item]} />
            )
        });
    } else {
        contenido = <p>Loading...</p>
    }

    return (
        <div className="App">
            <h2>↳{props.location.pathname}</h2>
            <div className="container mt-4">
                <div className="row" style={{ justifyContent: "center" }}>
                    {contenido}
                </div>
            </div>
        </div>
    )
}




