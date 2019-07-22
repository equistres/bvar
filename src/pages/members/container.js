import React, { useEffect, useState } from 'react'
import '../../index.css'
import MemberComponent from './component';
import Database from '../../helpers/db';
import consoleLogHelper from '../../helpers/console';

//SI RECIBE PROPS COMO PARAMETRO TENGO TODOS LOS DATOS DEL DOM
export default function MemberContainer(props) {
    const [init, initChange] = useState({
        users: null,
        fetched: false
    });

    const users = init.users;
    const fetched = init.fetched;

    async function getMembers() {
        if (localStorage.getItem("users") === null) {
            initChange({
                users: await Database("villanos"),
                fetched: true
            })
            consoleLogHelper("red", "Dato obtenido de Firestore")
        } else {
            initChange({
                users: JSON.parse(localStorage.getItem("users")),
                fetched: true
            })
            consoleLogHelper("green", "Dato obtenido de localStorage")
        }
    }
    //CALLBACK: If present, effect will only activate if the values in the list change
    //Ahora la suscripción solo se volverá a crear cuando cambie fetched
    useEffect(() => {
        getMembers();
    }, fetched);

    //COMO HAGO ESTO?    
    // const { users, fetched } = init

    let contenido;
    if (fetched) {
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




