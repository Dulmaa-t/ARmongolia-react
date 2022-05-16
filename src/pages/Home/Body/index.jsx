import React, { useEffect } from 'react'

import Cards from './Cards'
import VideoSliders from './VideoSliders'
import Footer from '../Footer'

export default function Index() {

    return (
        <div class="wrapper ">
            <section class="about p-relative dsn-container section-margin">
                <div class="section-title">
                    <h2 class="heading-h2">Метаверс руу <br />шилжихэд бэлэн үү?</h2>
                </div>

                <div class="row">
                    <div class="col-lg-7">
                        <div class="p-relative text">
                            <h2 class="title-block ">AR технологи бол биднийг Метаверстэй холбох гол гүүр болно.
                            </h2>
                            <p class="mt-30">Бидний амьдрах дараагийн ертөнц буюу Метаверс нь бодит байдал болон
                                хийсвэр дүрслэлийн хослол юм. Өдөр тутамдаа хийсвэр дүрслэлийг бодит мэт хүлээн
                                зөвшөөрч амьдрах хэрэгцээ шаардлага бидэнд үүсч эхлээд байна. </p>
                            <p class="mt-10">Ухаалаг гар утас бидний амьдралын хэв маягийг тэр чигт нь өөрчилсөн
                                шиг өөрчлөлтийг AR технологи авчрах болно.</p>
                        </div>
                    </div>

                    <div class="col-lg-5 ">
                        <div class="box-experience  d-flex justify-content-center flex-column h-100">
                            <div class="numb-ex fw-bold cover-bg" style={{ backgroundImage: `url(/static/assets/image/ar-text.gif)` }}>
                                AR
                            </div>
                            <h3 class="mt-30">
                                <span class="letter-stroke core-text">Core of</span>
                                <br />
                                <span class="v-light heading-color p-5 metaverse-text">
                                    Metaverse
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <div class="p-relative" data-dsn-title="Мета маркетинг-д бэлэн үү?">
                <div class="box-set-video bg-section p-absolute w-100 h-100 over-hidden top-0">
                    <div class="before-z-index h-100" data-dsn-grid="move-up" data-overlay="2">
                        <img class="p-absolute cover-bg-img has-top-bottom" src="/static/assets/image/metamarketing.jpeg" alt="" data-dsn-move="20%" />
                    </div>
                </div>
                <div class=" dsn-container">
                    <div class="row">
                        <div class="col-xl-6 offset-xl-6 col-lg-7 offset-lg-5">
                            <div
                                class="pro-text p-relative background-section box-padding z-index-1 section-margin">
                                <div class="border-section-bottom mb-50">
                                    <h2 class="heading-h2">
                                        Мета маркетинг-д бэлэн үү? </h2>
                                </div>
                                <div class="description max-w570">
                                    <p>Өдөр бүр бүх төрлийн сувгаар маш их мэдээллийг авч буй хэрэглэгчдэд
                                        спонсоред нийтлэл болон и-мэйл нь тэдний хувьд спам болон очиж
                                        хэрэглэгчдийг бухимдуулж байна. </p>
                                    <p>Тиймээс байгууллагууд болон брэндүүд үр дүнтэй арга хэрэгсэл маркетингийн
                                        шинэ сувгийг хайж байна.</p>
                                    <p>Бид хэрэглэгч – байгууллагын харилцааг шинэ түвшинд гаргаж, технологийн
                                        хязгааргүй нөөц боломжийг ашиглан харилцан үр өгөөж үүсгэх шинэлэг
                                        шийдэл болох ART M платформыг танд санал болгож байна.</p>
                                </div>
                                <div class="box-video p-absolute top-50 start-50" style={{ left: "50px" }}>
                                    <a href="https://www.youtube.com/watch?v=fOO2QnGOgGY"
                                        class="vid c-hidden z-index-2">
                                        <div class="play-btn image-zoom background-main heading-color move-circle d-flex align-items-center justify-content-center"
                                            data-dsn="parallax"><i class="fas fa-play"></i>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
            <VideoSliders />
            <div class="section-video section-margin p-relative">
                <div class="bg-section p-relative">
                    <div class="before-z-index" data-dsn-grid="move-up" data-overlay="1">
                        <img class="cover-bg-img has-bigger-scale"
                            src="/static/assets/image/promotion.jpeg" alt="" data-dsn-speed="40%" />
                    </div>

                    <div class="box-video">
                        <a href="https://www.youtube.com/watch?v=0ceTgaIWg9g"
                            class="vid c-hidden v-middle z-index-2">
                            <div class="play-btn image-zoom background-main heading-color move-circle d-flex align-items-center justify-content-center"
                                data-dsn="parallax"><i class="fas fa-play"></i>

                            </div>
                        </a>

                    </div>

                </div>
            </div>
            <section class="Awards p-relative dsn-container section-margin">
                        <div class="section-title">
                            <h2 class="heading-h2"> AR Mongolia<br />яагаад хэрэгтэй вэ?</h2>
                        </div>

                        <div class="row">
                            <div class="column-Award d-flex align-items-center flex-column justify-content-center text-center">
                                <div class="Award-item background-section w-100">
                                    <div class="content">
                                        <div class="img">
                                            <img style={{width:"30%"}} src="/static/assets/image/megaphone.png" />
                                        </div>

                                        <ul class="text">
                                            <li>Зах зээлд бодит ялгарлыг бий болгоно</li>
                                        </ul>
                                        <div class="content-hover">
                                            <p>Бүтээгдэхүүн бүр зах зээлд өөрийгөө сурталчилж, хэрэглэгчийг
                                                зугаацуулан, мэдлэг олгож, сэтгэл татам чанар нь улам нэмэгдэнэ.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column-Award d-flex align-items-center flex-column justify-content-center text-center">
                                <div class="Award-item background-section w-100">
                                    <div class="content">
                                        <div class="img">
                                            <img style={{width: "30%"}} src="/static/assets/image/product-markting.png" />
                                        </div>

                                        <ul class="text">
                                            <li>Бүтээгдэхүүн бүр маркетингийн менежер</li>
                                        </ul>

                                        <div class="content-hover">
                                            <p>Бүтээгдэхүүнээрээ дамжуулан зорилтот хэрэглэгчидтэйгээ шууд холбогдож
                                                үнэнч хэрэглэгчээ халамжлах боломжийг бий болгоно. </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="Award-item background-section w-100">
                                    <div class="content">
                                        <div class="img">
                                            <img style={{width:"30%"}} src="/static/assets/image/business-and-finance.png" />
                                        </div>

                                        <ul class="text">
                                            <li>Бизнесийн үр ашгийг нэмэгдүүлнэ</li>
                                        </ul>

                                        <div class="content-hover">
                                            <p>Цаг хугацаа, орон зайнаас үл хамаарах ухаалаг шийдлээр хүний нөөц,
                                                маркетинг, үйл ажиллагааны зардлыг хэмнэх боломжтой.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column-Award d-flex align-items-center flex-column justify-content-center text-center">
                                <div class="Award-item background-section w-100">
                                    <div class="content">
                                        <div class="img">
                                            <img style={{width:"30%"}} src="/static/assets/image/chat.png" />
                                        </div>

                                        <ul class="text">
                                            <li>Бизнес болон хэрэглэгчийг ойртуулна</li>
                                        </ul>

                                        <div class="content-hover">
                                            <p>Метаверс шилжилтийн энэхүү үед AR технелогийг ашиглан хэрэглэгчиддээ
                                                онцгой, үнэ цэнэтэй үйлчилгээг үзүүлж бусдаас түрүүлж алхах
                                                боломжийг танд олгоно. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            <div class="next-page dsn-container section-padding p-relative">
                        <div class="full-bg background-section p-absolute h-100 before-z-index"></div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="title-block">
                                    <img src="/static/assets/image/ipnone.png" style={{ width: "400px" }} />
                                </div>
                            </div>
                            <div class="col-md-9">
                                <h2 class="title max-w570">
                                    <span class="letter-stroke"> Connect </span>
                                    <br /> to metaverse 
                                </h2>
                                <a href="#" class="link-custom effect-ajax image-zoom move-circle background-section p-relative mt-30 v-light" data-dsn="parallax">
                                    Connect
                                </a>
                                <h4 class="title-block mt-30">AR Mongolia аппликейшн татах</h4>
                                
                                <div class="title-block mt-30">
                                <a href="https://apps.apple.com/mn/app/ar-mongolia/id1227419847?fbclid=IwAR2jXorioXeWzb54O_CcV9UmlfyB5KZxoZlDUyDP6cm7GfiypnL_n2XDdmU" target="_blank"><img src="/static/assets/image/app-store.png" style={{border:"2px solid white"}} width="200"/></a>
                            <a href="https://play.google.com/store/apps/details?id=com.argun.armongolia" target="_blank"><img src="/static/assets/image/googleplay.png" style={{ border: "2px solid white" }} width="200" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
        </div>




    )
}
