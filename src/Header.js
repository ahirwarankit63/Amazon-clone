import React from 'react'
import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' />

      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        {/* <SearchIcon className="header__searchIcon"  /> */}
        
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="optionLineOne">
            Return
          </span>
          <span className="optionLineTwo">
            & Orders
          </span>
        </div>
        <div className="header__option">
          <span className="optionLineOne">
            Your
          </span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <div className="header__option">

        </div>
      </div>

    </div>
  );
}

export default Header