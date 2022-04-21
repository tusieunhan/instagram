import React from 'react'
import { useSelector } from 'react-redux'
import DialogNotiPost from './DialogNotiPost'
import DialogNotiFollow from './DialogNotiFollow'

const DialogNoti = () => {
const tabFollow = useSelector((state) => state.box.tabFollow)
  return (
    <div className="dialog-noti">
      {tabFollow  ?  <DialogNotiFollow/> : < DialogNotiPost/> }
    </div>
  )
}

export default DialogNoti