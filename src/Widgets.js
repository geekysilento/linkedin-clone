import React from 'react'
import "./Widgets.css"
import { FiberManualRecord, Info } from '@mui/icons-material'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord/> 
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
  
      <div className="widgets__header">
        <h2>
          LinkedIn News
        </h2>
        <div className="widgets__icon">
          
         <Info />
        </div>
      </div>
      {newsArticle("Aryan Srivastava has come out as gay!", "Breaking News - 1022 readers")}
      {newsArticle("Sahitya Gupta breaks record for the man with the lowest IQ! ", "National News - 3222 readers")}
      {newsArticle("Saarim Salim blew up!", "Breaking News - 6922 readers")}
    </div>

  )
}

export default Widgets