import { AboutUsScroller } from "./AboutUs.styles";
import { bounce, flipInX } from "react-animations";
import Radium, { StyleRoot } from "radium";

import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  Move,
} from "react-scroll-motion";

// import CFS_LOGO_BACKGROUND from "../../Resources/png/HomePageIcon.jpg";
// import CFS_LOGO_BACKGROUND_MOBILE from "../../Resources/png/mobileBackground.jpg";
import CFS_LOGO_TRANSPARENT from "../../Resources/svg/CFS_LOGO_TRANSPARENT.svg";
import HomePageSlideShow from "../HomePageSlideShow/HomePageSlideShow";

const styles = {
  bounce: {
    animation: "2 3s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
  flipInX: {
    animation: "1 5s",
    animationName: Radium.keyframes(flipInX, "flipInX"),
  },
};

const AboutUs = ({ windowDimension }) => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={FadeUp}>
          <AboutUsScroller>
            <img
              src={
                windowDimension.winWidth < 1300
                  ? "https://storage.googleapis.com/chocolatefashionsignature.com/Icons/mobileBackground.jpg"
                  : "https://storage.googleapis.com/chocolatefashionsignature.com/Icons/HomePageIcon.jpg"
              }
              alt='Chocolate Fashion Logo, Transparent'
              className={
                windowDimension.winWidth < 1300
                  ? "CFS_LOGO_BACKGROUND_MOBILE"
                  : "CFS_LOGO_BACKGROUND"
              }
            ></img>
            <img
              src={CFS_LOGO_TRANSPARENT}
              alt='Chocolate Fashion Logo, Transparent'
              className={
                windowDimension.winWidth < 1300 ? "CFS_LOGO_MOBILE" : "CFS_LOGO"
              }
            ></img>
          </AboutUsScroller>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade())}>
          <AboutUsScroller>
            <StyleRoot>
              <div style={styles.flipInX} className='aboutUsSection'>
                <h2 className='aboutUsTextContent'>
                  Having relocated from Lebanon to the UK in 2020, I have
                  brought with me a renewed vision for a future in which
                  Chocolate Fashion Signature can reclaim its former glory,
                  going above and beyond anything delivered before in this
                  country. I have spent over a decade learning about and
                  developing this totally unique market.
                </h2>
                <div className='homepageSlideShowDisplay'>
                  <HomePageSlideShow />
                </div>
                <h2 className='aboutUsTextContent'>
                  Love for chocolate is universal, and I recognised that it can
                  be used to create a magical moment for extraordinary clients
                  that will be remembered forever. After all, what's life if it
                  doesn't have those perfect times of beauty, taste, and
                  elegance. Chocolate Fashion Signature's purpose is to
                  re-invent the love for chocolates, wrapping them individually
                  with the finest, artistic, and tailored finishing to create
                  and deliver a great tasting experience.
                  <br />
                  &emsp;&emsp;Fady Al Sabbagh, Founder{" "}
                  <img
                    src={CFS_LOGO_TRANSPARENT}
                    alt='Chocolate Fashion Signature Logo'
                    className='introLogoImage'
                  />
                </h2>
              </div>
            </StyleRoot>
          </AboutUsScroller>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade())}>
          <AboutUsScroller>
            <StyleRoot>
              <div style={styles.flipInX} className='aboutUsSection'>
                <h2 className='aboutUsTextContent'>
                  Chocolate Fashion Signature loves planet earth and our mission
                  is to create a way for chocolate consumption to be
                  sustainable. The mainstream chocolate industry is contributing
                  to the increase in forests' shrinkage rate and ultimately
                  global warming. We, therefore, aim to make sure that our
                  process is green, guilt-free, and most importantly, one of a
                  kind, through collaboration with like-minded high-end
                  suppliers, from raw chocolate material to the finest of
                  finishings. Most of all, our creations are wrapped with love.
                </h2>
              </div>
            </StyleRoot>
          </AboutUsScroller>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default AboutUs;
