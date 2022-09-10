import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../Components/Sidebar'
import EditIcon from '@mui/icons-material/Edit';

import "../Styles/Pages/Profile.scss"
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, userDetails } from '../API Calls/UserAPI'
import Feed from '../Components/Feed'
import { useParams } from 'react-router-dom';
import { handleUploadingFile } from '../FireBase/FileUpload';
import { STATUS } from '../config';
import { saveUser } from '../redux/Auth/AuthSlice';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';


export default function Profile() {
    const user = useSelector(state => state.auth.data);
    const dispatch = useDispatch();
    const { id } = useParams();
    const editCoverPhotoRef = useRef();
    const editProfilePhotoRef = useRef();
    const followUnfollowBtnRef = useRef();
    const userId = sessionStorage.getItem('userId');
    const userName = sessionStorage.getItem('userName');
    const PF = process.env.REACT_APP_PUBLIC_URL;
    const [userDetailedInfo, setUserDetailedInfo] = useState({});
    const [userfriendList, setUserfriendList] = useState([])

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (Object.keys(user).length == 0) {

                const userInfo = await userDetails('', id);
                dispatch(saveUser(userInfo))
                setUserDetailedInfo(userInfo);
            }

        }
        if (id !== userName) {
            editCoverPhotoRef.current.classList.add('hide');
            editProfilePhotoRef.current.classList.add('hide');
        }
        else {
            followUnfollowBtnRef.current.classList.add('hide');
        }

        fetchUserDetails();
    }, [])

    useEffect(()=>{
        const fetchUserFriendsList = async()=>{
            if(Object.keys(user).length !=0){
                const friendsFollowers = user.followers;
            const userFollowersList = await Promise.all(friendsFollowers.map(async (userFriendId)=>{
                const userFriendsDetails = await userDetails(userFriendId);
                return userFriendsDetails;
            })) 
            setUserfriendList(userFollowersList);
            }
            
        }
        fetchUserFriendsList();
    },[user, id])



    const handleEditPhoto = async (event) => {
        if (event.target?.type === 'file' && event.target.value !== "") {
            if (event.target.name === "editCoverPhoto") {
                const uploadResponse = await handleUploadingFile(event, "CoverPhoto");
                const updateData = { coverPicture: uploadResponse.imageUrl.toString() }
                const updateUserRes = await updateUser(userId, updateData);
                if (updateUserRes.isSuccess) {
                    alert("CoverPhtoto Uploaded Successfully");
                    const userInfo = await userDetails(userId);
                    dispatch(saveUser(userInfo))
                    setUserDetailedInfo(userInfo);
                }
                else {
                    alert("Unable to Upload CoverPhtoto");
                }
            }
            else if (event.target.name === "editProfilePhoto") {
                const uploadResponse = await handleUploadingFile(event, "ProfilePhoto");
                const updateData = { profilPicture: uploadResponse.imageUrl }
                const updateUserRes = await updateUser(userId, updateData);
                if (updateUserRes.isSuccess) {
                    alert("ProfilePhoto Uploaded Successfully");
                    const userInfo = await userDetails(userId);
                    dispatch(saveUser(userInfo))
                    setUserDetailedInfo(userInfo);
                }
                else {
                    alert("ProfilePhoto to Upload CoverPhtoto");
                }
            }
        };
    }


    return (
        <section className="profileInfo">
            <Sidebar />
            <article className='aboutProfile'>
                <section className="ProfilePics">
                    <img src={(user && user?.data?.coverPicture && user.data?.coverPicture !== "") ? user.data.coverPicture
                        : (userDetailedInfo && userDetailedInfo?.coverPicture && userDetailedInfo?.coverPicture !== "") ? userDetailedInfo.coverPicture
                            : `${PF}/noAvatar.png`}
                        alt="coverphoto" className="CoverPhoto" />
                    <img src={(user && user?.data?.profilPicture && user?.data?.profilPicture !== "") ? user.data.profilPicture
                        : (userDetailedInfo && userDetailedInfo?.profilPicture && userDetailedInfo?.profilPicture !== "") ? userDetailedInfo.profilPicture
                            : `${PF}/noAvatar.png`}
                        alt="profilePhoto" className='profilePhoto' />

                    <label ref={editCoverPhotoRef} htmlFor='editCoverPhoto' title='Edit Cover Photo' className='editCoverPhoto'>
                        <EditIcon />
                        <input onChange={handleEditPhoto} type="file" className='hide editBtn' name="editCoverPhoto" id="editCoverPhoto" />
                    </label>
                    <label ref={editProfilePhotoRef} htmlFor='editProfilePhoto' title='Edit Profile Photo' className='editProfilePhoto'>
                        <EditIcon />
                        <input onChange={handleEditPhoto} type="file" className='hide editBtn' name="editProfilePhoto" id="editProfilePhoto" />
                    </label>

                </section>
                <section className="nameandDesc">

                    <h1>
                        {(user && user?.data?.useName) ? user.data.userName
                            : userDetailedInfo?.userName
                        }

                    </h1>
                    <p>
                        {(user && user?.data?.desc) ? user.data.desc
                            : userDetailedInfo?.desc
                        }
                    </p>
                </section>
                <section className="details">
                    <Feed profile={true} />
                    <article className='userInfo'>
                        <div>

                            <button ref={followUnfollowBtnRef} className='followUnFollowBtn'>
                                Follow
                            </button>
                        </div>
                        <div className="aboutUser">
                            <h1>User Information</h1>
                            <div className="city">
                                <b>City: </b>
                                <span>
                                    {(user && user?.data?.city) ? user.data.city
                                        : userDetailedInfo?.city
                                    }
                                </span>
                            </div>
                            <div className="from">
                                <b>From: </b>
                                <span>
                                    {(user && user?.data?.from) ? user.data.from
                                        : userDetailedInfo?.from
                                    }
                                </span>
                            </div>
                            <div className="relationship">
                                <b>Relationship: </b>
                                <span>
                                    Single
                                </span>
                            </div>
                        </div>
                        <div className="userFriends">
                            <h1>{`${id}'s`} Friends</h1>
                            <div className="friendList">
                                {
                                    userfriendList.map(userFriend=>{
                                        return(
                                            <div className="friend">
                                                <Link to={`/profile/${userFriend.userName}`}>
                                    <img className='friendImage' src={userFriend.profilPicture !=""?userFriend.profilPicture:`${PF}/noAvatar.png`} />
                                    <p>{userFriend.userName}</p>
                                                </Link>
                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </article>
                </section>
            </article>
        </section>
    )
}
