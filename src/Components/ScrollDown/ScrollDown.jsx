import React from 'react'
import './ScrollDown.css'

export default function ScrollDown() {
  const handleScroll = () => {
    const target = document.getElementById('about-section')
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="scroll-down" onClick={handleScroll}>
      <div className="arrow"></div>
    </div>
  )
}
