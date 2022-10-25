import React from 'react'
import { useState }from 'react'

import Content from "../components/Content"
import Footer from "../components/Footer"
import Formulario from "../components/Formulario"
import Header from "../components/Header"

const Home = () => {
    const [client, setClient] = useState({});
  return (
    <div className="w-full fondo">
            <Header 
               pagina='home'
            /> 
      <div className="container mx-auto h-screen" >
        <div className="flex">
          <div className="w-2/5 px-12">
              <Content 
                 pagina='pagina de inicio'
              />
          </div>
          <div className="w-3/5">
            <div className="w-3/5 mx-auto">
              <Formulario 
                client = {client}
                setClient ={setClient}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home