import React from 'react';

import Man2 from "../assets/Man2.jpg"
import Gift from "../assets/Gift.jpg"
import "../Styles/Components/Rightbar.scss"

export default function Rightbar() {
  return (
    <section className='rightBar'>
       <article className='birthDayRemainder'>
          <div className="giftWrapper">
          <img src={Gift} className='gift'/>
          </div>
          <div className="birthday">
          <b>Jim Garry</b> and <b>3 other Friends</b> have birthday today.
          </div>
       </article>
       <article className='party'>
          <h1>cold,</h1>
          <h1>smoothy</h1>
          <h1>& tasty.</h1>
       </article>

       <article className='onileFriends'>
        <h1>Online Friends</h1>
            <section className='onlinePeople'>
                <article className='person'>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                    <span>John Doe</span>
                </article>
                <article className='person'>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                    <span>John Doe</span>
                </article>
                <article className='person'>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                    <span>John Doe</span>
                </article>
                <article className='person'>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                    <span>John Doe</span>
                </article>
                <article className='person'>
                    <div className='image'>
                        <img className='imageStyle' src={Man2}/>
                        <span className='online'></span>
                    </div>
                    <span>John Doe</span>
                </article>
            </section>
       </article>
    </section>
  )
}
