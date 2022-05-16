import React from 'react'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Socials from './Body/Socials'
import Contact from '../Contact'

export default function Index() {

  return (
    <div>
      <div class="preloader">
        <span class="percent v-middle">0</span>
        <span class="loading-text text-uppercase">Loading ...</span>
        <div class="preloader-bar">
          <div class="preloader-progress"></div>
        </div>
        <h1 class="title v-middle">
          <span class="letter-stroke">AR MONGOLIA</span>
          <span class="text-fill">AR MONGOLIA</span>
        </h1>
      </div>

      <main class="main-root">
        <div id="dsn-scrollbar">
          <div class=" inner-content">
            <Header />
            <Body />
          </div>

        </div>
        <div class="contact-btn">
          <div class="contact-btn-txt">ХОЛБОО БАРИХ</div>
        </div>
        <Contact />
        <div class="stories-btn">
          <div class="stories-btn-txt">Our Stories</div>
        </div>
        <div class="dsn-stories dsn-stories-model">
          <div class="close-story"></div>
          <div class="dsn-stories-gallery">
            <div class="p-relative h-100">
              <a href="/static/assets/image/gallery/0f41ccd09df85fa6297d1c39f9970d5f.jpg"></a>
            </div>

            <h4 class="title-block">
              A elegant and <br /> attractive watch
            </h4>
          </div>
          <div class="dsn-stories-gallery">
            <div class="p-relative h-100">
              <a href="/static/assets/image/gallery/55d69935b41985011c23aaada5e659c0.jpg"></a>
            </div>
            <h4 class="title-block">
              Beyond Nature
            </h4>
          </div>
          <div class="dsn-stories-gallery">
            <div class="p-relative h-100">
              <a href="/static/assets/image/gallery/82897ac7a30cd4fe03de343e104a361e.jpg"></a>
            </div>

            <h4 class="title-block">
              A modern<br /> home
            </h4>
          </div>
          <div class="dsn-stories-gallery">
            <div class="p-relative h-100">
              <a href="/static/assets/image/gallery/dfcc8354452c19d0ff09d887f64ba9d1.jpg"></a>
            </div>

            <h4 class="title-block">
              Fashion day <br /> and elegance
            </h4>
          </div>
          <div class="dsn-stories-gallery">
            <div class="p-relative h-100">
              <a href="/static/assets/image/gallery/9900f8021c522728e5ef7f87efa65479.jpg"></a>
            </div>

            <h4 class="title-block">
              Health <br /> and nutrition
            </h4>
          </div>
          <div class="dsn-stories-gallery">
            <div class="p-relative h-100">
              <a href="/static/assets/image/gallery/9dd767b9b686802ce0d6399515d49e69.jpg"></a>
            </div>

            <h4 class="title-block">
              Free <br /> Style
            </h4>
          </div>
        </div>

      </main>
      <div class="cursor">

        <div class="cursor-helper">
          <span class="cursor-drag">Drag</span>
          <span class="cursor-view">View</span>
          <span class="cursor-open"><i class="fas fa-plus"></i></span>
          <span class="cursor-close">Close</span>
          <span class="cursor-play">play</span>
          <span class="cursor-next"><i class="fas fa-chevron-right"></i></span>
          <span class="cursor-prev"><i class="fas fa-chevron-left"></i></span>
        </div>

      </div>
      <Socials />
      <div class="day-night">
        <div class="night active" data-dsn-theme="dark">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <rect x="12.3" y="23.5" width="2.6" height="1"></rect>
            <rect x="16.1" y="15.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8871 16.5732)" width="1"
              height="2.6"></rect>
            <rect x="23.5" y="12.3" width="1" height="2.6"></rect>
            <rect x="30.1" y="16.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5145 27.0538)" width="2.6"
              height="1"></rect>
            <rect x="33.1" y="23.5" width="2.6" height="1"></rect>
            <rect x="30.9" y="30.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.9952 31.4264)" width="1"
              height="2.6"></rect>
            <rect x="23.5" y="33.1" width="1" height="2.6"></rect>
            <rect x="15.3" y="30.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -17.3677 20.9457)" width="2.6"
              height="1"></rect>
            <path
              d="M24,18.7c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S26.9,18.7,24,18.7z M24,28.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S26.4,28.3,24,28.3z">
            </path>
          </svg>
        </div>
        <div class="moon" data-dsn-theme="night">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <path
              d="M24,33.9c-5.4,0-9.9-4.4-9.9-9.9c0-4.3,2.7-8,6.8-9.4l0.8-0.3l-0.1,0.9c-0.2,0.6-0.2,1.3-0.2,1.9c0,5.2,4.3,9.5,9.5,9.5c0.6,0,1.3-0.1,1.9-0.2l0.8-0.2L33.3,27C32,31.1,28.3,33.9,24,33.9z M20.4,15.9c-3.2,1.4-5.3,4.5-5.3,8.1c0,4.9,4,8.9,8.9,8.9c3.6,0,6.7-2.1,8.1-5.3c-0.4,0-0.8,0.1-1.3,0.1c-5.8,0-10.5-4.7-10.5-10.5C20.4,16.7,20.4,16.3,20.4,15.9z">
            </path>
          </svg>
        </div>
      </div>
      <div class="scroll-to-top">
        <img src="assets/img/scroll_top.svg" alt=""/>
          <div class="box-number v-middle">
          </div>
      </div>
      <div class="dsn-paginate-right-page"></div>
    </div>
  )
}
