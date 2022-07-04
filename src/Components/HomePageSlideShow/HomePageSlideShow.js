import "./HomePageSlideShow.css";
import React, { useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomePageSlideShowMedia = [
  "https://storage.googleapis.com/chocolatefashionsignature.com/Communion%2F1stCommunion%2FLynn%2FIMG_3300.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Weddings%2FAll_Weddings%2FClassic%20Bar%20set-up%20Wedding%2FIMG_1813.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Weddings%2FAll_Weddings%2FWhite%20%26%20classy%2FIMG_2054.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Weddings%2FAll_Weddings%2FJohnny%20Walker%20Prime%20Elio%2F20160612_021407.jpg",
  "https://storage.googleapis.com/chocolatefashionsignature.com/New_Born%2FBaby%20Boy%2FMajestic%20white%20Bird%2FIMG_2404.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/New_Born%2FBaby%20Boy%2FHot_air%20balloon%2FIMG_4660.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/New_Born%2FBaby%20Boy%2FLuxurious%20Baby%20boy%20tray%2FIMG_4241.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/New_Born%2FBaby%20Girl%2FBallerina%2F20150622_171926.jpg",
  "https://storage.googleapis.com/chocolatefashionsignature.com/New_Born%2FBaby%20Girl%2FOrchid%2FIMG_4967.JPG",
];

const HomePageSlideShow = ({ windowDimension }) => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div className='mainPageSlideshow'>
      <div className='picturesSliderSection'>
        {/* <Slide autoplay={autoplay}> */}
        <Slide autoplay={true}>
          {HomePageSlideShowMedia.map((image, index) => (
            <div key={image}>
              <img
                src={image}
                alt='sample chocolate display by Chocolate Fashion Signature'
                className={
                  windowDimension.winHeight < 600
                    ? "mainPageSlidShowImageRotated"
                    : "mainPageSlidShowImage"
                }
              />
              {/* Slide {index + 1} */}
            </div>
          ))}
        </Slide>
      </div>

      {/* <div className='autoplay-buttons'>
        Autplay is {autoplay ? "on" : "off"}
      </div>
      <div className='autoplay-buttons'>
        <button type='button' onClick={() => setAutoplay(false)}>
          Pause
        </button>
        <button type='button' onClick={() => setAutoplay(true)}>
          Play
        </button>
      </div> */}
    </div>
  );
};

export default HomePageSlideShow;
