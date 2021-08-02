import React from 'react'
import ServicesComman from './ServicesComman';
import Sdata from './Sdata';

const Services = () => {
    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-flud mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                
                {Sdata.map((val,index)=>{
                    return <ServicesComman
                    key = {index}
                    imgsource={val.imgsrc}
                    titlex={val.title}
                    />
                })}
                                                                            {/*  To avoid this type problem we simpley call map method
                                                                                    <ServicesComman />
                                                                                    <ServicesComman />
                                                                                    <ServicesComman />
                                                                                    <ServicesComman />
                                                                                    <ServicesComman />
                                                                                    <ServicesComman /> */}
                </div>
            </div>
            
        </div>
    </div>
        </>
    )
}

export default Services
