import React, { useContext } from "react";
import ThemeComponent from './component';

import { Store } from "../../helpers/context";

const Themes = () => {
  const { state } = useContext(Store);

  let contenido = null;
  if (state) {
    if (state.themes) {
      const { themes } = state;

      contenido = themes.map((item, key)=>{
        return(<ThemeComponent data={item} key={key} id={key}/>)
      });
    }
  }
  return <div className="App">{contenido}</div>;
};
export default Themes;
