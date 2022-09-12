import React from 'react'
import Rightbar from '../Components/Rightbar'
import Topbar from "../Components/Topbar"
import Man2 from "../assets/Man2.jpg"

import "../Styles/Pages/Messanger.scss"
import Sidebar from '../Components/Sidebar'
import ChatWindow from '../Components/ChatWindow'

function Messanger() {
    return (
        <main>
            <Topbar />
            <section className='chatApplication'>
                <Sidebar messanger={true}/>
                <ChatWindow/>
                <Rightbar messanger={true} />

            </section>
        </main>
    )
}

export default Messanger