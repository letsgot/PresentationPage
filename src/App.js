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
import LeftArrow from '@mui/icons-material/KeyboardArrowLeft';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';
// import { Carousel } from "react-responsive-carousel";
import Carousel from 'react-bootstrap/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  let [currVal, setCurrVal] = useState(1);
  let [selectedLang, setSelectedLang] = useState("English");

  let descriptionInEnglish = `We are launching an essential project for all those looking for a photographer.
  A platform where you will find the ideal photographer according to the category and your needs.
  For example, if you are a company specialized in car sales, here you will find several photographers specialized in cars.
  If you want a simple portrait session, you will find photographers at favorable prices who specialize in portrait photography.
  Weddings, Baptisms, Product photography and many other categories await you in this application.
  Available on Appstore and Googleplay.`

  let descriptionInRomanian = `Punem in derulare un proiectcesential pentru toti cei care cauta fotograf.
  O platforma unde veti gasi fotograful ideal in functie de categorie si necesitatile dumneavoastra.
  De exemplu daca sunteti companie specializata in vanzare auto aici veti gasi mai multi fotografi specializati pe auto.
  Daca doriti o simpla sedinta de portret, veti gasi fotografi la preturi avantajoase specializati in fotografia de portret.
  Nunti, Botezuri, Fotografia de produs si multe alte categorii va asteapta in aceasta aplicatie.
  Disponibila pe Appstore si Googleplay.`

  let handleClick = (e) => {
    toast("Coming soon");
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let handleOnchange = (e) => {
    //  console.log(e.target.value);
    setSelectedLang(e.target.value + "");
  }


  let handleLeftButton = () => {
    setCurrVal(currVal - 1);
  }

  let handleRightButton = () => {
    setCurrVal(currVal + 1);
  }

  return (
    <div className='page'>

      <header className='head'>
        <img className='floating' src={apple} onClick={handleClick}></img>
        <div className='hspace'></div>
        <img className='floating' src={google} onClick={handleClick}></img>
        <div className='hspace'></div>
        <select name="languages" onChange={(e) => handleOnchange(e)}>
          <option value={"English"}>English</option>
          <option value={"Romanian"} >Romanian</option>
        </select>
      </header>

      <div className='main'>
        <div className='mid-main-container'>
          <div className='input container'>
            <div className='title'>Title Comes here</div>
            <div className='inputArea'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
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
            color: 'white'
          }}
        >
          <form>
            <label>Email :-
              <input placeholder='Enter your email' type="text" />
            </label>
            <button>Subscribe</button>
          </form>
        </Modal>


        <div className='category'>
          { currVal==1?<div className='container'>
            <img src={newoborn}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}
          {currVal==2?<div className='container'>
            <img src={food}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}
          {currVal==3?<div className='container'>
            <img src={fashion}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}
          {currVal==4?<div className='container'>
            <img src={botez}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}

          {currVal==5?<div className='container'>
            <img src={portret}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}
          {currVal==6?<div className='container'>
            <img src={wedding}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}
          {currVal==7?<div className='container'>
            <img src={produs}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}
          {currVal==8?<div className='container'>
            <img src={studio}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}

          {currVal==9?<div className='container'>
            <img className='person' src={person}></img>
            <div className='desc'>{selectedLang === "English" ? descriptionInEnglish : descriptionInRomanian}</div>
          </div>:null}

          <div className='bottomContainer'>
            {currVal == 1 ? null :
              <>
                <div className='left leftside' onClick={handleLeftButton}>
                  <LeftArrow className='btn'></LeftArrow>
                </div>
                <div className='rspace' ></div>
                <div className='prevNumber leftside number' onClick={handleLeftButton}>{
                  currVal - 1
                }</div>
              </>
            }
            <div className='rspace'></div>
            <div className='currNumber number'>{
              currVal
            }</div>
            <div className='rspace'></div>
            {currVal == 9 ? null :
            <>
            <div className='nextNumber number' onClick={handleRightButton}>{
              currVal + 1
            }</div>
            <div className='rspace'></div>
            <div className='left' onClick={handleRightButton}>
              <RightArrow className='btn'></RightArrow>
            </div>
            </>
}
          </div>

        </div>







        {/* 

        */}










        {/* <div className='littleSpace left-main-container'>
          <div className='container'>
            <img src={person}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={botez}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>
        <div className='left-main-container'>
          <div className='container'>
            <img src={daca}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={fashion}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='left-main-container'>
          <div className='container'>
            <img src={food}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={portret}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='left-main-container'>
          <div className='container'>
            <img src={newoborn}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={produs}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='left-main-container'>
          <div className='container'>
            <img src={studio}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div>

        <div className='right-main-container'>
          <div className='container'>
            <img src={wedding}></img>
            <div className='desc'>{selectedLang==="English"?descriptionInEnglish:descriptionInRomanian}</div>
          </div>
        </div> */}
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
