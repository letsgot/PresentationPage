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

import Modal from '@material-ui/core/Modal';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  let handleClick = (e) => {
    toast("Coming soon");
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='page'>

      <header className='head'>
        <img className='floating' src={apple} onClick={handleClick}></img>
        <img className='floating' src={google} onClick={handleClick}></img>
      </header>

      <div className='main'>
        <div className='mid-main-container'>
          <div className='input container'>
            <div className='title'>Title Comes here</div>
            <div className='inputArea'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
          </div>
        </div>


        <div className='emailSpace'>
            <button className='subscribe' type="button"
              onClick={handleOpen}>
              Click Me to Subscribe
            </button>
        </div>

        <Modal
          onClose={handleClose}
          open={open}
          style={{
            position: 'absolute',
            // border: '2px solid #000',
            backgroundColor: '#435B66',
            boxShadow: '2px solid black',
            height: 300,
            width: 500,
            margin: 'auto',
            color : 'white'
          }}
        >
          <form>
            <label>Email :-
              <input placeholder='Enter your email' type="text" />
            </label>
            <button>Subscribe</button>
          </form>
        </Modal>

        <div className='littleSpace left-main-container'>
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

      <div className='spaceBtwFooterAndMain'></div>

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
