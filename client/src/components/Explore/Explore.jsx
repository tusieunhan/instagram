import React, { useRef, useState } from "react";
import "../../style/explore.scss";

const Explore = () => {
  const imgRef = useRef();
  const arr = [
    {
      id: "111",
      photo:
        "https://i.pinimg.com/474x/de/6d/b2/de6db2bcf1bb8566a284065a0618bb21.jpg",
    },
    {
      id: "112",
      photo:
        "https://i.pinimg.com/474x/a4/41/aa/a441aa7a004c6a36151e6f2853827a54.jpg",
    },
    {
      id: "113",
      photo:
        "https://i.pinimg.com/474x/57/f9/a4/57f9a46eebbfbb7b652d1194f474f9cf.jpg",
    },
    {
      id: "114",
      photo:
        "https://i.pinimg.com/474x/f3/a6/a9/f3a6a934b729f43219ffe9b00d8937a5.jpg",
    },
    {
      id: "115",
      photo:
        "https://i.pinimg.com/474x/0e/22/fe/0e22fe941212b9cc0a9d839e4c6af952.jpg",
    },
    {
      id: "111",
      photo:
        "https://i.pinimg.com/474x/eb/6c/e1/eb6ce1c9325f84e93c30552de2582fc0.jpg",
    },
    {
      id: "116",
      photo:
        "https://i.pinimg.com/474x/25/5d/2b/255d2bebd7918b53930ad1f8eabd0c99.jpg",
    },
    {
      id: "117",
      photo:
        "https://i.pinimg.com/474x/f4/9c/4e/f49c4e7be7acc714e62fb8ce173bc0f7.jpg",
    },
    {
      id: "118",
      photo:
        "https://i.pinimg.com/474x/2f/1b/ce/2f1bce3ae8ddb5de8755072f4eb35646.jpg",
    },
    {
      id: "119",
      photo:
        "https://i.pinimg.com/474x/39/f7/2c/39f72c33379e892c9dd424bf3adb7793.jpg",
    },
    {
      id: "120",
      photo:
        "https://i.pinimg.com/474x/80/f7/5d/80f75d19733f021d347cec3a95fe1b4c.jpg",
    },
    {
      id: "121",
      photo:
        "https://i.pinimg.com/474x/bf/1a/c5/bf1ac561e578ee55d94394c10517fcad.jpg",
    },
    {
      id: "111",
      photo:
        "https://i.pinimg.com/474x/de/6d/b2/de6db2bcf1bb8566a284065a0618bb21.jpg",
    },
    {
      id: "112",
      photo:
        "https://i.pinimg.com/474x/a4/41/aa/a441aa7a004c6a36151e6f2853827a54.jpg",
    },
    {
      id: "113",
      photo:
        "https://i.pinimg.com/474x/57/f9/a4/57f9a46eebbfbb7b652d1194f474f9cf.jpg",
    },
    {
      id: "114",
      photo:
        "https://i.pinimg.com/474x/f3/a6/a9/f3a6a934b729f43219ffe9b00d8937a5.jpg",
    },
    {
      id: "115",
      photo:
        "https://i.pinimg.com/474x/0e/22/fe/0e22fe941212b9cc0a9d839e4c6af952.jpg",
    },
    {
      id: "111",
      photo:
        "https://i.pinimg.com/474x/eb/6c/e1/eb6ce1c9325f84e93c30552de2582fc0.jpg",
    },
    {
      id: "116",
      photo:
        "https://i.pinimg.com/474x/25/5d/2b/255d2bebd7918b53930ad1f8eabd0c99.jpg",
    },
    {
      id: "117",
      photo:
        "https://i.pinimg.com/474x/f4/9c/4e/f49c4e7be7acc714e62fb8ce173bc0f7.jpg",
    },
    {
      id: "118",
      photo:
        "https://i.pinimg.com/474x/2f/1b/ce/2f1bce3ae8ddb5de8755072f4eb35646.jpg",
    },
    {
      id: "119",
      photo:
        "https://i.pinimg.com/474x/39/f7/2c/39f72c33379e892c9dd424bf3adb7793.jpg",
    },
    {
      id: "120",
      photo:
        "https://i.pinimg.com/474x/80/f7/5d/80f75d19733f021d347cec3a95fe1b4c.jpg",
    },
    {
      id: "121",
      photo:
        "https://i.pinimg.com/474x/bf/1a/c5/bf1ac561e578ee55d94394c10517fcad.jpg",
    },
    {
      id: "111",
      photo:
        "https://i.pinimg.com/474x/de/6d/b2/de6db2bcf1bb8566a284065a0618bb21.jpg",
    },
    {
      id: "112",
      photo:
        "https://i.pinimg.com/474x/a4/41/aa/a441aa7a004c6a36151e6f2853827a54.jpg",
    },
    // {
    //   id: "113",
    //   photo:
    //     "https://i.pinimg.com/474x/57/f9/a4/57f9a46eebbfbb7b652d1194f474f9cf.jpg",
    // },
    // {
    //   id: "114",
    //   photo:
    //     "https://i.pinimg.com/474x/f3/a6/a9/f3a6a934b729f43219ffe9b00d8937a5.jpg",
    // },
    // {
    //   id: "115",
    //   photo:
    //     "https://i.pinimg.com/474x/0e/22/fe/0e22fe941212b9cc0a9d839e4c6af952.jpg",
    // },
    // {
    //   id: "111",
    //   photo:
    //     "https://i.pinimg.com/474x/eb/6c/e1/eb6ce1c9325f84e93c30552de2582fc0.jpg",
    // },
    // {
    //   id: "116",
    //   photo:
    //     "https://i.pinimg.com/474x/25/5d/2b/255d2bebd7918b53930ad1f8eabd0c99.jpg",
    // },
    // {
    //   id: "117",
    //   photo:
    //     "https://i.pinimg.com/474x/f4/9c/4e/f49c4e7be7acc714e62fb8ce173bc0f7.jpg",
    // },
    // {
    //   id: "118",
    //   photo:
    //     "https://i.pinimg.com/474x/2f/1b/ce/2f1bce3ae8ddb5de8755072f4eb35646.jpg",
    // },
    // {
    //   id: "119",
    //   photo:
    //     "https://i.pinimg.com/474x/39/f7/2c/39f72c33379e892c9dd424bf3adb7793.jpg",
    // },
    // {
    //   id: "120",
    //   photo:
    //     "https://i.pinimg.com/474x/80/f7/5d/80f75d19733f021d347cec3a95fe1b4c.jpg",
    // },
    // {
    //   id: "121",
    //   photo:
    //     "https://i.pinimg.com/474x/bf/1a/c5/bf1ac561e578ee55d94394c10517fcad.jpg",
    // },
    // {
    //   id: "122",
    //   photo:
    //     "https://i.pinimg.com/474x/70/84/38/70843832d8bb7f2851b8e329df51fe39.jpg",
    // },
    // {
    //   id: "123",
    //   photo:
    //     "https://i.pinimg.com/474x/9a/89/6f/9a896fa500aa42c7dcf46d5e8f2e0acb.jpg",
    // },
    // {
    //   id: "124",
    //   photo:
    //     "https://i.pinimg.com/474x/29/bb/3b/29bb3bde2e324e7d1cb4d375de6c2d0c.jpg",
    // },
    // {
    //   id: "125",
    //   photo:
    //     "https://i.pinimg.com/474x/70/84/38/70843832d8bb7f2851b8e329df51fe39.jpg",
    // },
    // {
    //   id: "112",
    //   photo:
    //     "https://i.pinimg.com/474x/de/6d/b2/de6db2bcf1bb8566a284065a0618bb21.jpg",
    // },
  ];
  let flag = 0;
  const [width, setWidth] = useState();
  setTimeout(() => {
    let box = document.querySelector(".explore-list-item");
    setWidth(box.offsetWidth / 2 - 15);
  }, 300);

  const check = (i, arr) => {
    let girdArea = "auto";
    if (i % 4 === 0) {
      flag = flag + 1;
      if (arr.length / 8 >= flag) {
        if ((i / 4) % 2 === 0) {
          girdArea = `${i + 1} / 2 / span 2 / span 2`;
        } else {
          girdArea = `${i + 1} / 1 / span 2 / span 2`;
        }
      }
    }
    return girdArea;
  };
  return (
    <div className="explore">
      <div style={{ gridAutoRows: width }} className="explore-list">
        {arr?.map((item, index, arr) => {
          return (
            <div
              style={{
                gridArea: `${check(index, arr)}`,
              }}
              key={index}
              onClick={() => console.log(item.id)}
              className="explore-list-item"
              ref={imgRef}
            >
              <img src={item.photo} alt="" />
              <div className="explore-list-item-group"></div>
              <div className="explore-list-item-group2">
                <div className="explore-list-item-icon flex gap-20">
                  <div className="explore-list-item-iconheart flex gap-5">
                    <i className="fa-solid fa-heart "></i>
                    <p>29k</p>
                  </div>
                  <div className="explore-list-item-iconcmt flex gap-5">
                    <i className="fa-solid fa-play"></i>
                    <p>68</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
