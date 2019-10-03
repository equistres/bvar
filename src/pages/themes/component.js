import React from "react";

const Copy = (e) => {
    const id= e.target.id;
    debugger;
  let textarea = document.getElementById("textarea"+id);
  textarea.select();
  document.execCommand("copy");
};

const ThemeComponent = props => {
  const { data, id } = props;
  return (
    <div>
      <textarea id={"textarea"+id} defaultValue={data.text}/>
      <button onClick={Copy} id={id}>Copiar</button>
    </div>
  );
};
export default ThemeComponent;
