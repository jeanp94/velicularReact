import React from 'react'
import Content from "../components/Content"
import Footer from "../components/Footer"
import Formulario from "../components/Formulario"
import Header from "../components/Header"

const Nosencontro = () => {
  return (
    <div className="w-full fondo">
    <div className="container mx-auto h-screen" >
      <Header /> 
      <div className="flex">
        <Content />
        <Formulario 
            menssageError="La página que intento solicitar no está en el servidor (Error 404)"
        />
      </div>
      <Footer />
    </div>
  </div>
  )
}

export default Nosencontro
