import { useState ,useEffect} from "react"

const Coberturas = ({img,flecha,titulo,descripcion,monto,montototal,setMontototal,resultado}) => {
    const [action, setAction] = useState(false);
    function handleAction(valor,monto){
        !valor ?  setMontototal(montototal+monto) : setMontototal(montototal-monto) 
        
        setAction(!valor);
     }
     useEffect(() => {
        if(resultado>16000 && action===true) {
            setMontototal(montototal-monto);
            setAction(false);
        }  
      },[resultado]);
   
  return (
    <>
    {resultado < 16000 ? (
        <>
        <hr className="my-4" />
        <div className="flex mt-4">
            <div className="w-2/12">
                <img src={img} />
            </div>
            <div className="w-8/12">
                <p className="mb-4">{titulo}</p>
                <div className="flex items-center cursor-pointer" onClick={()=>handleAction(action,monto)}>
                    <div 
                    className="border border-gray-400 px-2 py-0 rounded-50 
    plan--rounder mr-3 text-base text-blue-500">
                    { !action ? '+': '-'}
                    </div>
                    <p 
                    className="text-blue-500 text-sm">{ !action ? 'AGREGAR' : 'QUITAR'}</p>
                </div>
                <p className="mt-4 text-gray-500">
                {descripcion}
                </p>
            </div>
            <div className="w-2/12">
                <img src={flecha} className={ !descripcion ? 'mover mt-2':'mt-2'} />
            </div>
        </div>
        </>
       ) : (
        <></>
        )
    }
   
    </>
  )
}

export default Coberturas