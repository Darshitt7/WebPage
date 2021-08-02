import React from 'react'
import web from '../Images/Image1.jpg'
import Comman from './Comman'
//data send krvo hoi to kyare pn props lhvano aave nai jene data lidho 6e... 
//aama khali unique name,imgsrc,visit.. ma orignle data/je send krvo 6e te data khali lkhvano hoi
const Home = () => {
    return (
        <>
            <Comman name='Grow Your Skills with' 
                    imgsrc={web}
                    visit='/services'
                    btnName='Get Strated'/>
        </>
    )
}

export default Home
