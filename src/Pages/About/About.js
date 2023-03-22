import './About.css'
import { useState } from 'react'
import { SoftwareModal, DesignModal } from '../../Components/Modal/Modal'
import eddie from '../../Assets/eddie.jpg'

import React from 'react'

export default function Home({ aboutRef }) {
  // Software Engineering Modal
  const [isSEModalOpen, setIsSEModalOpen] = useState(false)

  function openSEModal() {
    setIsSEModalOpen(true)
  }

  function closeSEModal() {
    setIsSEModalOpen(false)
  }

  function handleClickDev() {
    alert(
      'As a web developer, I have a lot of fun using my programming resources to the fullest.\n\nBuilding websites and making them fun and interactive are like solving puzzles to me, putting components and pages together is such a joy. I even built this website of mine from scratch!'
    )
  }

  // Design Modal
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false)

  function openDesignModal() {
    setIsDesignModalOpen(true)
  }

  function closeDesignModal() {
    setIsDesignModalOpen(false)
  }

  return (
    <div ref={aboutRef} className='page' id='about-section'>
      <h1>
        <u>About</u>
      </h1>
      <div className='about'>
        <div className='about-container'>
          <h1 style={{ fontFamily: 'Righteous' }}>Eddie Hernandez</h1>
          <h6>is a</h6>
          <h2>
            <span className='silly-link' onClick={openSEModal}>
              Software Engineer
            </span>
            ,
          </h2>
          <h6>
            Advanced in:{' '}
            <i style={{ color: 'var(--skills)' }}>
              JavaScript, Node.js, Express.js, MongoDB, Mongoose
            </i>
          </h6>
          <h6 style={{ marginBottom: '0.5em' }}>
            Proficient in:{' '}
            <i style={{ color: 'var(--skills)' }}>
              Python, Django, SQL, PostgreSQL
            </i>
          </h6>
          <h2>
            <span className='silly-link' onClick={handleClickDev}>
              Web Developer
            </span>
            ,
          </h2>
          <h6 style={{ marginBottom: '0.5em' }}>
            Advanced in:{' '}
            <i style={{ color: 'var(--skills)' }}>
              React, HTML, CSS, Bootstrap
            </i>
          </h6>
          <h6>and</h6>
          <h2 style={{ marginTop: '-0.25em' }}>
            <span className='silly-link' onClick={openDesignModal}>
              UI Designer
            </span>
          </h2>
          <h6 style={{ marginTop: '-0.25em', marginBottom: '1em' }}>
            (amongst other creative roles)
          </h6>
          <h6>based in</h6>
          <h2 style={{ marginTop: '-0.25em' }}>
            <a
              className='silly-link'
              href='https://www.google.com/maps/place/Brooklyn,+NY/@40.6451594,-74.0850823,11z/data=!3m1!4b1!4m5!3m4!1s0x89c24416947c2109:0x82765c7404007886!8m2!3d40.6781784!4d-73.9441579?shorturl=1'
              target='_blank'
            >
              Brooklyn, NY
            </a>
          </h2>
        </div>
        <div className='video-container'>
          <iframe
            src='https://player.vimeo.com/video/809903136?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            width='500'
            height='500'
            frameBorder='0'
            allow='autoplay'
            title='Acadia Soundscape'
          ></iframe>
        </div>
      </div>
      <div className='bio-container' id='bottom-section'>
        <div>
          <img className='eddie' src={eddie}></img>
        </div>
        <div className='bio'>
          {/* <h6>
          As a passionate full-stack software engineer, I am dedicated to
          creating dynamic and immersive experiences that engage users in
          meaningful ways. My commitment to expansive inclusivity drives me to
          design user interfaces that are accessible to all, so that everyone
          can benefit from the power of technology. With experience in Arts and
          Culture Administration, I have collaborated with a diverse range of
          organizations, from startups to established companies, to construct
          innovative technical landscapes that captivate and delight consumers.
          Whether working on personal projects or with internal and external
          teams, I thrive on the energy of collaborative creation and am always
          eager to push the boundaries of what is possible.
          </h6> */}
          <h6>
            As a seasoned television and music production professional with a
            deep appreciation for technology and innovation, I bring a unique
            perspective to the world of software engineering. Through my years
            of experience in creating engaging content for television and music,
            I have honed my skills in storytelling, audio and video production,
            and creative problem-solving.{' '}
          </h6>

          <h6>
            Now, as a software engineer, I apply these same skills to building
            cutting-edge software solutions that meet the needs of today's
            digital landscape. Whether I'm working in a musical or visual
            environemnt, or developing a website or app, I approach each project
            with the same level of creativity, attention to detail, and
            commitment to excellence that I brought to my work in television and
            music production. With a deep understanding of both the creative and
            technical aspects of content creation, I am uniquely equipped to
            bridge the gap between these two worlds and deliver outstanding
            results for clients and users alike.
          </h6>
        </div>
      </div>
      <SoftwareModal
        isSEModalOpen={isSEModalOpen}
        closeSEModal={closeSEModal}
      />
      <DesignModal
        isDesignModalOpen={isDesignModalOpen}
        closeDesignModal={closeDesignModal}
      />
    </div>
  )
}
