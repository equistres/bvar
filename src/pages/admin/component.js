import React from 'react'

export default function MemberListComponent(props) {
    const { data, deleteHandler } = props;
    let userRow = null;
    userRow = Object.keys(data).map((item, key) => {
        let rango = data[item].rango
        rango = rango ? rango.toString() : "";

        let staff = data[item].staff
        staff = staff ? staff.toString() : "";

        return (
            <tr key={key} username={data[item].userName} rango={rango} staff={staff} className="memberlist">
                <th scope="row">{key}</th>
                <td>{data[item].userName}</td>
                <td><a id={data[item].userName} onClick={deleteHandler} target="_blank"><button type="button" className="btn btn-sm btn-outline-danger">Borrar</button></a></td>
            </tr>
        )
    });

    return (
        <table className="table" style={{ backgroundColor: "white" }}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">IG</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {userRow}
            </tbody>
        </table>
    )
}
