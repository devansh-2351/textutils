import React,{useState} from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btntext, setBtnText] = useState("Enable Light Mode");
  const toggleStyle = ()=>{
    if(myStyle.color=='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnText("Enable Dark Mode");
    }
    else{
      setMyStyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtnText("Enable Light Mode");
    }
  }
    return (
      <div className="container" style= {myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Creator
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>Devansh Singh</strong> An information technology undergrad at Birla Institute of Technology, Mesra, Ranchi currently in the pre-final year of college.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            About the App
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>Text Based Utility</strong> which helps the users to manipulate the text they enter at their own will.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Optimised Development Build
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>This Web Application</strong> has a large scale usability, so it has been optimally deployed on github for enhanced user experience.
          </div>
        </div>
      </div>
    </div>
    <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
      </div>
      
    )
}
