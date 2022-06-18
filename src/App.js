import "./App.css";

import CFS_LOGO_TRANSPARENT from "./Resources/svg/CFS_LOGO_TRANSPARENT.svg";

function App() {
  return (
    <div className='App'>
      <a
        className='mainAnchor'
        href='https://www.facebook.com/chocolatefashionsignature'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={CFS_LOGO_TRANSPARENT}
          alt='Chocolate Fashion Logo, Transparent'
          className='CFS_LOGO'
        ></img>

        <h2 className='comingSoon'>Coming Soon...</h2>
      </a>
    </div>
  );
}

export default App;
