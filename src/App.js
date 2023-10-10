import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import usa from './images/united-states.png'
import overlayBackground from './images/overlayBackground.jpg'
import frame from './images/frame.jpg'
import romania from './images/romania.png'
import apple from './images/appleStore.png'
import fotostali from './images/fotostali.jpeg'
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
import LeftArrow from '@mui/icons-material/KeyboardArrowLeft';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';
// import { Carousel } from "react-responsive-carousel";
import Carousel from 'react-bootstrap/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Videoplayer from './components/Videoplayer';

const App = () => {

  const [open, setOpen] = useState(false);
  let [currVal, setCurrVal] = useState(1);
  let [selectedLang, setSelectedLang] = useState("English");

  const [inputText, setInputText] = useState(`We are launching an essential project for all those looking for a photographer.
  A platform where you will find the ideal photographer according to the category and your needs.
  For example, if you are a company specialized in car sales, here you will find several photographers specialized in cars.
  If you want a simple portrait session, you will find photographers at favorable prices who specialize in portrait photography.
  Weddings, Baptisms, Product photography and many other categories await you in this application.
  Available on Appstore and Googleplay.`);
  const [translation, setTranslation] = useState('');


  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');


  let source = [
    // add new item in category 
    // import a image from images folder
    // add at particular index of array source
    {

    },
    {
      "id": 1,
      "src": newoborn,
      "category": "New born"
    },
    {
      "id": 2,
      "src": botez,
      "category": "Botez"
    },
    {
      "id": 3,
      "src": fashion,
      "category": "Fashion"
    },
    {
      "id": 4,
      "src": food,
      "category": "Food"
    },
    {
      "id": 5,
      "src": portret,
      "category": "Portret"
    },
    {
      "id": 6,
      "src": produs,
      "category": "Produs"
    },
    {
      "id": 7,
      "src": wedding,
      "category": "Wedding"
    },
    {
      "id": 8,
      "src": studio,
      "category": "Studio"
    },
    {
      "id": 9,
      "src": person,
      "category": "Person"
    },

  ]














  useEffect(() => {
    const translateText = async () => {
      const sourceLang = 'en'; // Source language (English)
      const targetLang = 'ro'; // Target language (Romanian)

      try {
        // Split the input text into chunks of 500 characters
        const chunks = inputText.match(/.{1,500}/g);

        if (!chunks) {
          throw new Error('Input text is empty or too short.');
        }

        const translations = [];

        for (const chunk of chunks) {
          const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
              chunk
            )}&langpair=${sourceLang}|${targetLang}`,
            {
              method: 'GET',
            }
          );

          if (!response.ok) {
            throw new Error('Translation failed');
          }

          const data = await response.json();
          translations.push(data.responseData.translatedText);
        }

        // Join the translated chunks back together
        setTranslation(translations.join(''));
      } catch (error) {
        console.error(error);
        setTranslation('Translation failed');
      }
    };

    translateText();

  })

  


  let handleClick = (e) => {
    toast("Coming soon");
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const toggleLanguage = (e) => {
    if (e.target.value == "English") {
      i18n.changeLanguage('en');
      setCurrentLanguage('en');
    }
    else {
      i18n.changeLanguage('ro');
      setCurrentLanguage('ro');
    }

  };



  let handleLeftButton = () => {
    if (currVal == 1) {
      setCurrVal(source.length - 1);
    }
    else {
      setCurrVal(currVal - 1);
    }
  }

  let handleRightButton = () => {
    if (currVal == source.length - 1) {
      setCurrVal(1);
    }
    else {
      setCurrVal(currVal + 1);
    }
  }
 
  let showToolTip = ()=>{
    console.log(1);
    setTimeout(() => {
      document.getElementsByClassName('arrowSlidingR').click();      
 }, 3000);
  }

  return (
    <div className='page'>

      <header className='head'>

        <img className='floating' src={apple} onClick={handleClick}></img>
        {/* <div className='hspace'></div> */}
        <img className='fotostali-img' src={fotostali} onClick={handleClick}></img>

        <img className='floating' src={google} onClick={handleClick}></img>

      </header>

      <div className='eng-rom-div'>
        {selectedLang === "English" ? <img className='country' src={usa}></img> : <img className='country' src={romania}></img>}
        <select name="languages" className='headSelect' onChange={(e) => toggleLanguage(e)}>
          <option value={"English"}>English</option>
          <option value={"Romanian"} >Romanian</option>
        </select>
      </div>

      <div className='main'>
        <div className='mid-main-container'>
          <div className='input container'>
            <div className='title'>{t('welcome')}</div>
            {/* {console.log(translation)} */}
            <div className='inputArea'>{t('aim')}</div>
          </div>
        </div>
        
        <div className='subBox'>
        <div className='stext'>
          {t('subscribeText')}
        </div>

        <div className='emailSpace'>
          <button className='subscribe' type="button"
            onClick={handleOpen}>
            {t('subscribe')}
          </button>
        </div>
        </div>

        <Modal
          onClose={handleClose}
          open={open}
          style={{
            position: 'fixed',
            // border: '2px solid #000',
            backgroundColor: '#435B66',
            boxShadow: '2px solid black',
            // height: 300,
            // width: 500,
            margin: 'auto',
            color: 'white',
          }}
          className='overlap'
        >
          <div className='innerText'>
            <div className='overlapText'>
              {t('subscribeText')}
            </div>
            <div className='line'></div>
            <form className='formForEmail'>
              <label>Email :-
                <input placeholder='Enter your email' className='formForEmailInput' type="text" />
              </label>
              <button className='formButton'>{t('subscribe')}</button>
            </form>
          </div>

        </Modal>

        <Videoplayer className='video'></Videoplayer>
        
        <div className='category'>
          {
            <div className='container'>
              <img src={frame} className='outerImage'></img>
              <img src={source[currVal]["src"]} className='innerImage'></img>
            </div>
          }

          <div className='bottomContainer'>

            <div className='left leftside' onClick={handleLeftButton}>
              <div className="arrowAnim">
                <div class="arrowSliding">
                  <div class="arrow"></div>
                </div>
                <div class="arrowSliding delay1">
                  <div class="arrow"></div>
                </div>
                <div class="arrowSliding delay2">
                  <div class="arrow"></div>
                </div>
                <div class="arrowSliding delay3">
                  <div class="arrow"></div>
                </div>
              </div>
            </div>

            <div className='rspace'></div>
            <div className='currNumber number'>{
              source[currVal]["category"]
            }</div>
            <div className='rspace'></div>
            {
              <div className='left' onClick={handleRightButton}>
                {/* <RightArrow onClick={handleClick}></RightArrow> */}
                <div id="arrowAnim">
                  <div class="arrowSlidingR">
                    <div class="arrowr"></div>
                  </div>
                  <div class="arrowSlidingR delay1">
                    <div class="arrowr"></div>
                  </div>
                  <div class="arrowSlidingR delay2">
                    <div class="arrowr"></div>
                  </div>
                  <div class="arrowSlidingR delay3">
                    <div class="arrowr"></div>
                  </div>
                </div>
              </div>

            }
          </div>

        </div>
      </div>

      <div className='spaceBtwFooterAndMain'></div>



      <footer className='footer'>
        <TelegramIcon className='telegram icons'></TelegramIcon>
        <div className='fspace'></div>
        <LinkedInIcon className='linkedin icons'></LinkedInIcon>
        <div className='fspace'></div>
        <FacebookIcon className='facebook icons'></FacebookIcon>
        <div className='fspace'></div>
        <InstagramIcon className='instagram icons'></InstagramIcon>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
