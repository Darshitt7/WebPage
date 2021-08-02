import React,{ useState } from 'react'

const Contact = () => {
    const [input, setinput] = useState({
        FullName:'',
        Phone:'',
        Email:'',
        Message:'',
    })
    const InputEvent = (event) => {
        const {name, value} = event.target;
        setinput( (prevalues) =>{
            return {
                ...prevalues,
                [name] : value,
            }
        })
    }


    const formSubmit = (e) => {
    e.preventDefault();
    
    alert(`My Name is ${input.FullName}. My Phone Number is ${input.Phone}. My Email is ${input.Email}. My Message is ${input.Message}`);
         
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">First Name</label>
                                <input type="text" class="form-control"
                                name="FullName" value={input.FullName} onChange={InputEvent} placeholder="Enter your name" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="number" class="form-control"
                                name="Phone" value={input.Phone} onChange={InputEvent} placeholder="mobile number" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control"
                                name="Email" value={input.Email} onChange={InputEvent} placeholder="name@example.com" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="floatingTextarea2">Message</label>
                                <textarea class="form-control" 
                                name="Message" value={input.Message} onChange={InputEvent} placeholder="Leave a message here" id="floatingTextarea2" rows="3"></textarea>
                            </div>

                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
