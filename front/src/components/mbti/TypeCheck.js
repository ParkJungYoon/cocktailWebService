import React from "react";

const TypeCheck = (props) => {
  return (
    <>
      <p>{props.type}</p>
      <div>
        <img
          className=""
          src={props.typeImg}
          alt=""
          width="250px"
          style={{
            borderRadius: "1rem",
            justifyContent: "center",
          }}
        />
      </div>
    </>
  );
};

export default TypeCheck;
