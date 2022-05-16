import React from 'react'

export default function Socials(props) {
    return (
            <li>
                <a href={props.href} target="_blank">
                    <i class={props.icon}></i>
                    <span>{props.title}</span>
                </a>
            </li>

    )
}
