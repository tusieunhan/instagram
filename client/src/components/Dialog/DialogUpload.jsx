import React from 'react'

const DialogUpload = () => {
  return (
    <div className='dialog-upload' >
        <div className="dialog-upload-header border-bottom">
            <p>Create new post</p>
        </div>
        <div className="dialog-upload-body">
            <i class="fa-thin fa-icons"></i>
            <p>Drag photos and videos here</p>
            <input type="file" multiple />
        </div>
    </div>
  )
}

export default DialogUpload