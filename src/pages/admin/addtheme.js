import React from "react";

const AddTheme = (props) => {
  const { addThemeHandler } = props;
  return (
    <div>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <textarea id="theme" style={{ width: 400, height: 250 }}></textarea>
        </div>
        <a className="btn btn-primary mb-2" onClick={addThemeHandler}>
          Agregar Theme
        </a>
      </form>
    </div>
  );
};
export default AddTheme;
