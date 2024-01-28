import { useRef, useState } from "react"

export const useValidator = () => {
  let ref = useRef()
  const [dia, setDia] = useState('--')
  const [mes, setMes] = useState('--')
  const [anio, setAnio] = useState('--')

  function emptyFieldValidator(dia, mes, anio, ){
    if(dia==''){
        ref.current.children[0].classList.add('error')
        ref.current.children[0].lastElementChild.textContent  = 'dato requerido'     
    }
    else if(dia!=''){
        ref.current.children[0].classList.remove('error')
        ref.current.children[0].lastElementChild.textContent  = ''
    }
    if(mes==''){
        ref.current.children[1].classList.add('error')
        ref.current.children[1].lastElementChild.textContent  = 'dato requerido'  
    }
    else if(mes!=''){
        ref.current.children[1].classList.remove('error')
        ref.current.children[1].lastElementChild.textContent  = ''
    }
    if(anio==''){
        ref.current.children[2].classList.add('error')
        ref.current.children[2].lastElementChild.textContent  = 'dato requerido'      
    }
    else if(anio!=''){
        ref.current.children[2].classList.remove('error')
        ref.current.children[2].lastElementChild.textContent  = ''
    }
  }

  function numbersInvalid(dia, mes, anio){
    if((dia > 31 || dia < 1) /* || dateBirth.getDate()!= target.dia.value */){
        console.log('dia invalido')
        ref.current.children[0].classList.add('error')
        ref.current.children[0].lastElementChild.textContent  = 'dia invalido'
        setDia('--')        
    }else{
        ref.current.children[0].classList.remove('error')
        ref.current.children[0].lastElementChild.textContent  = ''
    }

    if(mes > 12 || mes < 1) {
        console.log('mes invalido') 
        ref.current.children[1].classList.add('error')
        ref.current.children[1].lastElementChild.textContent  = 'mes invalido'
        setMes('--')
    }else{
        ref.current.children[1].classList.remove('error')
        ref.current.children[1].lastElementChild.textContent  = ''
    }

    if( anio > new Date().getFullYear() || anio < 1) {
        console.log('inserta un año valido')   
        ref.current.children[2].classList.add('error')
        ref.current.children[2].lastElementChild.textContent  = 'año invalido'
        setAnio('--')
    }else{
        ref.current.children[2].classList.remove('error')
        ref.current.children[2].lastElementChild.textContent  = ''
    }
  }

  function inconsistentDate(){
    Array.from(ref.current.children).forEach(element => {
        element.classList.remove('error')
        element.lastElementChild.classList[0]=='message'? element.lastElementChild.textContent = '': ''
    })
    ref.current.children[0].classList.add('error')
    ref.current.children[0].lastElementChild.textContent  = 'dia erroneo'
  }

  function dateExceeds(){
    console.log('inserta una fecha menor a la actual')
    ref.current.children[0].classList.add('error')
    ref.current.children[0].lastElementChild.textContent  = 'inserta una fecha menor a la actual'
    ref.current.children[1].classList.add('error')
    ref.current.children[1].lastElementChild.textContent  = 'inserta una fecha menor a la actual'
  }

  function setResult(years, mounths, days){
    setAnio(years);
    setMes(mounths);
    setDia(days);      

    Array.from(ref.current.children).forEach(element => {
        element.classList.remove('error')
        element.lastElementChild.classList[0]=='message'? element.lastElementChild.textContent = '': ''
    })
  }

  return {ref, emptyFieldValidator, numbersInvalid, inconsistentDate, dateExceeds, setResult ,dia, mes, anio}
}
