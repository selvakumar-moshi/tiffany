import React from 'react'
import Image from 'next/image'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="title-font font-medium text-gray-900 md:mb-0 ml-3 text-xl">TIFFINY &  <span className='co-text'> Co</span></p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5  icon-border"><SearchIcon /></div>
            <div className="mr-5  icon-border"><ShoppingCartIcon /></div>
            <div className="mr-5  icon-border"><FavoriteIcon /></div>
            <div className="mr-5  icon-border"><LocationOnIcon /></div>
            <div className="mr-5  icon-border"><AccountCircleIcon /></div>
          </nav>
        </div>
      </header>
  )
}

export default Header