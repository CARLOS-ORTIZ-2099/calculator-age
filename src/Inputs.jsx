/* eslint-disable no-unused-vars */

// IMPORTAMOS EL USESTATE DE LA LIBRERIA DE REACT

import { useState, useEffect } from "react"

import Text from "./Text"


// CREAMOS LA FUNCION QUE RETORNARA UN COMPONENTE

export default function Inputs() {

let span = document.querySelectorAll('span')
let message = document.querySelectorAll('.message')

 //   const currentDate1 = new Date().getTime()/1000
  

/* ASIGNAR EL LOS VALORES DE USESTATE A SUS RESPECTIVAS CONSTANTES TENIENDO EN CUENTA QUE EL PRIMER VALOR ES EL ESTADO INICIAL 
   Y EL SEGUNDO VALOR ES LA FUNCION QUE MODIFICARA DICHO ESTADO, ESTOS ADOPTARAN EL VALOR DE LO QUE EL USUARIO INSERTE 

*/ 
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [anio, setAnio] = useState('')

/* AQUI CREO OTROS ESTADOS QUE ADOPTARAN EL VALOR DEL RESULTADO FINAL DESPUES DE QUE SE HAYA ECHO TODAS LAS OPERACIONES  */
    const [years, setYears] = useState();
    const [months, setMonths] = useState();
    const [days, setDays] = useState();
    


    useEffect(() => {
         if(dia=='') {
            setDays('--')
         }   

          if(mes ==''){
            setMonths('--')
         }


         if(anio ==''){
            setYears('--')
         }


    },[dia,mes,anio])





   
    /* CREAR UNA VARIABLE QUE CONTENGA LA FECHA ACTUAL PARA HACER LA DIFERENCIA DE FECHAS CON LA FECHA DE NACIMIENTO DEL USUARIO ASI 
       MISMO SE APLICA EL METODO SETHOURS PARA SETEAR LAS HORAS, MINUTOS, SEGUNDOS Y MILISEGUNDO EN 0 ESTO CON EL FIN DE QUE AL HACER
       LA DIFERECNIA DE FECHAS NO HALLA UN MARGEN DE ERROR POR ESTAS HORAS MINUTOS SEGUNDOS O MILISEGUNDOS YA QUE EL USUARIO SOLO 
       INSERTARA EL AÑO MES Y DIA DE SU NACIMIENTO, LO QUE DEVOLVERA UN VALOR EN MILISEGUNDOS
       
    */

  let  dateCurrent = new Date().setHours(0,0,0,0)
   



 /* LO QUE HAGO ES QUE POR CADA CAMBIO CAPTURO EL ID DE DICHO INPUT EN DONDE ESTE DETECTANDO ESE CAMBIO Y SEGUN ESE ID SE APLICARA LA 
    FUNCION DE CAMBIO DE ESTADO DEFINIDA ANTERIORMENTE PARA ESE DETERMINADO INPUT  
    
 */
    const change = (event) => {
        let response = event.target.id
        switch (response) {
            case ('0'):
                setDia(event.target.value)
            break;
            
            case ('1'):
                setMes(event.target.value)
            break;

            case ('2'):
                setAnio(event.target.value)
            break;
            
        }
    }

 
/* CREANDO UN EVENTO CLICK QUE SE REALIZARA CUANDO EL USUARIO MANDE SU FECHA DE NACIMIENTO PARA SER EVALUADA, PRIMERO SE CANCELA LA ACCION POR DEFECTO
    LUEGO EN LA PRIMERA CONDICIONAL ME ASEGURO QUE EL USUARIO LLENE TODOS LOS CAMPOS, SEGUNDA CONDICIONAL ME ASEGURO QUE EL USUARIO PNGA MESES VALIDOS,
    TERCERA CONDICIONAL ME ASEGURO QUE EL USUARIO NO PONGA UN AÑO MAYOR AL ACTUAL Y TAMPOCO PONGA UN NUMERO NEGATIVO
*/    
    const click = (element) => {
        element.preventDefault()
    
       
       if(dia =='' || mes== ''|| anio ==''){
            console.log('falta insertar datos')
             
            span.forEach((elemento, indice) => {
                elemento.classList.add('error')
               
            })

            message.forEach((e,i) => {
                e.textContent ='dato requerido'
            })
            return

       }  


        if(mes) {
               
            if(mes > 12 ||mes < 1) {
                console.log('mes invalido') 

                span.forEach((elemento, indice) => {
                    elemento.classList.add('error')
                   
                })
               
                span[1].children[2].textContent='mes invalido'

                return
            }
        }


        if(anio) {
            if(anio > new Date().getFullYear() || anio < 1) {
                 console.log('inserta un año valido')   

                span.forEach((elemento, indice) => {
                    elemento.classList.add('error')
                   
                })
                span[2].children[2].textContent='año invalido'

                return
            }
        }


/* CUARTA CONDICIONAL: CREAMOS UNA VARIABLE QUE CONTENDRA LA FECHA QUE EL USUARIO HAYA PUESTO ESO LO LOGRAMOS GRACIAS A LOS ESTADO DEFINIDOS ARRIBA,
   RECALCAR QUE ESTA CONDICION LA PONEMOS EN EL ULTIMO NIVEL YA QUE PRIMERO DEBO ASEGURARME DE QUE LOS DATOS INSERTADOS POR EL USUARIO PASEN POR LAS 
   DEMAS CONDICIONALES QUE ME SERVIRAN COMO FILTROS, UNA VEZ QUE SE LLEGUE AL PUNTO DE ESTA CONDICIONAL QUIERE DECIR QUE LOS DATOS DEL USUARIO HAN PASADO
   EL FILTRO SATISFACTORIAMENTE Y SE PUEDE CREAR UNA FECHA CON LOS DATOS QUE ESTE HALLA INSERTADO, EN EL CASO DEFINIERA ESTA CONDICION EN EL PRIMER NIVEL 
   ME ARRIESGARIA DE QUE EL USUARIO PONGA DATOS INVALIDOS YA QUE NO ESTARIA PASANDO POR NINGUN FILTRO PREVIAMENTE 
   
*/  
/* LA LOGICA ES LA SIGUIENTE SE REALIZA UNA RESTA ENTRE LA FECHA ACTUAL Y LA FECHA INSERTADA POR EL USUARIO CADA UNA DE ELLAS DIVIDIDA ENTRE 1000 PARA 
   OBTENER LOS VALORES EN SEGUNDOS
*/


        if(dia){

            let dateBirth = new Date(`${mes}-${dia}-${anio}`)
            console.log(dateBirth)
    
            let timeSeconds = Math.floor((dateCurrent/1000)-(dateBirth/1000))
            console.log(timeSeconds) 

        // VERIFICAMOS QUE EL DIA SEA UN DIA VALIDO Y DE QUE NO HALLA ERRORES EN EL CALCULO DE DIAS PARA ALGUNOS MESES CON ESTE FRAGMENTO dateCalc.getDate()!= date   
            if((dia > 31 || dia < 1) || dateBirth.getDate()!= dia){
                    console.log('dia invalido')

                    span.forEach((elemento, indice) => {
                        elemento.classList.add('error')
                       
                    })
                    
                    span[0].children[2].textContent='dia invalido'
                    
                    
            }
            
        // SI LA DIFERENCIA ME DA NEGATIVO QUIERE DECIR QUE EL USUARIO INSERTO UNA FECHA MAYOR A LA ACTUAL, BASICAMENTE DIAS O MESES SUPERIORES AL ACTUAL, YA QUE LA RESTRICCION DE LOS AÑOS YA LA VALIDAMOS PREVIAMENTE    

            else if(timeSeconds < 0){
                console.log('inserta una fecha menor a la actual')
                message[0].textContent ='inserta una fecha menor a la actual'
                message[1].textContent ='inserta una fecha menor a la actual'
            }
            
        // SI LA RESTA ES POSITIVA EJECUTARA TODA LA LOGICA DE ABAJO    
            else if(timeSeconds >=0){
                
                   
                let years = Math.floor(timeSeconds/(3600*24*365))
                let mounths = Math.floor((timeSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30))
                let days = Math.floor(((timeSeconds % (3600 * 24 * 365)) % (3600 * 24 * 30)) / (3600 * 24));

                // CUANDO SE TERMINE DE EJECUTAR TODA LA LOGICA ES DONDE INVOCAREMOS ALAS FUNCIONES DEFINIDAS QUE CAMBIARAN EL ESTADO CORRESPONIDENTE PARA EL AÑO MES Y DIA    
                    
                        console.log(`tienes ${years} años ${mounths} meses y  ${days} dias`)
                        setYears(years);
                        setMonths(mounths);
                        setDays(days);      

                        span.forEach(element => {
                            element.classList.remove('error')
                        })     

                        message.forEach((e,i) => {
                            e.textContent =''
                        })
            }
           
    
        }    
        
    }



    return (
      <div className="data-container">  
            <form>
                <span className="">
                    <div style={{marginBottom:'3px'}}>DAY</div> 
                        <input className="input-date" id="0" type="number" min={1} max={31} placeholder="DD" onChange={change} required/>
                    <div className="message" ></div> 
                </span>   

                <span className="">
                    <div style={{marginBottom:'3px'}}>MOUNTH</div> 
                        <input className="input-date" id="1" type="number" min={1} max={12} placeholder="MM" onChange={change} required />
                    <div className="message"></div>     
                </span>
                    
                <span className="">    
                    <div style={{marginBottom:'3px'}}>YEAR</div>
                        <input className="input-date" id="2" type="text" placeholder="YYYY" onChange={change} required/>
                    <div className="message"></div>                        
                </span>

                  {/*   <input type="submit" value={'CLICK ME'} onClick={click} /> */}
                  
                    <button onClick={click}>  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 46 44"><g fill="none" stroke="white" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>


            </form>  
            
            {/* AQUI LE PASAMOS PROPS A NUESTRO CONPONENTE, ESTOS SERAN EL RESULTADO DE EVALUAR LA FECHA DEL USUARIO CON LA FECHA ACTUAL*/}
            <Text dias ={days} meses ={months} anios={years}/>
           
      </div>  

    )

}





  

