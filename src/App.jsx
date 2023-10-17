import { useState, useRef } from "react"
import './app.css'
import Results from "./components/Results"
import { FormContainer } from "./components/FormContainer"

export default function App(){

let ref = useRef()

const [dia, setDia] = useState('--')
const [mes, setMes] = useState('--')
const [anio, setAnio] = useState('--')
let  dateCurrent = new Date().setHours(0,0,0,0)

const submit = (e) => {
    e.preventDefault()
    let target = e.target
    // primero validamos que los campos no esten vacios
   if(target.dia.value=='' || target.mes.value=='' || target.anio.value==''){
        if(target.dia.value==''){
            ref.current.children[0].classList.add('error')
            ref.current.children[0].lastElementChild.textContent  = 'dato requerido'
            
        }
        else if(target.dia.value!=''){
            ref.current.children[0].classList.remove('error')
            ref.current.children[0].lastElementChild.textContent  = ''
        }
        if(target.mes.value==''){
            ref.current.children[1].classList.add('error')
            ref.current.children[1].lastElementChild.textContent  = 'dato requerido'
        
        }
        else if(target.mes.value!=''){
            ref.current.children[1].classList.remove('error')
            ref.current.children[1].lastElementChild.textContent  = ''
        }
        if(target.anio.value==''){
            ref.current.children[2].classList.add('error')
            ref.current.children[2].lastElementChild.textContent  = 'dato requerido'
            
        }
        else if(target.anio.value!=''){
            ref.current.children[2].classList.remove('error')
            ref.current.children[2].lastElementChild.textContent  = ''
        }
        return
   }

   // despues validamos que si algun campo es negativo o sobrepasa el limite permitido, evaluaremos campo por campo
   if( target.mes.value > 12 ||target.mes.value < 1 || target.anio.value > new Date().getFullYear() || target.anio.value < 1 || (target.dia.value > 31 || target.dia.value < 1) ){
        if((target.dia.value > 31 || target.dia.value < 1) /* || dateBirth.getDate()!= target.dia.value */){
            console.log('dia invalido')

            ref.current.children[0].classList.add('error')
            ref.current.children[0].lastElementChild.textContent  = 'dia invalido'
            setDia('--')
            /* return   */             
        }else{
            ref.current.children[0].classList.remove('error')
            ref.current.children[0].lastElementChild.textContent  = ''
        }

        if(target.mes.value > 12 ||target.mes.value < 1) {
            console.log('mes invalido') 
            ref.current.children[1].classList.add('error')
            ref.current.children[1].lastElementChild.textContent  = 'mes invalido'
            setMes('--')
        // return
        }else{
            ref.current.children[1].classList.remove('error')
            ref.current.children[1].lastElementChild.textContent  = ''
        }

        if(target.anio.value > new Date().getFullYear() || target.anio.value < 1) {
            console.log('inserta un año valido')   
            ref.current.children[2].classList.add('error')
            ref.current.children[2].lastElementChild.textContent  = 'el año debe ser menor'
            setAnio('--')
        // return
        }else{
            ref.current.children[2].classList.remove('error')
            ref.current.children[2].lastElementChild.textContent  = ''
        }

        return
    } 
   

    let dateBirth = new Date(`${target.mes.value}-${target.dia.value}-${target.anio.value}`)
            console.log(dateBirth)
            
    let timeSeconds = Math.floor((dateCurrent/1000)-(dateBirth/1000))
            console.log(timeSeconds) 

/*  una vez que el usuario haya insertado datos, y que estos no sean negativos o sobrepasen el limite permitido 
    evaluaremos si la fecha que inserta el usuario es coherente, por ejemplo el usuario no puede decir que nacio
    el 31 de febrero de x año, ya que febrero tiene 28 dias y 29 si es año bisciesto

*/
    if(dateBirth.getDate()!= target.dia.value){
        ref.current.children[0].classList.add('error')
        ref.current.children[0].lastElementChild.textContent  = 'dia erroneo'
    }

/* 
    una vez que el usuario haya insertado datos y que que estos no sean negativos o sobrepasen el limite permitido 
    , y que ademas la fecha es coherente, evaluaremos si el usuario inserta una fecha valida pero mayor a la actualidad
    por ejemplo el usuario no puede decir que nacio el 17/10/2023, si la fecha actual es menor a esa
*/
    else if(timeSeconds < 0){
        console.log('inserta una fecha menor a la actual')
            ref.current.children[0].classList.add('error')
            ref.current.children[0].lastElementChild.textContent  = 'inserta una fecha menor a la actual'
            ref.current.children[1].classList.add('error')
            ref.current.children[1].lastElementChild.textContent  = 'inserta una fecha menor a la actual'
    }
// en caso no se cumpla ni una de las validaciones anteriores, podremos con toda confianza calcular la edad del usuario  
    else if(timeSeconds >=0){
                
        let years = Math.floor(timeSeconds/(3600*24*365))
        let mounths = Math.floor((timeSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30))
        let days = Math.floor(((timeSeconds % (3600 * 24 * 365)) % (3600 * 24 * 30)) / (3600 * 24));

                            
        console.log(`tienes ${years} años ${mounths} meses y  ${days} dias`)
        setAnio(years);
        setMes(mounths);
        setDia(days);      

        Array.from(ref.current.children).forEach(element => {
            element.classList.remove('error')
            element.lastElementChild.classList[0]=='message'? element.lastElementChild.textContent = '': ''
        })

    }

        
}
  return (
    <div className="data-container">  
        <FormContainer submit={submit} referencia={ref}/> 
                    
        <Results dia ={dia} mes ={mes} anio={anio}/>
                
    </div>  

    )

}

