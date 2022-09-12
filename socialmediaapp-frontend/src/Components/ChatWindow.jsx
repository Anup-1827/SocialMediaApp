import React from 'react'
import "../Styles/Components/ChatWindow.scss"

import Man2 from "../assets/Man2.jpg"

export default function ChatWindow() {
  return (
    <section className="chatwindow">
      <section className="chats">
        <article className="chat">
          <div className="messageDiv">
             <img className='imageStyle' src={Man2}/>
             <span className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus quo nam minus? Repellendus omnis dolorum assumenda! Accusantium, alias quasi. Ipsa reprehenderit quasi rem quam reiciendis sapiente perferendis. Animi natus minima veniam soluta labore quos deleniti ad totam libero voluptatum rerum quae, quia molestias nihil fugiat? Nulla sapiente officiis aliquid!</span>
          </div>
          <div className="timestamp">
            1 min ago
          </div>
        </article>
        <article className="own">
          <div className="messageDiv">
             <img className='imageStyle' src={Man2}/>
             <span className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus quo nam minus? Repellendus omnis dolorum assumenda! Accusantium, alias quasi. Ipsa reprehenderit quasi rem quam reiciendis sapiente perferendis. Animi natus minima veniam soluta labore quos deleniti ad totam libero voluptatum rerum quae, quia molestias nihil fugiat? Nulla sapiente officiis aliquid!</span>
          </div>
          <div className="timestamp">
            1 min ago
          </div>
        </article>
        <article className="chat">
          <div className="messageDiv">
             <img className='imageStyle' src={Man2}/>
             <span className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus quo nam minus? Repellendus omnis dolorum assumenda! Accusantium, alias quasi. Ipsa reprehenderit quasi rem quam reiciendis sapiente perferendis. Animi natus minima veniam soluta labore quos deleniti ad totam libero voluptatum rerum quae, quia molestias nihil fugiat? Nulla sapiente officiis aliquid!</span>
          </div>
          <div className="timestamp">
            1 min ago
          </div>
        </article>
        <article className="own">
          <div className="messageDiv">
             <img className='imageStyle' src={Man2}/>
             <span className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus quo nam minus? Repellendus omnis dolorum assumenda! Accusantium, alias quasi. Ipsa reprehenderit quasi rem quam reiciendis sapiente perferendis. Animi natus minima veniam soluta labore quos deleniti ad totam libero voluptatum rerum quae, quia molestias nihil fugiat? Nulla sapiente officiis aliquid!</span>
          </div>
          <div className="timestamp">
            1 min ago
          </div>
        </article>
        <article className="chat">
          <div className="messageDiv">
             <img className='imageStyle' src={Man2}/>
             <span className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus quo nam minus? Repellendus omnis dolorum assumenda! Accusantium, alias quasi. Ipsa reprehenderit quasi rem quam reiciendis sapiente perferendis. Animi natus minima veniam soluta labore quos deleniti ad totam libero voluptatum rerum quae, quia molestias nihil fugiat? Nulla sapiente officiis aliquid!</span>
          </div>
          <div className="timestamp">
            1 min ago
          </div>
        </article>
        <article className="own">
          <div className="messageDiv">
             <img className='imageStyle' src={Man2}/>
             <span className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus quo nam minus? Repellendus omnis dolorum assumenda! Accusantium, alias quasi. Ipsa reprehenderit quasi rem quam reiciendis sapiente perferendis. Animi natus minima veniam soluta labore quos deleniti ad totam libero voluptatum rerum quae, quia molestias nihil fugiat? Nulla sapiente officiis aliquid!</span>
          </div>
          <div className="timestamp">
            1 min ago
          </div>
        </article>
      </section>
      <section className="sendChat">
        <textarea name="writeChat" id="writeChat"/>
        <button className='sendMessage'>Send</button>
      </section>
    </section>
  )
}
