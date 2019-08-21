import React from 'react'

export default function Addmember(props) {
    const { addHandler, logoutHandler } = props;
    return (
        <div>
            <a className="btn btn-outline-danger mb-2 float-right" onClick={logoutHandler}>Logout</a>
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Password</label>
                    <input type="text" className="form-control" id="instagram" placeholder="usuario Instagram sin @" />
                </div>
                <a className="btn btn-primary mb-2" onClick={addHandler}>Agregar</a>
            </form>

        </div>
    )
}