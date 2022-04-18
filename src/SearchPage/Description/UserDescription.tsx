import axios from 'axios'
import { useEffect, useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import s from './UserDescription.module.css'


type propsType = {
    selectedUser:any
    searchValue:any
}



export const UserDescription: React.FC<propsType> = ({selectedUser,searchValue}) => {
    let [userProfile, setUserProfile]:any = useState()
    let [localSearchValue, setLocalSearchValue] = useState()
   

   useEffect(() => {
        if (localSearchValue !== searchValue){
            setUserProfile(null)
            setLocalSearchValue(searchValue)
        }
   },[localSearchValue, searchValue])


    useEffect(() => {
        axios.get<any, any>(`https://api.github.com/users/${selectedUser}`)
            .then(response => setUserProfile(response.data))
    }, [selectedUser])

    
    if (!userProfile) return <Preloader/>

    return <div className={s.userDescription}>

        <img className={s.avatar} src={userProfile.avatar_url} alt="" />

        <div>
            {userProfile.login &&
                <div className={s.prop}>
                    <div className={s.propName}>login</div> 
                    <div className={s.propDescription}>{userProfile.login}</div>
                </div>}
            {userProfile.name &&
                <div className={s.prop}>
                    <div className={s.propName}>Name</div>
                    <div className={s.propDescription}>{userProfile.name}</div>
                </div>}
            {userProfile.location &&
                <div className={s.prop}>
                    <div className={s.propName}>Location</div> 
                    <div className={s.propDescription}>{userProfile.location}</div>
                </div>}
            {userProfile.follower > 0 &&
                <div className={s.prop}>
                    <div className={s.propName}>Followers</div>
                    <div className={s.propDescription}>{userProfile.followers}</div>
                </div>}
            {userProfile.following > 0 &&
                <div className={s.prop}>
                    <div className={s.propName}>Following</div> 
                    <div className={s.propDescription}>{userProfile.following}</div>
                </div>}
            {userProfile.public_repos &&
                <div className={s.prop}>
                    <div className={s.propName}>Public repositories</div> 
                    <div className={s.propDescription}>{userProfile.public_repos}</div>
                </div>}
            {userProfile.url &&
                <div className={s.prop}>
                    <div className={s.propName}>Public Link</div>
                    <div className={s.propDescription}>{userProfile.url}</div>
                </div>}
        </div>

    </div>

}