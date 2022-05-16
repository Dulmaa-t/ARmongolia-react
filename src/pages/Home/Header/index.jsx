import React, { useEffect } from 'react'

export default function Index() {

    return (
        <header className="p-relative dsn-header-animation full-width over-hidden h-v-100 v-dark-head">
            <div className="hero-img p-absolute w-100  h-100 before-z-index" data-overlay="5" data-dsn-ajax="img">
                <div className=" " data-dsn="video">
                    <video className="bg-image cover-bg dsn-video" preload="none" autoPlay="" loop="" muted=""
                        playsInline="" poster= "/static/assets/image/1.jpeg">
                        <source src="/static/uploads/ar_mongolia.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="box-content dsn-container align-items-center">
                <div className="hero-content ">
                    <div className="has-box-mod p-relative move-circle"
                        style={{ transformOrigin: "0px 0px", transform: "translate(0px, 0px)" }}>
                        <h1 className="title " data-dsn-ajax="title">
                            BETTER <br /> THAN REALITY
                        </h1>
                        <div className="icon-circle"
                            style={{ transformOrigin: "0px 0px", transform: "translate(0px, 0px)" }}></div>
                    </div>

                    <div className="metas mt-25">
                        <p className="description border-before mt-25 max-w570">
                            AR MONGOLIA платформ нь таны бизнесийн үр ашгийг нэмэгдүүлэх дэвшилтэт технологид
                            суурилсан ухаалаг шийдлүүдийг санал болгоно.
                        </p>
                    </div>
                </div>

            </div>

        </header>
    )
}