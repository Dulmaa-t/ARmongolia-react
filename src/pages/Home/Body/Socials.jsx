import React from 'react'
import Social from '../../../components/main/social'

export default function Socials() {

    /** Back aac irsen data */
    const social = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            title: "Fb",
            icon: "fab fa-facebook-f",
            href: "https://www.facebook.com/armongoliaMN"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            title: "In",
            icon: "fab fa-instagram",
            href: "https://www.instagram.com/ar.mongolia/"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            title: "As",
            icon: "fab fa-apple",
            href: "https://apps.apple.com/mn/app/ar-mongolia/id1227419847?fbclid=IwAR2jXorioXeWzb54O_CcV9UmlfyB5KZxoZlDUyDP6cm7GfiypnL_n2XDdmU"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            title: "An",
            icon: "fab fa-android",
            href: "https://play.google.com/store/apps/details?id=com.argun.armongolia"
        }
    ]

    return (
        <div class="social-network">
            <ul class="socials d-flex  flex-column ">
                {
                    social.map(
                        (element, index) => {
                            return (
                                <Social key={index} title={element.title} icon={element.icon} href={element.href} />
                            )
                        }
                    )
                }
            </ul>
        </div>

    )
}
