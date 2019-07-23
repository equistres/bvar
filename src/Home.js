import React, { useContext } from 'react'
import { Store } from './helpers/context';


export default function Home(props) {

  const { state, dispatch } = useContext(Store);

  function buttonTest(e) {
    console.log("CLICK BOTON");

    dispatch({
      type:"ADD",
      payload: "usuarioLoco",
    })
  }

  return (
    <div className="App text-center">
      {/* <blockquote className="blockquote">
        Somos una hermandad de hombres barbudos de élite de todo el mundo,
        dedicada a:
        <br />• La Barba
        <br />• Caridad
        <br />• Familia
        <br />• Respeto
        <br />• Lealtad
        </blockquote> */}
      <button onClick={buttonTest}>botonazo</button>
    </div >
  )
}
