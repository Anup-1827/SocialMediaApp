import React, { useEffect, useState } from 'react'
import "../Styles/Components/Sidebar.scss";
import { RssFeed, Chat, Groups, Bookmark, HelpOutline, WorkOutline, Event, School, Group } from '@mui/icons-material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Man2 from "../assets/Man2.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../redux/Auth/AuthSlice';
import { userDetails } from '../API Calls/UserAPI';
import { Link } from "react-router-dom";

import { saveFriendList } from '../redux/FriendsList/FriendsSlice';
import { GetConversation, SaveConversation } from '../API Calls/ConversationAPI';

export default function Sidebar(props) {

    const {messanger, setUserChange} = props

    const user = useSelector(state => state.auth);
    const friendList = useSelector(state => state.friends)
    const dispatch = useDispatch();
    const [followerList, setfollowerList] = useState([]);
    // const [friendList, setFriendList] = useState([]);

    const userId = sessionStorage.getItem('userId');
    const PF = process.env.REACT_APP_PUBLIC_URL;

    useEffect(() => {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }, [])

    useEffect(() => {
        const fetchFollowersList = async () => {
            if (followerList.length === 0 && Object.keys(user.data).length === 0) {
                const userInfo = await userDetails(userId);
                dispatch(saveUser(userInfo))
                // setfollowerList(userInfo.followers);
            }
            else {
                const peopleList = [...user.data.followers, ...user.data.following];
                const friendList = peopleList.reduce((newArr, person)=>{
                    if(!newArr.includes(person)){
                        return [...newArr, person]
                    }
                    return newArr;
                }, [])
                setfollowerList(friendList);
            }
        }
        fetchFollowersList();

    }, [user])

    useEffect(() => {
        if (followerList && followerList.length !== 0) {

            const fetchFriendListAndConversationList = async () => {

                // Friends List
                const friends = await Promise.all(followerList.map(async (friendId) => {
                    const friendDetails = await userDetails(friendId);
                    return friendDetails;
                }))

                // Get Converstion List
                const conversationList = await GetConversation(userId);
                // console.log(conversationList);
                let listResponse = [];
                if (conversationList.isSuccess) {
                    listResponse = conversationList.response;
                }

                // Creating Conversation list
                if (followerList.length !== 0 && listResponse.length == 0) {
                    const saveConversationList = Promise.all(followerList.map(async (follower) => {
                        return await SaveConversation(userId, follower);
                    }))
                }
                else if (followerList !== 0 && listResponse.length !== 0) {
                    const conversationListArr = listResponse.map(list=>{
                        const members = list.member;
                        if(members[0] === userId){
                            return members[1]
                        }
                        else{
                            return members[0];
                        }
                    })

                    for(let i =0; i<followerList.length; i++){
                        if(!conversationListArr.includes(followerList[i])){
                            await SaveConversation(userId, followerList[i]);
                        }
                    }
                }


                dispatch(saveFriendList(friends));
            }
            fetchFriendListAndConversationList()
        }
    }, [followerList])

    const handleConvUser = (event)=>{
        if(messanger){
            let focusElement;   
            if(event.target.tagName === "DIV"){
                focusElement = event.target.parentElement;
            }
            else if(event.target.tagName === "IMG"){
                focusElement = event.target.parentElement.parentElement;
            }
            else{
               focusElement= event.target;
            }

            focusElement.classList.add('active');
            const friendList = document.querySelectorAll(".person");
            
            for(let i=0;i<friendList.length; i++){
                if(friendList[i] !== focusElement){
                    friendList[i].classList.remove('active');
                }
            }

            setUserChange(focusElement.dataset.id)

        }
    }

    return (
        <section className='sidebar'>
            <article className={messanger ? "hide" : ""}>
                <ul>
                    <li>
                        <RssFeed />
                        <span>
                            Feed
                        </span>
                    </li>
                    <li>
                        <Chat />
                        <span>
                            Chats
                        </span>
                    </li>
                    <li>
                        <PlayCircleOutlineIcon />
                        <span>
                            Videos
                        </span>
                    </li>
                    <li>
                        <Groups />
                        <span>
                            Groups
                        </span>
                    </li>
                    <li>
                        <Bookmark />
                        <span>
                            Bookmarks
                        </span>
                    </li>
                    <li>
                        <HelpOutline />
                        <span>
                            Questions
                        </span>
                    </li>
                    <li>
                        <WorkOutline />
                        <span>
                            Jobs
                        </span>
                    </li>
                    <li>
                        <Event />
                        <span>
                            Events
                        </span>
                    </li>
                    <li>
                        <School />
                        <span>
                            Courses
                        </span>
                    </li>
                </ul>
            </article>
            <hr className={messanger ? "hide" : ""} />
            <article>
                <div className="searchFriends">

                </div>
                <h1 className='friendListHeading'>Friends List</h1>
                <section className='friendList'>
                    {
                        friendList.map(friend => {
                            return (
                                <Link to={messanger?"":`/profile/${friend.userName}`}>

                                    <article data-id={friend._id} className='person' onClick = {handleConvUser}>
                                        <div>{friend.userName}</div>
                                        <div className='image'>
                                            <img className='imageStyle' src={friend.profilPicture != "" ? friend.profilPicture : `${PF}/noAvatar.png`} />
                                        </div>
                                    </article>
                                </Link>
                            )
                        })
                    }
                    
                </section>
            </article>
        </section>
    )
}
