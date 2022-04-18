import { useEffect, useState } from "react"
import axios from 'axios'
import s from './SearchList.module.css'
import { UserDescription } from "../Description/UserDescription"
import Preloader from "../../common/preloader/Preloader"

type propsType = {
    searchValue: string
}



export const SearchList:React.FC<propsType> = ({searchValue}) => {
    let [users, setUsers] = useState<any>([])
    let [selectedUser, setSelectedUser]: any = useState<string | null>()

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser
        }
    }, [selectedUser])

    useEffect(() => {
        if (!searchValue){
            return setUsers([])
        }
        axios.get<any,any>(`https://api.github.com/search/users?q=${searchValue}`)
        .then(response => setUsers(response.data.items))

    }, [searchValue])

    
    if (!users) return <Preloader/>
    return <div className={s.usersBlock}>
        <ul className={s.usersList}>
            {users.map((u:any) =>
                <li key={u.id} className={selectedUser === u.login ? s.selected : s.unselected}
                    onClick={() => { 
                        setSelectedUser(u.login)
                        
                     }}>
                    <p>{u.login}</p>
                </li>)}
        </ul>
        
        {selectedUser&&<UserDescription searchValue={searchValue} selectedUser={selectedUser}/>}
    </div>

}