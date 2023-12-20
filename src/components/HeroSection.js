import Carousel from 'react-bootstrap/Carousel';
import play from "../assets/images/Play 02.png";
import mockup from "../assets/images/Mockup.png";
import getstd from "../assets/images/getstarted.png";
import { Link } from 'react-router-dom';
import lft from '../assets/images/leftarrow.png';
import rgt from '../assets/images/rightarrow.png';
import Container from "react-bootstrap/esm/Container";
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <h1 className='heading1'>Web3Makr Redefining</h1>
            <h1>How You Create</h1>

            <p>Unlock the blockchain potential to create</p>
            <p>Web3 Applications</p>

            <div className='playbtn'>
                <img src={play}></img>
            </div>

            <div className='mockup'>
                <img src={mockup}></img>
            </div>
        </>
    );
}

export default HeroSection;

