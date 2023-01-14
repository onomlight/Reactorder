import React, { Fragment } from 'react'
import backImg from '../../assets/backimg.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>리액트메뉴판</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img
          // src="https://test.com"
          src={backImg}
          alt=" A table full of delicious food!"
        />
      </div>
    </Fragment>
  )
}
export default Header
