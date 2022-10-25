import React from 'react'
import { useState,useEffect }from 'react'

import Content from "../components/Content"
import Header from "../components/Header"
import Client from "../components/Client"
const Plan = () => {

    const [cliente, setCliente] = useState([]);
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('client'));
      if (data) {
        setCliente(data);
      }

    },[]);

  return (
    <div className="w-full content--backplan">
          <Header  
        pagina='Arma tu plan'
      /> 
    <div className="container mx-auto lg:ml-auto " >
      <div className="flex flex-col lg:flex-row">
        <div className="w-10/12 mx-auto lg:mx-0 lg:w-4/12">
           <Content 
            pagina='Arma tu plan'
           />
        </div>
        <div className="lg:w-8/12 bg-white">
          <div className="w-10/12 mx-auto">
            <Client 
              client = {cliente}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Plan
