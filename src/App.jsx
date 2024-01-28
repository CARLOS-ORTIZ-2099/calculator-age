import './app.css'
import { FormContainer } from "./components/form-container/FormContainer"
import Results from "./components/results/Results"
import { useValidator } from "./hooks/useValidator"


export default function App(){

let  dateCurrent = new Date().setHours(0,0,0,0)

const {ref, emptyFieldValidator, numbersInvalid, inconsistentDate , dateExceeds, setResult, dia, mes, anio} = useValidator()

const submit = (e) => {
    e.preventDefault()
    let target = e.target
    let dateBirth = new Date(`${target.mes.value}-${target.dia.value}-${target.anio.value}`)
    let timeSeconds = Math.floor((dateCurrent/1000)-(dateBirth/1000))
    console.log(timeSeconds) 
    console.log(dateBirth)

    // primero validamos que los campos no esten vacios
   if(target.dia.value=='' || target.mes.value=='' || target.anio.value==''){
        emptyFieldValidator(target.dia.value, target.mes.value, target.anio.value)    
   }

    // despues validamos que si algun campo es negativo o sobrepasa el limite permitido, evaluaremos campo por campo
    else if( target.mes.value > 12 ||target.mes.value < 1 || target.anio.value > new Date().getFullYear() 
        || target.anio.value < 1 || (target.dia.value > 31 || target.dia.value < 1) ){
        
        numbersInvalid(target.dia.value, target.mes.value, target.anio.value)

    } 
   
    // luego evaluaremos que la fecha no sea inconsistente ej : 31/02/2020 es inconsitente ya que febrero a los mas tiene 29 dias
    else if(dateBirth.getDate()!= target.dia.value){
        inconsistentDate()      
    }

    // luego validamos que la fecha no sobrepase la fecha actual en que se hace la consulta
    else if(timeSeconds < 0){
        dateExceeds()
    }

    // en caso no se cumpla ni una de las validaciones anteriores, podremos con toda confianza calcular la edad del usuario  
    else if(timeSeconds >=0){                
        let years = Math.floor(timeSeconds/(3600*24*365))
        let mounths = Math.floor((timeSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30))
        let days = Math.floor(((timeSeconds % (3600 * 24 * 365)) % (3600 * 24 * 30)) / (3600 * 24));                         
        console.log(`tienes ${years} años ${mounths} meses y  ${days} dias`)
        setResult(years, mounths, days)
    }
   
}

  return (
    <div className="data-container">  
        <FormContainer submit={submit} referencia={ref}/> 
                    
        <Results dia ={dia} mes ={mes} anio={anio}/>           
    </div>  

    )

}

