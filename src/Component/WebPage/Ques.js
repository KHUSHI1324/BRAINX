import React from 'react'
import pencil from "../img/pencils.svg";
function Ques() {
  return (
    <>
          <div className="ques">
        <img src={pencil} alt="" />
        <span>All your questions about therapy, answered</span>
        <div className="topic">
          <p>Why should I talk to a therapist?</p>
          <p>How do I find the right therapist?</p>
          <p>How do I find the right therapist?</p>
          <p className="one">Common myths about therapy</p>
        </div>
        {/* <Carousel responsive={responsive}
      infinite={true}
      draggable={false}
      swipeable={true}
      showDots={false}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      removeArrowOnDeviceType={['tablet','mobile']}
      dotListClass='custom-dot-list-style'
      itemAriaLabel='carousel-item-padding-40-px'
      containerClass='carousel-container'>

      </Carousel> */}
      </div>
    </>
  )
}

export default Ques
