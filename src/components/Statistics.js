import Button from 'react-bootstrap/Button';
import rectangle51 from "../assets/images/Rectangle 51.png";
import frame from "../assets/images/Frame2.png";
import group150 from "../assets/images/Group 150.png";
import group151 from "../assets/images/Group 151.png";
import group152 from "../assets/images/Group 152.png";
import group153 from "../assets/images/Group 153.png";
import group154 from "../assets/images/Group 154.png";
import group155 from "../assets/images/Group 155.png";
import group156 from "../assets/images/Group 156.png";
import rectangle45 from "../assets/images/Rectangle 45.png";
import widget1 from "../assets/images/Widget.png";
import widget2 from "../assets/images/Widget 04 Copy 3.png";
import widget3 from "../assets/images/Widget2.png";
import widget4 from "../assets/images/Widget 04 Copy 4.png";
import monkey from "../assets/images/monkey.png";
import ciggar from "../assets/images/ciggar.png";
import cash from "../assets/images/cash.png";
import './Statistics.css'

export default function Statistics() {
    const buttonStyle = {
        backgroundColor: '#6F348E',
        borderColor: '#6F348E',
    };

    const containerStyle = {
        position: 'relative',
        display: 'inline-block', // Adjust display property as needed
    };

    const frameStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', // Adjust width as needed
        height: '100%', // Adjust height as needed
    };

    const containerStyle2 = {
        display: 'flex',
        gap: '50px', // Adjust the gap as needed
    };

    const containerStyle3 = {
        position: 'relative',
        display: 'inline-block',
    };

    const widgetStyle = {
        position: 'absolute',
        zIndex: 1,
    };

    const monkeyStyle = {
        ...widgetStyle,
        top: '170px',
        left: '80px',
    };

    const cigarStyle = {
        ...widgetStyle,
        top: '120px',
        left: '430px',
    };

    const cashStyle = {
        ...widgetStyle,
        top: '510px',
        left: '430px',
        zIndex: 2,
    };

    return (
        <>
            <div style={containerStyle2} className='images'>
                <img src={group150} alt="Group 150"></img>
                <img src={group151} alt="Group 151"></img>
                <img src={group152} alt="Group 152"></img>
                <img src={group153} alt="Group 153"></img>
                <img src={group154} alt="Group 154"></img>
                <img src={group155} alt="Group 155"></img>
                <img src={group156} alt="Group 156"></img>
            </div>

            <div className='bttn'>
                <div className="row">
                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <h1 className='hd'>Create your own Web3 Masterpiece</h1>
                        <p className='para'>Most entrepreneurs want to create their own web3 sites, unfortunately, they dont know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
                        <Button variant="primary" style={buttonStyle}>
                            Start building
                        </Button>
                    </div>

                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <div style={containerStyle}>
                            <img src={rectangle51} alt="Rectangle 51"></img>
                            <img className="frame" src={frame} style={frameStyle} alt="Frame"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col col-lg-4 col-md-4 col-sm-12">
                    <div style={containerStyle3}>
                        <img src={rectangle45} alt="Rectangle 45"></img>
                        <img src={widget1} style={{ ...widgetStyle, top: '100px', left: '50px' }} alt="Widget 1"></img>
                        <img src={widget2} style={{ ...widgetStyle, top: '10px', left: '400px' }} alt="Widget 2"></img>
                        <img src={monkey} style={monkeyStyle} alt="Monkey"></img>
                        <img src={ciggar} style={cigarStyle} alt="Cigar"></img>
                        <img src={cash} style={cashStyle} alt="Cash"></img>
                        <img src={widget3} style={{ ...widgetStyle, top: '500px', left: '50px' }} alt="Widget 3"></img>
                        <img src={widget4} style={{ ...widgetStyle, top: '400px', left: '400px' }} alt="Widget 4"></img>
                    </div>
                </div>

                <div className="col col-lg-4 col-md-4 col-sm-12">
                    <div>
                        <h1 className='hd2'>Can be changed to customizable ready-made web3 dapps templates.</h1>
                        <ol>
                            <li>NFT(ER721)</li>
                            <li>DEFI</li>
                            <li>Smart Contracts</li>
                            <li>Game Fi</li>
                            <li>Metaverse</li>
                        </ol>
                        <Button variant="primary" style={buttonStyle}>
                            Start building
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
}