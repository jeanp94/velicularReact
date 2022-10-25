import React from 'react'
import logo from '../assets/img/logo-rimac.svg'
const Header = ({pagina}) => {
    
  return (
    <nav className={`border-gray-200 dark:bg-gray-900 pt-4 ${pagina==='Arma tu plan' || pagina==='pagina de gracias' ? 'bg-white border border-b-gray-200 border-x-white border-t-white': ''}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <div className="flex items-center">
                <img src={logo} className="mr-3 h-5" />
            </div>
            <div className="flex items-center">
                <div className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">
                    ¿Tienes alguna duda?
                </div>
                <div href="#" className="text-sm font-medium header--telephone">
                    (01) 411 6001
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header
