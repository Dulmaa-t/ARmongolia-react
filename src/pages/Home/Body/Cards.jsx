import React from 'react'
import Card from '../../../components/main/card'

export default function Cards() {

    /** Back aac irsen data */
    const cards = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            image: "/static/assets/image/services/augmented-reality.png",
            title: "Target based solution",
            text: "Хэвлэмэл материал, бүтээгдэхүүний сав баглаа боодол, шошго, тараах материал, ном сэтгүүл, хаяг, самбар зэргийг интерактив шийдэл бүхий дижитал контентоор баяжуулан харуулах боломжтой",
            watch: "Видео үзэх "
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            image: "/static/assets/image/services/camera.png",
            title: "Ground plane tracking solution",
            text: "Орон зай цаг хугацаанаас үл хамааран AR шийдэл бүхий 3D, Холограмм гэх мэт виртуал дүрслэлийг өөрийн байгаа газартаа буюу бодит орчинд аппликейшнийн камерийн тусламжтайгаар дүрслэн харах боломжтой.",
            watch: "Ar үзэх /Only Mobile/"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            image: "/static/assets/image/services/virtual-reality.png",
            title: "Mixed Reality Solution",
            text: "Ямар ч тусгай VR төхөөрөмж ашиглахгүйгээр Виртуал орчинд гар утсаараа шууд нэвтрэх боломжийг танд санал болгож байна. Ингэснээр бизнес шоурүүмд зочлох, виртуал аялал зэргийг хийх боломжтой.",
            watch: "Mr үзэх"
        }
    ]


    return (
        <section class="services dsn-container p-relative section-margin "
            data-dsn-title="Технологийн шийдлүүд">
            <div class="section-title">
                <h2 class="heading-h2">Технологийн <br />шийдлүүд</h2>
            </div>
            <div class="d-grid grid-md-2 grid-lg-3 dsn-isotope grid" data-dsn-item=".service-item">
                {
                    cards.map(
                        (element, index) => {
                            return (
                                <Card key={index} image={element.image} title={element.title} text={element.text} watch={element.watch} />
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}
