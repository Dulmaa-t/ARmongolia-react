import React from 'react'

export default function Card(props) {
    return (
        <div class="service-item">
            <div class="service-item-inner background-section style-box">
                <div class="icon text-center">
                    <img src={props.image} alt="" />
                </div>
                <div class="content-box">
                    <h4 class="title-block mt-20">{props.title}</h4>
                    <p class="description mt-20">{props.text}</p>
                    <p class="text-center">
                        <a href="#" rel="ar"
                            class="link-custom effect-ajax image-zoom move-circle background-section p-relative mt-30 v-light"
                            data-dsn="parallax">{props.watch} </a>
                    </p>
                </div>
            </div>
        </div>

    )
}
