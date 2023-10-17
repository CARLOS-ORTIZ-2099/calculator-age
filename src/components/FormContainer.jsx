/* eslint-disable react/prop-types */


export const FormContainer = ({submit, referencia}) => {
  return (
    <form onSubmit={submit} ref={referencia}>
            <span className="">

                <div style={{marginBottom:'3px'}}>DAY</div> 
                <input className="input-date" id="0" type="number"  placeholder="DD" name='dia' />
                <div className="message" ></div> 

            </span>   

            <span className="">

                <div style={{marginBottom:'3px'}}>MOUNTH</div> 
                <input className="input-date" id="1" type="number"  placeholder="MM" name='mes'  />
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
  )
}
