import React, {useState, useContext} from 'react'
import Rightbar from '../Components/Rightbar'
import Topbar from "../Components/Topbar"
import Man2 from "../assets/Man2.jpg"

import "../Styles/Pages/Messanger.scss"
import Sidebar from '../Components/Sidebar'
import ChatWindow from '../Components/ChatWindow'
import { Context } from '../App'

function Messanger() {
    const [userChange, setUserChange ] = useState();
    const socket = useContext(Context)
    return (
        <main>
            <Topbar />
            <section className='chatApplication'>
                <Sidebar userChange={userChange} setUserChange={setUserChange}  messanger={true}/>
                <ChatWindow userChange={userChange} socket={socket}/>
                <Rightbar messanger={true} />

            </section>
        </main>
    )
}

export default Messanger