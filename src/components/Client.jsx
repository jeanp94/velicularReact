import {useState, useEffect} from 'react'
import jovenRimac from '../assets/img/joven-rimac.svg' 
import llantaRobada from '../assets/img/llanta-robada.svg' 
import flecha from '../assets/img/flecha.svg' 
import choque from '../assets/img/choque-roja.svg' 
import atropello from '../assets/img/atropello.svg' 
import Coberturas from './Coberturas'
const Client = ({client}) => {
  const {txtplaca} = client;
  const [items,setItems] = useState('');
  const [resultado,setResultado] =  useState(12500);
  const [montototal, setMontototal] = useState(20);
  const onSubmit = () => {
    window.location.replace('/gracias');
}
useEffect(() => {
    localStorage.setItem("monto", JSON.stringify(montototal));
}, [onSubmit]);
    useEffect(() => { 
      fetch(`https://jsonplaceholder.typicode.com/users/${client.txtid ? client.txtid : 1}`)
      .then((response) => response.json())
      .then((data) => {
         setItems(data);
      });
    }, [client]);

      function calcular(e){
        const signo= e.target.value;
        signo==='+' && resultado<=16500 ?  setResultado(resultado+100) : signo==='-' && resultado>=12500 ? setResultado(resultado-100) : setResultado(resultado);
      }

   
  return (

    <>
      <div className="text-left my-5">
        <p className="font-light text-3xl form--title">
          ¡Hola, 
          <span className="home--textspan">
              {items.name}!
          </span>
        </p>
      </div>
      <p className='home--parrafo text-lg'>
        Conoce las coberturas para tu plan
      </p>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
          <div className="flex border border-gray-300 my-8 rounded-xl">
            <div className="w-3/5 text-center flex flex-col justify-center items-center">
              <div className="text-left">
                <p className='home--parrafo text-base'>
                  Placa: {txtplaca}
                </p> 
                <p className='plan--title text-xl'>
                  Wolkswagen 2019<br/> Golf
                </p>
              </div>
            </div>
            <div className="w-2/5">
              <img src={jovenRimac} className="plan--img"/>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-3/5'>
                  <p>Indica la suma asegurada</p>
                  <span className="home--parrafo text-sm">MIN $12,500 | MAX $16,500</span>
              </div>
              <div className='lg:w-2/5'>
                  <div className='flex lg:w-full'>
                    <div className='w-2/12'>
                      <input type="button" className="border w-full border-y-gray-400 border-l-gray-400 px-3 py-3 lg:w-fit border-r-white rounded-md text-xl text-gray-400" 
                      defaultValue="-" 
                      onClick={calcular}
                      />
                    </div>
                    <div className='w-8/12'>
                      <input type='text' 
                      className='text-center border border-y-gray-400 w-full px-3 py-3.5 border-x-white text-base' 
                      value={'$'+resultado.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                      onClick={calcular}
                      />
                    </div>
                    <div className='w-2/12'>
                      <input 
                      type="button" 
                      defaultValue="+" 
                      className="border border-y-gray-400 border-r-gray-400 px-3 py-3 w-full lg:w-fit border-l-white rounded-r-md text-xl text-gray-400 text-center"
                      onClick={calcular}
                       />
                    </div>
                  </div>
              </div>
          </div>
          <hr className="mt-8 mb-8"/>
          <p>Agrega o quita coberturas</p>  
          <div className='flex mb-4'>

            <div className="w-1/3">
              <button 
              type="button" 
              className="cursor-pointer uppercase w-full py-4 px-2 text-xs font-bold hover:text-red-500 hover:border-b-red-500 border border-x-white border-t-white"> 
              Protege a tu auto
              </button>
            </div>
            <div className="w-1/3">
              <button 
              type="button" 
              className="cursor-pointer uppercase w-full py-4 px-2 text-xs font-bold hover:text-red-500 hover:border-b-red-500 border border-x-white border-t-white"> 
              Protege a los que te rodean
              </button>
            </div>
            <div className="w-1/3">
              <button 
              type="button" 
              className="cursor-pointer uppercase w-full py-4 px-2 text-xs font-bold hover:text-red-500 hover:border-b-red-500 border border-x-white border-t-white"> 
              mejora tu<br/>plan 
              </button>
            </div>
          </div>
          <Coberturas 
            img = {llantaRobada}
            flecha = {flecha}
            titulo = "Llanta robada"
            descripcion = {`He salido de casa a las cuatro menos 
            cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
            y mucho más`}
            monto = {15}
            resultado = {1}
            montototal = {montototal}
            setMontototal = {setMontototal}
          />

                <Coberturas 
                img = {choque}
                flecha = {flecha}
                titulo = "Choque y/o pasarte la luz roja"
                descripcion = {``}
                monto = {20}
                resultado = {resultado}
                montototal = {montototal}
                setMontototal = {setMontototal}
                />

          <Coberturas 
            img = {atropello}
            flecha = {flecha}
            titulo = "Atropello en la vía Evitamiento"
            descripcion = {``}
            monto = {50}
            resultado = {1}
            montototal = {montototal}
            setMontototal = {setMontototal}
          />
        </div>
        <div className='lg:w-1/2'>
          <div className='flex w-8/12 mx-auto flex-row lg:flex-col'>
              <p className="uppercase text-sm font-semibold plan--title hidden lg:block">Monto</p>
              <div className="w-1/2 lg:w-full">
                <p className="text-2xl plan--title my-2">${montototal}</p>
                <p className="text-sm plan--parrafo">mensuales</p>
              </div>
              <hr className='mt-4 hidden lg:block'/>
              <p className='plan--title my-4 hidden lg:block'>El precio incluye:</p>
              <ul className='plan--parrafo ckeck pl-5 hidden lg:block'>
                <li>Llanta de respuesto</li>
                <li>Analisis de motor</li>
                <li>Aros gratis</li>
              </ul>
              <div className="w-1/2 lg:w-full">
                <input 
                type="button" 
                onClick={onSubmit}
                defaultValue="LO QUIERO" 
                className="bg-red-500 py-4 mt-2 text-white rounded-md hover:bg-red-700 cursor-pointer w-full"/>
              </div>
          </div>
        </div>
      </div>
         

    </>
  )
}

export default Client