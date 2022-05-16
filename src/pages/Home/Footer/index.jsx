import React from 'react'

export default function Footer() {

    return (
        <footer class="footer border-top background-section">
            <div class="dsn-container">
                <div class="d-grid grid-sm-2">
                    <div class="footer-item">
                        <a href="" class="logo-footer m-auto">
                            <img src="/static/assets/image/logo.png" class="logo-dark cover-bg-img" />
                            <img src="/static/assets/image/logo-dark.png" alt="" class="logo-light cover-bg-img" />
                        </a>
                    </div>

                    <div class="footer-item text-right">
                        <h5 class="sm-title-block mb-10">Follow Us</h5>
                        <ul class="box-social">
                            <li>
                                <a href="https://www.facebook.com/armongoliaMN" target="_blank">FB</a>
                                <div class="icon-circle"></div>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ar.mongolia/" target="_blank">IN</a>
                                <div class="icon-circle"></div>
                            </li>
                            <li>
                                <a href="#" target="_blank">TW</a>
                                <div class="icon-circle"></div>
                            </li>

                        </ul>
                    </div>

                </div>

                <div class="footer-bottom d-grid grid-md-2 border-top pt-30 mt-30">
                    <div class="footer-item order-md-2">
                        <div class="nav-footer text-right">
                            <ul>
                            </ul>
                        </div>
                    </div>


                    <div class="footer-item">
                        <div class="copyright">
                            <div class="copright-text over-hidden">
                                @2022 Argun Group All rights reserved. </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
