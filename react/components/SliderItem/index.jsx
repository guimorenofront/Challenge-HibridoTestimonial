import React from "react";
export const SliderItem = (props) => {
  //pr002 criando o Componente Card q vai popular o SliderComponent
  return (
    <div className="Card">
      <div className="ClientIcon">
        <div className="ImageContainer">
          <img src={props.img} alt={props.Alt} />
        </div>
      </div>
      <div className="date">
        <p>{props.date}</p>
      </div>
      <div className="Container">
        <p>{props.content}</p>
      </div>
      <div className="ClientName">
        <h2>{props.user}</h2>
      </div>
    </div>
  );
};
