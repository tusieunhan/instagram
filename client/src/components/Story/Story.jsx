import React from "react";
import "../../style/story.scss";
const Story = () => {
  return (
    <div className="story">
      <div className="story-full">
        <div className="story-header flex-between">
          <a href="">
            <img
              className="story-header-img"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png"
              alt=""
            />
          </a>
          <div className="story-header-times">
            <i className="fa-solid fa-xmark-large"></i>
          </div>
        </div>
        <div className="story-body flex">
          <div className="story-body-content flex">
            <div className="story-body-content-img">
              <img
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/279591821_1438961713208330_2187468816182987759_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=VOPJtprqbKoAX8s4RD5&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT9O9jAJCpvSMuLYc1n1DTbsM_HnxYnnxAmzBYIaIp77SQ&oe=62734F50"
                alt=""
              />
              <div className="story-body-content-group flex-between">
                <div className="story-body-content-group-header">
                  <div className="story-body-content-timeline flex gap-5">
                    <div className="story-body-content-timeline-item"></div>
                    <div className="story-body-content-timeline-item"></div>
                  </div>
                  <div className="story-body-content-info flex-between">
                    <div className="story-body-content-info-user flex gap-10">
                      <img
                        src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/279591821_1438961713208330_2187468816182987759_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=VOPJtprqbKoAX8s4RD5&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT98IodhxjGEsVEs9W9qpF13WSBB-Mqvquw-hkDntRKQLQ&oe=62734F50"
                        alt=""
                      />
                      <p className=" w-600">Code.learnnn</p>
                    </div>

                    <div className="story-body-content-info-btn flex gap-10">
                      <i className="fa-solid fa-play"></i>
                      <i className="fa-solid fa-volume-slash"></i>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
                <div className="story-body-content-group-footer flex gap-10">
                  <input type="text" placeholder="Reply to code.learn" />
                  <i className="fa-light fa-heart"></i>
                  <i className="fa-light fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
