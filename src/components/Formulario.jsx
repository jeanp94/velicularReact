import { useEffect} from 'react'
import { useForm } from "react-hook-form";
import {
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";

const Formulario = ({ setClient, client, menssageError }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const id = (max,min) => Math.floor((Math.random() * (max - min + 1)) + min);
    const onSubmit = (data) => {
            setClient(data);
            window.location.replace('/plan');
        }
        useEffect(() => {
            localStorage.setItem("client", JSON.stringify(client));
        }, [onSubmit]);
      return (
            <>
            { menssageError && menssageError.length ? (
                <>
                    <p className="font-light text-3xl form--title"> 
                        {menssageError}
                    </p>
                    <nav>
                         <Link to="/" className="text-blue-600 hover:text-blue-700 text-xl">Volver a la pagina de Inicio</Link>
                    </nav>
                </>
                    
            ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mt-5 px-12">
                    <div className="text-left my-5">
                        <p className="font-light text-3xl form--title">
                            Déjanos tus datos
                        </p>
                    </div>
                    <div className="flex">
                        <input type="hidden" 
                        {...register("txtid")} value={ id(10,1) }/>
                        <div className="w-2/5">
                            <select 
                            className="w-full h-full py-4 px-3 formulario--select border 
                            border-gray-300 text-xl"
                            {...register("txtdoc",{ required: true})}>
                                <option>DNI</option>
                                <option>Pasaporte</option>
                            </select>
                        </div>
                        <div className="w-3/5">
                            <input 
                            type="text"
                            className="w-full py-4 px-3 formulario--input border border-gray-300 text-xl" 
                            placeholder="Nro. de doc"
                            {...register("txtnrodoc",{ required: true, maxLength: 8,pattern: /[0-9]{8}/ })}
                            />
                             
                        </div> 
                        
                    </div>
                   {errors.txtnrodoc && <p className="text-red-600">Error en ingresar Nro. de doc</p>}
                </div>
                <div className="text-center mt-5 px-12">
                    <input 
                    type="text"
                    className="w-full py-4 px-3 rounded-md border border-gray-300 text-xl" 
                    placeholder="Celular"
                    {...register("txtcelular",{ required: true, pattern: /[0-9]{9}/ })}
                    />
                     {errors.txtcelular && <p className="text-red-600">Error en ingresar celular caracteres permitidos 9</p>}
                </div>
                <div className="text-center mt-5 px-12">
                    <input 
                    type="text"
                    className="w-full py-4 px-3 rounded-md border border-gray-300 text-xl" 
                    placeholder="Placa"
                    {...register("txtplaca",{ required: true, maxLength: 12 })}
                    />
                    {errors.txtplaca && <p className="text-red-600">Error en ingresar la placa maximo de caracteres 12</p>}
                </div>
                <div className="mt-5 px-12">
                     <div className="flex">
                        <input 
                        id="green-checkbox"
                        type="checkbox" 
                        value=""
                        className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 
                        focus:ring-green-500 dark:focus:ring-green-600 
                        dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
                        dark:border-gray-600" 
                        {...register("txtcopyright")}
                        />
                        <label htmlFor="green-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</label>
                    </div>
                </div>
                <div className="mt-5 px-12 text-left">
                    <input type="submit" className="form--btn px-12 p-4 text-white uppercase form--btn cursor-pointer rounded-md" value="Cotízalo"/>
                </div>
            </form>

            )}
     </>
  )
}

export default Formulario
