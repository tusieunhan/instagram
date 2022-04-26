import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unAllBox } from "../../redux/boxSlice";

const DialogSearch = () => {
  const dispatch = useDispatch();
  return (
    <div className="dialog-search triangle">
      <div className="dialog-search-body">
        <div className="dialog-search-list">
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  vannn_tu33 <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Lê Văn Tú</p>
              </div>
            </div>
          </Link>
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  tudeptrai <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Tú</p>
              </div>
            </div>
          </Link>
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  myduyen <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Mỹ Duyên</p>
              </div>
            </div>
          </Link>
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  putin. <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Vladimir Vladimirovich Putin</p>
              </div>
            </div>
          </Link>
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  trump_trump <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Donald Trump</p>
              </div>
            </div>
          </Link>
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  elon_musk <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Elon Musk</p>
              </div>
            </div>
          </Link>
          <Link to="/user" onClick={() => dispatch(unAllBox())}>
            <div className="dialog-search-item flex gap-10">
              <img
                src="https://giupban.com.vn/wp-content/uploads/hinh-nen-den-an-tuong-cho-dien-thoai-iphone-va-android-576x1024-1.jpg"
                alt=""
              />
              <div className="diaglog-search-item-info">
                <p>
                  vantusieunhan <i className="fa-solid fa-badge-check"></i>
                </p>
                <p>Lê Văn Tú</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DialogSearch;
