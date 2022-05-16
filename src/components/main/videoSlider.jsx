import React from 'react'

export default function VideoSlider(props) {
    return (
        <div class="swiper-slide p-relative">
            <div class="box-video p-absolute top-40 left-60" style={{ zIndex: "1" }}>
                <a href={props.video}
                    class="vid c-hidden z-index-2">
                    <div class="play-btn image-zoom background-main heading-color move-circle d-flex align-items-center justify-content-center"
                        data-dsn="parallax"><i class="fas fa-play"></i>
                    </div>
                </a>
            </div>
            <div class="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                data-swiper-parallax-scale="0.85">
                <div class="w-100 h-100 p-absolute top-0" data-overlay="5">
                    <div class="swiper-text">
                        <h4>{props.title}</h4>
                        <h3>{props.text}</h3>
                    </div>
                    <img class="cover-bg-img"
                        src={props.image}
                        alt="" />
                </div>
            </div>
        </div>
    )
}
