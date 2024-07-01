import { Component } from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <a href="mailto:lora=mail@gmail.com">
                    <AiFillMail />
                    <span>lormail@gmail.com</span>
                </a>
                <a href="tel: +916374120880">
                    <AiFillPhone />
                    <span>+91 6374120880</span>
                </a>
            </div>
        )
    }
}

export default Contact;