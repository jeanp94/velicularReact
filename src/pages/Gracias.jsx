import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'

const Gracias = () => {
  return (
    <div className="w-full content--backplan md:h-screen">
      <Header  
          pagina='pagina de gracias'
      /> 
      <div className="lg:container mx-auto lg:ml-auto content--backplan" >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-4/12 max-md:text-center">
              <Content 
                pagina='pagina de gracias'
              />
          </div>
          <div className="lg:w-8/12 bg-white md:h-screen">
            <div className="w-3/4 lg:w-8/12 mx-auto">
                <div className="mt-14">
                  <p className="text-3xl text-red-500">¡Te damos la bienvenida! </p>
                  <p className="text-3xl text-gray-500">Cuenta con nosotros para<br/>proteger tu vehículo</p>
                  <p className="text-lg text-gray-400 my-2"> Enviaremos la confirmación de compra de tu Plan Vehícular Tracking<br/>a tu correo:</p>
                  <p>joel.sanchez@gmail.com</p>
                  <input type="submit" className="btn-gracias px-10 py-4 mt-6 text-white cursor-pointer hover:bg-red-600 rounded-md w-full" value="CÓMO USAR MI SEGURO"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gracias
