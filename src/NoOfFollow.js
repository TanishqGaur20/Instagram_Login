

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoOfFollow = (props) => {
    const [input, setinput] = useState();
    const [Loader, setLoader] = useState(false);
    useEffect(() => {
        toast.success('Tap to get Free Followers', {
            autoClose: false,
        });
    }, []);

    const handleSendFollowers = () => {
        if (input < 51) {
            setLoader(true);
        }
    }

    return (
        <>
            <div className='Marquee'>
                <h4>Get Free Followers In Just One Click</h4>
            </div>
            <div className='Fullx'>
                <div className='halfx'>
                    <div className='ExtraHalf'>
                        <div style={{ textAlign: 'end', marginRight: '15px', height: '5px' }}>{props.name}</div>
                        <div className='Head2'>
                            <img src="https://www.firafollower.com/wp-content/uploads/2021/07/firafollower.png" alt="" />
                            <h1>Enter No. Of Followers </h1>
                        </div>
                        <div>
                            <hr />
                            <input type="number" value={input} onChange={(e) => { setinput(e.target.value) }} placeholder='Enter Followers Count' className='inputStyle' />
                            <select className='selectStyle'>
                                <option value="">Girl</option>
                                <option value="">Boy</option>
                            </select>
                        </div>
                        <h4 className='errorText' style={{ display: input > 50 ? 'block' : 'none' }}>Enter Less than 50 or 50</h4>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {Loader ? <div className='Spinner'></div> : null}
                            <button className='buttonStyle' onClick={() => { handleSendFollowers() }}>Send Followers</button>
                        </div>
                        <div className='GetFOllow'>
                            <h3>Get Followers Instantly</h3>
                            <h3 style={{ textAlign: 'end', margin: '0px' }}>Only 50 Limit For Free <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i></h3>
                        </div>
                    </div>
                </div>
                <div className='Toastclass'>
                    <ToastContainer position="bottom-right" hideProgressBar={true} closeButton={false} />
                </div>
            </div>
            <div className='footer'>
                <div className='footer1'>
                    Meta About Blog Jobs Help  API  Privacy <span className='FooterSpan'> Terms Locations Instagram Lite Threads Contact Uploading & Non-Users Meta Verified</span>
                </div>
                <div className='footer2'>English  © 2023 Instagram from Meta</div>
            </div>
        </>
    );
}

export default NoOfFollow;
