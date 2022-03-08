import { useState, useEffect } from "react";
export const GetTestimonials = () => {
  const [data, setData] = useState([]);
  //pr001 fazendo a Consulta ao masterData e Retornando o conteudo
  function Request() {
    fetch(`/api/dataentities/TC/search?_fields=testimonial,name,clientcity,data,imgurl`, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });

  }
  useEffect(()=>{
    Request()
  },[])
  return data;
};
