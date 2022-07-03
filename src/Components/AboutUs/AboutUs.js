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

import CFS_LOGO_BACKGROUND from "../../Resources/png/HomePageIcon.jpg";
import CFS_LOGO_BACKGROUND_MOBILE from "../../Resources/png/mobileBackground.jpg";
import CFS_LOGO_TRANSPARENT from "../../Resources/svg/CFS_LOGO_TRANSPARENT.svg";

const styles = {
  bounce: {
    animation: "x 10s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
  flipInX: {
    animation: "20 4s",
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
                  ? CFS_LOGO_BACKGROUND_MOBILE
                  : CFS_LOGO_BACKGROUND
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
              <div style={styles.flipInX} className='aboutUsTextSection'>
                <h2 className='aboutUsTextContent'>
                  Having relocated from Lebanon to the UK in 2020, I have
                  brought with me a renewed vision for a future in which
                  Chocolate Fashion Signature can reclaim its former glory,
                  going above and beyond anything delivered before in this
                  country. I have spent over a decade learning about and
                  developing this totally unique market.
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
