import { Fragment } from 'react'
import { ReactDOM } from 'react'
import classes from './Modal.module.css'
const Backdrop = (props) => {
  return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}

      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </Fragment>
  )
}
export default Modal
//모달이 렌더링할수있도록 해야함으로 pubilc -> index 에서 div추가
// 어이다가 불러올건지 추가함
