import React from 'react'
import ilustracion from '../assets/img/ilustracion.svg'
import imgGracias from '../assets/img/img-gracias.svg'
import mobilGracias from '../assets/img/mobilimg-gracias.svg'

const Content = ({pagina}) => {
  return (
        <div className="flex flex-col">
            { pagina ==='Arma tu plan' ? (
                <>
                <div className="flex items-center mt-12 mb-6">
                    <div className="border border-gray-400 px-2 py-0 rounded-50 
                    plan--rounder mr-3 text-base text-gray-400">
                    1</div>
                    <p className="text-gray-400">Datos</p>
                </div>
                <div className="flex items-center mb-4">
                    <div className="border border-gray-400 px-2 py-0 rounded-50 
                    plan--rounder mr-3 text-base text-white bg-sky-500 content--background">
                    2</div>
                    <p className="text-gray-400">{pagina}</p>
                </div>
                </>
            ) : pagina === 'pagina de inicio' ? (
                <>
                    <div className="w-max text-center my-8">
                        <img src={ilustracion} />
                    </div>
                    <div className="px-4">
                        <h5 className="font-bold home--title my-2">
                            ¡NUEVO!
                        </h5>
                        <p className="text-3xl mb-4 text-black">Seguro 
                            <span className="home--textspan">
                                Vehicular<br/>
                                Tracking</span>
                        </p>
                        <p className="home--parrafo text-lg">Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div>
                </>
            ) : pagina === 'pagina de gracias' ? (
                <>
                    <div className="w-full lg:w-max text-center lg:my-8 gracias--img lg:pl-18">
                        <picture className='text-center w-full'>
                            <source srcset={imgGracias} media="(min-width: 1024px)" />
                            <source srcset={mobilGracias}  className='w-full'  media="(max-width: 1023px)" />
                            <img src='' className="w-full"/>
                        </picture>
                    </div>
                </>
            ) : (
                <>
                        qwewqewq
                </>
            )
            }
          
        </div>
  )
}

export default Content