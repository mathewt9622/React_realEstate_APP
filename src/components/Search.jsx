import React, { useState } from 'react'
import Header from './Header'

const Search = () => {

    
    const [inputfield,changeinputfield]=useState(
        {
            "Property":""
            
    
        }
        )
        const inputHandler=(event)=>{
            changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        
        const readvalue=()=>{
            console.log(inputfield)
        }



  return (
    <div>
        <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Property</label>
                                <input type="text" className="form-control" name='Property' value={inputfield.Property} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
                                <button onClick={readvalue} className="btn btn-success">Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default Search