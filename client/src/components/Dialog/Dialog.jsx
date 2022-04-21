import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unAllBox } from '../../redux/boxSlice'
import "../../style/dialog.scss"

const Dialog = ({overlay,times}) => {
const dispatch = useDispatch()
const indexActive = useSelector((state) => state.box.indexActive);

const btnLink = document.querySelectorAll(".header-center-group .link i");

const handleClickDialog=() => {
    dispatch(unAllBox())
    btnLink[indexActive].classList.add('fa-solid')
}
  return (
    <div onClick={handleClickDialog} className={`dialog flex ${overlay ? 'overlay' : ''}`}>
        {times && <i className="dialog-btn_times fa-solid fa-xmark-large"></i>}
    </div>
  )
}

export default Dialog