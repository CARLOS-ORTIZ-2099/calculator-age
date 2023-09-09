/* eslint-disable react/prop-types */

export default function Text (props) {
    return (
        <div className="texts">
            <div><span style={{color:'rgb(118, 52, 185)' , marginRight:'10px'}} >{props.anios}</span>  años</div>
            <div><span style={{color:'rgb(118, 52, 185)', marginRight:'10px'}}>{props.meses}</span>  meses</div>
            <div><span style={{color:'rgb(118, 52, 185)', marginRight:'10px'}}>{props.dias}</span>  dias</div>
        </div>
    )

}



