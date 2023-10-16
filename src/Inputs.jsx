import { useState, useEffect, useRef } from "react"

import Text from "./Text"

export default function Inputs(){

/* let span = document.querySelectorAll('span')
let message = document.querySelectorAll('.message') */

let ref = useRef()

const [dia, setDia] = useState('--')
const [mes, setMes] = useState('--')
const [anio, setAnio] = useState('--')


/*   const [years, setYears] = useState();
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
*/


 let  dateCurrent = new Date().setHours(0,0,0,0)

 
const submit = (e) => {
    e.preventDefault()
    let target = e.target
    if(target.dia.value==''){
        ref.current.children[0].classList.add('error')
        ref.current.children[0].lastElementChild.textContent  = 'dato requerido'
    }
    if(target.mes.value==''){
        ref.current.children[1].classList.add('error')
        ref.current.children[1].lastElementChild.textContent  = 'dato requerido'
    }
    if(target.anio.value==''){
        ref.current.children[2].classList.add('error')
        ref.current.children[2].lastElementChild.textContent  = 'dato requerido'
    }

/*         if(target.dia.value==''||target.mes.value== ''|| target.anio.value ==''){
            console.log('falta insertar datos')
            
            Array.from(ref.current.children).forEach(element => {
                element.classList.add('error')
                element.lastElementChild.classList[0]=='message'? element.lastElementChild.textContent = 'dato requerido': ''
            })
  
            return

        }   
*/

/* if(target.mes) {
               
    if(target.mes > 12 ||target.mes < 1) {
        console.log('mes invalido') 

    span.forEach((elemento, indice) => {
    elemento.classList.add('error')
                    
    })
                
    span[1].children[2].textContent='mes invalido'

        return
    }
} */

/* if(target.anio) {
    if(target.anio > new Date().getFullYear() || target.anio < 1) {
    console.log('inserta un año valido')   

    span.forEach((elemento, indice) => {
        elemento.classList.add('error')
                    
    })
    span[2].children[2].textContent='año invalido'

        return
    }
}
 */


/* if(target.dia){

        let dateBirth = new Date(`${target.mes.value}-${target.dia.value}-${target.anio.value}`)
            console.log(dateBirth)
            
        let timeSeconds = Math.floor((dateCurrent/1000)-(dateBirth/1000))
            console.log(timeSeconds) 

        if((target.dia.value > 31 || target.dia.value < 1) || dateBirth.getDate()!= target.dia.value){
            console.log('dia invalido')

        span.forEach((elemento, indice) => {
        elemento.classList.add('error')
                            
        })
                            
        span[0].children[2].textContent='dia invalido'
                            
        }

        else if(timeSeconds < 0){
        console.log('inserta una fecha menor a la actual')
            message[0].textContent ='inserta una fecha menor a la actual'
            message[1].textContent ='inserta una fecha menor a la actual'
        }
                    
        else if(timeSeconds >=0){
                        
                        
        let years = Math.floor(timeSeconds/(3600*24*365))
        let mounths = Math.floor((timeSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30))
        let days = Math.floor(((timeSeconds % (3600 * 24 * 365)) % (3600 * 24 * 30)) / (3600 * 24));

                            
        console.log(`tienes ${years} años ${mounths} meses y  ${days} dias`)
        setAnio(years);
        setMes(mounths);
        setDia(days);      

        span.forEach(element => {
            element.classList.remove('error')
        })     

                    message.forEach((e,i) => {
                e.textContent =''
            })
        }
}     */
        
}
  return (
    <div className="data-container">  
        <form onSubmit={submit} ref={ref}>
            <span className="">

                <div style={{marginBottom:'3px'}}>DAY</div> 
                <input className="input-date" id="0" type="number" min={1} max={31} placeholder="DD" name='dia' />
                <div className="message" ></div> 

            </span>   

            <span className="">

                <div style={{marginBottom:'3px'}}>MOUNTH</div> 
                <input className="input-date" id="1" type="number" min={1} max={12} placeholder="MM" name='mes'  />
                <div className="message"></div>  

            </span>
                                
                                
            <span className="">  

                <div style={{marginBottom:'3px'}}>YEAR</div>
                <input className="input-date" id="2" type="text" placeholder="YYYY" name='anio' />
                <div className="message"></div>

            </span>

            {/*   <input type="submit" value={'CLICK ME'} onClick={click} /> */}
                            
            <button>  
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 46 44"><g fill="none" stroke="white" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
            </button>


        </form>  
                    
        {/* AQUI LE PASAMOS PROPS A NUESTRO CONPONENTE, ESTOS SERAN EL RESULTADO DE EVALUAR LA FECHA DEL USUARIO CON LA FECHA ACTUAL*/}
        <Text dia ={dia} mes ={mes} anio={anio}/>
                
    </div>  

    )

}

