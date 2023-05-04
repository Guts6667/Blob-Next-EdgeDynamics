import React from 'react'
import style from "./HomeBanner.module.scss"
export default function HomeBanner() {
  return (
    <section className={style.container__home} id="home">
    <video src="/assets/bg-home.mp4" muted autoPlay playsInline={true} loop></video>
    <div className={style.container__home_title}>
    <h1>"We're young passionate people <strong>reshaping</strong> the new era of Industrial IoT just because we draw out of the box"</h1>
    <span className="author">Mokhliss Barriol, Co-Founder Edge Dynamics.</span>
    </div>
</section>
  )
}
