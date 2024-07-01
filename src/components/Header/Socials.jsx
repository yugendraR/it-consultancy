import { Component } from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";

class Socials extends Component{
    render(){
        return(
            <div className="socials">
                <a href="https://instagram.com" target="_blank">
                    <CgInstagram />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <AiFillTwitterSquare />
                </a>
                <a href="https://facebook.com" target="_blank">
                    <AiFillFacebook />
                </a>
            </div>
        )
    }
}

export default Socials;