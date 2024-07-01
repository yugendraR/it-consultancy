import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
import HotNews from "./News__Hot";
import LatestNews from "./News__Latest";
import "./style.css";

const News = () => {
  const [slidesPerView, setSlidesPerView] = useState(2.5);
  const hotNews = [
    {
      title: "Great Technology Solution",
      avatar:
        "https://www.wallpaperup.com/uploads/wallpapers/2017/12/22/1173395/286d5a20933217acb4066811283dc734-700.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic praesentium sunt incidunt quasi eos? Expedita temporibus dolorum nisi ratione harum quae suscipit, distinctio repellat in! Vero quisquam delectus nemo incidunt commodi perferendis repellendus quaerat, pariatur quidem itaque blanditiis magni.",
      author: "Randi Saputra",
      role: "IT Consultant",
    }
  ];
  const latestNews = [
    {
      img: "https://wd.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/yezj4CV8NRdONDSUmpWr.png",
      date: "30 March 2022",
      author: "Admin",
      text: "When browsers first reached version 10, there were a few issues as the major version number went from one digit to two. Hopefully, we learned a few things that'll ease the transition from two digits to three.",
    },
    {
      img: "https://blog.logrocket.com/wp-content/uploads/2022/03/client-side-routing-react-location.png",
      date: "30 March 2022",
      author: "Admin",
      text: "Routing is one of the essential aspects of single-page applications (SPAs), but because React doesn’t come with a routing solution.",
    },
  ];

  useEffect(() => {
    const fitSlidesPerView = () => {
      if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
        setSlidesPerView(1.3);
      } else if (window.innerWidth <= 600) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2.5);
      }
    };

    fitSlidesPerView();
    window.addEventListener("resize", fitSlidesPerView);

    return () => {
      window.removeEventListener("resize", fitSlidesPerView);
    };
  }, []);

  return (
    <section id="news" className="container news__container">
      <div className="news__hot">
        {hotNews.map((feed, index) => (
          <div key={index}>
            <HotNews
              title={feed.title}
              text={feed.text}
              avatar={feed.avatar}
              author={feed.author}
              role={feed.role}
            />
          </div>
          //   <SwiperSlide key={index}>
          //   </SwiperSlide>
        ))}
      </div>
      {/* <Swiper className="news__hot" pagination={true} modules={[Pagination]}> */}
      {/* </Swiper> */}
      <div className="news__latest">
        <h1>Get The Latest News Here</h1>
        {latestNews.map((feed, index) => (
          <LatestNews
            key={index}
            img={feed.img}
            date={feed.date}
            author={feed.author}
            text={feed.text}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
