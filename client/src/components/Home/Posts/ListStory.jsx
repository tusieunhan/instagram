import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import AvatarStory from "../../Avatar/AvatarStory";
const ListStory = () => {
  return (
    <div className="home-story-list">
      <Swiper
        slidesPerView={7.5}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story="storied"
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-story-list-item">
            <AvatarStory
              size={"img-md"}
              photo="https://vcdn-giaitri.vnecdn.net/2021/10/08/hieu-dong-5640-1633683150.jpg"
              idStory="11111"
              story
            />
            <p>React js</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListStory;
