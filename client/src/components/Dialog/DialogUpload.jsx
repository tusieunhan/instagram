import React, { useState } from "react";

const DialogUpload = () => {
  const [avatar, setAvatar] = useState();
  const [currentAvatar, setCurrentAvatar] = useState();
  const [next, setNext] = useState(false);
  const [index, setIndex] = useState(1)
  const changeInputFile = (file) => {
    let url = file.target.files;
    if(url.length >= 1){
      let arr = []
      for (let i = 0; i < url.length; i++) {
      let avt = URL.createObjectURL(url[i]);
        arr.push(avt)
      setAvatar(arr)
      setCurrentAvatar(arr[index])
      }
    }else{
      let avt = URL.createObjectURL(url[0]);
      setAvatar(avt);
    }
  };
  
  const nextAvt =()=>{
    if(index === avatar.length - 1)  {
      document.querySelector('.btn-next').classList.add('d-none')
      return
    } else{
      document.querySelector('.btn-prev').classList.remove('d-none')
    }
    setIndex(i => i + 1)
    console.log(index)
  setCurrentAvatar(avatar[index])
  }
  const prevAvt =()=>{
    if(index === 0) {
      document.querySelector('.btn-prev').classList.add('d-none')
      return
    } else{
      document.querySelector('.btn-next').classList.remove('d-none')
    }
    setIndex(i => i - 1)
    console.log(index)

  setCurrentAvatar(avatar[index])
  }
  const handleClickInputFile = () => {
    let inputClick = document.querySelector(".uploadfile");
    inputClick.click();
  };
  return (
    <>
      {!next ? (
        <div className="dialog-upload">
          <div className="dialog-upload-header border-bottom flex-between">
            <p onClick={() => setAvatar("")}>
              {avatar ? <i className="fa-light fa-arrow-left"></i> : " "}
            </p>
            <p className="colortext">Create new post</p>
            <p onClick={() => setNext(true)} className="colorlink">
              {avatar ? "Next" : " "}
            </p>
          </div>
          {avatar ? (
           <>
            <div onClick={prevAvt}  className=" btn-prev">
            <i className="fa-regular fa-chevron-left"></i>
            </div>
            <img className="dialog-upload-img imgPreview" src={currentAvatar} />
            <div onClick={nextAvt} className="btn-next">
            <i className="fa-regular fa-chevron-right"></i>
            </div>
           </>

          ) : (
            <div className="dialog-upload-body ">
              <i className="fa-thin fa-icons"></i>
              <p>Drag photos and videos here</p>
              <div className="btn-input" onClick={handleClickInputFile}>
                <p>Select from computer</p>
              </div>
              <input
                type="file"
                multiple
                name="uploadfile"
                className="uploadfile"
                onChange={changeInputFile}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="dialog-upload-edit ">
          <div className="dialog-upload-header border-bottom flex-between">
            <p onClick={() => setNext(false)}>
              
              {avatar ? <i className="fa-light fa-arrow-left"></i> : " "}
            </p>
            <p className="colortext">Create new post</p>
            <p onClick={() => console.log("aaa")} className="colorlink">
              {avatar ? "Next" : " "}
            </p>
          </div>
          <div className="dialog-upload-edit-body flex">
            <div className="imgPreview">
              <div onClick={prevAvt}  className=" btn-prev">
              <i className="fa-regular fa-chevron-left"></i>
              </div>
              <img className="dialog-upload-edit-img" src={currentAvatar} />
              <div onClick={nextAvt}  className=" btn-next">
              <i className="fa-regular fa-chevron-right"></i>
              </div>
            </div>
            <div className="dialog-upload-edit-newpost">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              numquam suscipit illo impedit nobis maxime harum quam alias culpa
              at consectetur nostrum modi expedita praesentium voluptatibus ea
              placeat. Eos, a.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogUpload;
