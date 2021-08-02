import React from 'react'
import web from '../Images/Image2.jpg'
import Comman from './Comman'
//data send krvo hoi to kyare pn props lhvano aave nai jene data lidho 6e... 
//aama khali unique name,imgsrc,visit.. ma orignle data/je send krvo 6e te data khali lkhvano hoi
const About = () => {
    return (
        <>
        <Comman name='Welcome to About page'
                imgsrc={web}
                visit="./contact" 
                btnName="Contect Now" />        
        </>
    )
}

export default About
