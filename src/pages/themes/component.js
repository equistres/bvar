import React from "react";

const Copy = e => {
  const id = e.target.id;
  let textarea = document.getElementById("textarea" + id);
  textarea.select();
  document.execCommand("copy");
};

const ThemeComponent = props => {
  const { data, id } = props;
  return (
    <div className="d-flex justify-content-center mb-5">        
      <textarea style={{width: 400}}className="rounded-0" id={"textarea"+id} rows="5" defaultValue={data.text}/>
      <button onClick={Copy} id={id}>Copiar</button>    
    </div>
    
  );
};
export default ThemeComponent;
