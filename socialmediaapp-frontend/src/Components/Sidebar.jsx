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

export default function Sidebar({ messanger }) {

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
                setfollowerList(user.data.followers);
            }
        }
        fetchFollowersList();

    }, [user])

    useEffect(() => {
        if (followerList && followerList.length !== 0) {
            console.log(followerList);
            const fetchFriendList = async () => {
                const friends = await Promise.all(followerList.map(async (friendId) => {
                    const friendDetails = await userDetails(friendId);
                    return friendDetails;
                }))
                dispatch(saveFriendList(friends));

            }
            fetchFriendList()
        }
    }, [followerList])

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
                <h1 className='friendListHeading'>Friends List</h1>
                <section className='friendList'>
                    {
                        friendList.map(friend => {
                            return (
                                <Link to={`/profile/${friend.userName}`}>

                                    <article className='person'>
                                        <div>{friend.userName}</div>
                                        <div className='image'>
                                            <img className='imageStyle' src={friend.profilPicture != "" ? friend.profilPicture : `${PF}/noAvatar.png`} />
                                        </div>
                                    </article>
                                </Link>
                            )
                        })
                    }
                    <article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article>
                    <article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article><article className='person'>
                        <div className='image'>
                            <img className='imageStyle' src={Man2} />
                            <span className='online'></span>
                        </div>
                        <span>John Doe</span>
                    </article>
                </section>
            </article>
        </section>
    )
}
