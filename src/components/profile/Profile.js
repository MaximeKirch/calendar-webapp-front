import React from 'react'
import './Profile.css'
import ProfileInfos from './ProfileInfos'
import ProfileAbout from './ProfileAbout'
import ProfileFutureVisits from './ProfileFutureVisits'
import ProfilePastVisits from './ProfilePastVisits'
import { useSelector } from 'react-redux'
import Signin from '../Signin/Signin'


export default function Profile() {
  const user = useSelector(store => store.user.user)

  return (
    user !== undefined ?
    <div className="profile">
        <div className="profileContainer">
        <div className="profileHeader">
            <img className="profilePicture" src={user.picture} alt='profile' />
            <h2> Bonjour, {user.firstname}</h2>
        </div>

        <div className="profileBody">
            <div className="profileDetails">
            <ProfileInfos FakeUser={user}/>
            <ProfileAbout FakeUser={user} />
            </div>

            <div className="profileVisits">
                {/* <ProfileFutureVisits FutureVisits={user.futureVisits} />
                <ProfilePastVisits PastVisits={user.pastVisits}/> */}
            </div>
        </div>
        </div>
    </div>
    :
    <Signin/>
              
  )
}
