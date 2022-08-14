import React from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

import Man1 from '../assets/Man1.jpg'
import '../Styles/Components/Share.scss'

export default function Share() {
  return (
    <section className='share'>
      <article className="shareThoughts">
           <img src={Man1} alt="name"/>
           <input type="text" name="thoughts" id="thoughts" placeholder="What's in your mind Anup?"/>
      </article>

      <hr/>

      <article className='shareMedia'>
        <div className="media">
          <div className='photoMedia'>
            <PermMedia htmlColor='tomato'/>
            <span>Photo or Video</span>
          </div>
          <div className='tag'>
            <Label htmlColor='blue'/>
            <span>Tag</span>
          </div>
          <div className='location'>
            <Room htmlColor='green'/>
            <span>Location</span>
          </div>
          <div className='feelings'>
            <EmojiEmotions htmlColor='goldenrod'/>
            <span>Feelings</span>
          </div>
        </div>

        <div className="shareBtn">
          <button className='btn'>Share</button>
        </div>
      </article>

    </section>
  )
}
