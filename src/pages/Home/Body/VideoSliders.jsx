import React from 'react'
import VideoSlider from '../../../components/main/videoSlider'

export default function VideoSliders() {

    /** Back aac irsen data */
    const videoSliders = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=lFuBeWWuBJE",
            title: "AR Comics",
            text: "Пипс",
            image: "/static/assets/image/gallery/0f41ccd09df85fa6297d1c39f9970d5f.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=tZIF6L6IFXY",
            title: "Боловсрол",
            text: "AR Зүрх",
            image: "/static/assets/image/gallery/9900f8021c522728e5ef7f87efa65479.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=FCIJYzx9mDs",
            title: "Хүүхдийн тоглоом",
            text: "AR Puzzle",
            image: "/static/assets/image/gallery/82897ac7a30cd4fe03de343e104a361e.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=tm9U3rxG_4A",
            title: "Хэвлэл",
            text: "AR Нэрийн хуудас",
            image: "/static/assets/image/gallery/dfcc8354452c19d0ff09d887f64ba9d1.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=l_VnTNt70tM",
            title: "Байршилд суурилсан AR",
            text: "Виртуал соёмбо",
            image: "/static/assets/image/gallery/55d69935b41985011c23aaada5e659c0.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=8BcKW2adxZQ",
            title: "Ном, хэвлэл",
            text: "AR Ном",
            image: "/static/assets/image/gallery/9dd767b9b686802ce0d6399515d49e69.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "#https://www.youtube.com/watch?v=g5QTkFuGh90",
            title: "Боловсрол",
            text: "AR Education",
            image: "/static/assets/image/gallery/94702f5f2f27f627ef6c6b69ec39049f.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=Kb_lAPKPy2Q",
            title: "Virtual showroom",
            text: "Mongolia house",
            image: "/static/assets/image/gallery/ebb3bb0be80450da6422fe8b996aa7b3.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=lFuBeWWuBJE",
            title: "AR Comics",
            text: "Пипс",
            image: "/static/assets/image/gallery/0f41ccd09df85fa6297d1c39f9970d5f.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=tZIF6L6IFXY",
            title: "Боловсрол",
            text: "AR Зүрх",
            image: "/static/assets/image/gallery/9900f8021c522728e5ef7f87efa65479.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=FCIJYzx9mDs",
            title: "Хүүхдийн тоглоом",
            text: "AR Puzzle",
            image: "/static/assets/image/gallery/82897ac7a30cd4fe03de343e104a361e.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=tm9U3rxG_4A",
            title: "Хэвлэл",
            text: "AR Нэрийн хуудас",
            image: "/static/assets/image/gallery/dfcc8354452c19d0ff09d887f64ba9d1.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=l_VnTNt70tM",
            title: "Байршилд суурилсан AR",
            text: "Виртуал соёмбо",
            image: "/static/assets/image/gallery/55d69935b41985011c23aaada5e659c0.jpg"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            video: "https://www.youtube.com/watch?v=8BcKW2adxZQ",
            title: "Ном, хэвлэл",
            text: "AR Ном",
            image: "/static/assets/image/gallery/9dd767b9b686802ce0d6399515d49e69.jpg"
        }

    ]

    return (
        <section class="services dsn-container p-relative section-margin "
            data-dsn-title="Ашиглагдаж буй жишээнүүд">
            <div class="section-title">
                <h2 class="heading-h2">Ашиглагдаж <br />буй жишээнүүд</h2>
            </div>

            <div class="slider-about pb-section dsn-container  dsn-swiper p-relative "
                data-dsn-option='{"slidesPerView" : 2.3}'>
                <div class="swiper-container">
                    <div class="swiper-wrapper v-dark-head">
                        {
                            videoSliders.map(
                                (element, index) => {
                                    return (
                                        <VideoSlider key={index} video={element.video} title={element.title} text={element.text} image={element.image} />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div class="p-absolute w-100 h-50 bottom-0 left-0 background-section"></div>
            </div>

        </section>
    )
}
