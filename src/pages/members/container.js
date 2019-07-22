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

    const getMembers = async () => {
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

    useEffect(() => {
        getMembers()
    }, init.fetched)
    const { users } = init

    let contenido;
    if (init.fetched) {
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




