import React from "react"
import './NewSingle.css'


const NewSingle = () => {
  return(
    <div className="new-single-container">
      <div className="single">

        <div className="coverart">
          <img src="https://i.scdn.co/image/ab67616d0000b273791c57fd19fc195eed1ae076" alt="youuu album cover"/>
        </div>

        <div className="single-caption">
          <h2>Youuu (w/ Gareth.T)</h2>
          <button className="listen-now" type="button" name="button">LISTEN NOW</button>
        </div>

      </div>
    </div>
  )
}

export default NewSingle
