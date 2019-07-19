import React, { Component } from 'react'
import '../../index.css'
import MemberComponent from './component';
import consoleLogHelper from '../../helpers/console';
import Database from '../../helpers/db';

export default class MemberContainer extends Component {

    state = {
        users: null,
        fetched: null
    }

    getMembers = async () => {
        if (localStorage.getItem("users") === null) {
            this.setState({
                users: await Database("villanos"),
                fetched: true
            })
            consoleLogHelper("red", "Dato obtenido de Firestore")
        } else {
            this.setState({
                users: JSON.parse(localStorage.getItem("users")),
                fetched: true
            })
            consoleLogHelper("green", "Dato obtenido de localStorage")
        }
    }

    componentDidMount() {
        this.getMembers();
    }

    render() {
        const { users, fetched } = this.state
        let contenido;
        if (fetched) {
            contenido = Object.keys(users).map((item, key) => {
                return (
                    <MemberComponent key={key} data={users[item]} />
                )
            });
        } else {
            contenido = <p>Loading...</p>
        }
        return (
            <div className="App">
                <h2>↳{this.props.location.pathname}</h2>
                <div className="container mt-4">
                    <div className="row" style={{justifyContent:"center"}}>
                        {contenido}
                    </div>
                </div>
            </div>
        )
    }
}
