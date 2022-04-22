import React from 'react'
import {setTabFollow} from '../../redux/boxSlice'
import { useDispatch } from 'react-redux'


const DialogAccountPrivate = () => {
  const dispatch = useDispatch()

  return (
    <div onClick={()=>dispatch(setTabFollow())} className="dialog-notipost-btn gap-10 flex border-bottom">
            <img src="https://reviewnao.com/wp-content/uploads/2021/11/hinh-anh-ma-cute-34.jpg" alt="" />
            <div className="dialog-notipost-item-text">
                <p className="dialog-notipost-item-name">Follow Request</p>
                <p className="dialog-notipost-item-username">vantusieunhan</p>
            </div>
            <div className="dialog-notipost-item-btn flex gap-20">
                <i className="fa-solid fa-circle-small"></i>
                <i className="fa-light fa-angle-right"></i>
            </div>
    </div>
  )
}

export default DialogAccountPrivate