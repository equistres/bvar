import React from 'react'

export default function MemberComponent(props) {
    const { data } = props;

    return (
        <div className="col-auto mb-3" rango={data.rango}>
            <div className="card w-20 mx-3">
                <div className="card-body text-center">
                    <img src={data.photo} className="rounded mx-auto d-block mw-auto img-fluid" alt="" />
                    <p><small className="card-title text">@{data.userName}</small></p>
                    <div className="col text-center">
                        <a href={"https://www.instagram.com/" + data.userName} target="_blank"><button type="button" className="add btn btn-sm btn-outline-danger">Ir Instagram</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}