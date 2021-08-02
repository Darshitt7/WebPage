import React from 'react'
import { NavLink } from 'react-router-dom'


//data levo/recive 6e tethi props aama () define krvo pde=-- ne 2 componet na name(props.name,props.imgsrc) srkha hoi to bey no About and home vise data aapse
// and props bija 1ey ma lkhva no noo aave... aane data recive mean k aama levo 6e tethi props aama j lkhvama aave...
const Comman = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-flud nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}
                                        <strong className='brand-name'> DarshitTarpara </strong></h1>
                                    <h2 className='my-3'>
                                        We are the team of talented devlopers making websites
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>
                                            {props.btnName}
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="Image" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-100 my-3 bg-light text-center'>
                <p> © 2021 DarshitTarpara. All Rights reserved | Terms and Conditions</p>
            </div>
        </>
    )
}

export default Comman;
