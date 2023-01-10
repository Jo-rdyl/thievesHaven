function AboutUs() {

  return (
    <>
    <section>
        <div className="bigTriangle" />
        <div className="smallTriangle" />
      <h2>About us</h2>
    </section>
    <style jsx>{`
    section {
      height: 100vh;
      text-align: center;
    }
 
    .bigTriangle {
      width: 0;
      border-left: 45px solid transparent;
      border-bottom: 45px solid #A8D0E6;
      border-radius: 0;
      position: relative;
      left: calc(100vw - 45px);
      top: -45px;
    }

    .smallTriangle {
      width: 0;
      border-left: 40px solid transparent;
      border-bottom: 40px solid #F8E9A1;
      border-radius: 0;
      position: relative;
      left: calc(100vw - 40px);
      top: -65px;
    }

    h2 {
      font-size: 5vw;
      margin-bottom: 12vh;
    }
    `}</style>
    </>
  )
}

export default AboutUs;