import React from 'react'
import "../Styles/Components/Feed.scss"
import Post from './Post'
import Share from './Share'

export default function Feed() {
  return (

    <section className='feed'>
        <section>
            <Share/>
            <Post/>
        </section>
    </section>
  )
}
