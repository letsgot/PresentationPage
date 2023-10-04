import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import apple from './images/appleStore.png'
import google from './images/GooglePlaystore.png'
import person from './images/presentations/PERSON.jpg'
import botez from './images/presentations/BOTEZ.jpg'
import daca from './images/presentations/DACA_NU_MERGE_ASTA_CA_II_CAM_MICA_BAG-O_PE_AIA.jpg'
import fashion from './images/presentations/FASHION.jpg'
import food from './images/presentations/FOOD.jpg'
import portret from './images/presentations/PORTRET.jpg'
import produs from './images/presentations/PRODUS.jpg'
import studio from './images/presentations/STUDIO.jpg'
import wedding from './images/presentations/WEDDING.jpg'
import newoborn from './images/presentations/NEWOBORN.jpg'

import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';

function App() {

  let check = 0;

  let handleClick = (e) => {
    toast("Coming soon");
  }

  return (
    <div className='page'>

      <header className='head'>
        <img src={apple} onClick={handleClick}></img>
        <img src={google} onClick={handleClick}></img>
      </header>

      <div className='main'>
        <div className='input container'>
          Input Area for something exists Here
        </div>


        <form>
          <label>Email :-
            <input placeholder='Enter your email' type="text" />
          </label>
          <button>Subscribe</button>
        </form>
        <div className='left-main-container'>
          <div className='container'>
            <img src={person}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={botez}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>
        <div className='left-main-container'>
          <div className='container'>
            <img src={daca}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={fashion}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='left-main-container'>
          <div className='container'>
            <img src={food}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={portret}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='left-main-container'>
          <div className='container'>
            <img src={newoborn}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={produs}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='left-main-container'>
          <div className='container'>
            <img src={studio}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={wedding}></img>
            <div className='desc'>Kindly read my answer again. I'm advising to place the images in public folder, as it you won't have to import the images one by one that way. Here's a working CodeSandBox that I made for your use case. Kindly note that you also have to append the extension of the image, which I do not see in your comment. Check out the data.js file to get a clarity of what I mean by that.</div>
          </div>
        </div>
      </div>

      <footer className='footer'>
        <TelegramIcon className='telegram icons'></TelegramIcon>
        <LinkedInIcon className='linkedin icons'></LinkedInIcon>
        <FacebookIcon className='facebook icons'></FacebookIcon>
        <InstagramIcon className='instagram icons'></InstagramIcon>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
