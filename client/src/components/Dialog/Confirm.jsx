import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unConfirm } from '../../redux/boxSlice'
import "../../style/confirm.scss"
import DialogConfirm from './DialogConfirm'

const Confirm = ({overlay}) => {
const dispatch = useDispatch();
const box = useSelector((state) => state.box);
const handleClickDialog=() => {
    dispatch(unConfirm())
}
  return (
  <>
    <div onClick={handleClickDialog} className={`confirm-body flex ${overlay ? 'overlay' : ''}`}>
    </div>
      {box.boxConfirm && <DialogConfirm />}
  </>

  )
}

export default Confirm