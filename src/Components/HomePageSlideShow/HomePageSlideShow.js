import "./HomePageSlideShow.css";
import React, { useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomePageSlideShowMedia = [
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_1063.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_1268.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2223.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2232.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2416.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2419.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2597.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2725.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_3910.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4659.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4661.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4989.JPG",
  "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_5027.JPG",
];

const HomePageSlideShow = () => {
  const [autoplay, setAutoplay] = useState(true);

  const style = {
    textAlign: "center",
    // background: "teal",
    fontSize: "30px",
  };

  return (
    <div className='mainPageSlideshow'>
      <div className="picturesSliderSection">
        {/* <Slide autoplay={autoplay}> */}
          <Slide autoplay={true}>
          {HomePageSlideShowMedia.map((image, index) => (
            <div style={style} key={image}>
              <img
                src={image}
                alt='sample chocolate display by Chocolate Fashion Signature'
                className='mainPageSlidShowImage'
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
