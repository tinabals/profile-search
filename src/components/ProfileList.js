import React, { useState } from 'react'
import {UserData} from "./data/profiles"


const Profile = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleInput =(event) =>{
        const value = event.target.value;
        console.log(value)
        setSearchValue(value);
    }

const SearchResult = UserData.filter(user =>{
    return user.title.toLowerCase().includes(searchValue.toLowerCase()) || user.firstName.toLowerCase().includes(searchValue.toLowerCase()) || user.lastName.toLowerCase().includes(searchValue.toLowerCase())|| user.id.toLowerCase().includes(searchValue.toLowerCase)


})

const ListUsers = SearchResult.map((user, key )=> {
    let UserName =` ${user.title}. ${user.firstName} ${user.lastName}`;
    return <div key ={user.id} className='user-wraper' value={searchValue}>
        <div>
            <img src={user.picture} alt ={ user.firstName} className='user-img'/>
        </div>
            <div className='name-id-wrapper'>
                <p className= "id-pargh">{user.id}</p>
                <p className='name-pargh'>{UserName}</p>
            </div>
    </div>

})

 return (
    <div className='input-for-profile' >
                   <input type='text' placeholder='Search name...'   value ={searchValue} onInput={handleInput}  />
                   <div className='profile'>
                        {ListUsers}
                   </div>
    </div>
  )
}

export default Profile;