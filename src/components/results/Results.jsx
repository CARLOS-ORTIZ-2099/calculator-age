/* eslint-disable react/prop-types */

export default function Results ({dia,mes, anio}) {
    return (
        <div className="texts">
            <div><span style={{color:'rgb(118, 52, 185)' , marginRight:'10px'}} >{anio}</span>  años</div>
            <div><span style={{color:'rgb(118, 52, 185)', marginRight:'10px'}}>{mes}</span>  meses</div>
            <div><span style={{color:'rgb(118, 52, 185)', marginRight:'10px'}}>{dia}</span>  dias</div>
        </div>
    )

}



