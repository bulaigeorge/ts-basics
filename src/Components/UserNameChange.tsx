import React from 'react'
import { UserData } from '../types'

interface IUserNameChangeComponentProperties {
    user: UserData
    onNameChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({user, onNameChange}: IUserNameChangeComponentProperties) => {
  return (
    <>
        <h1>Change the name of {user.name} here</h1>
        <input type="text" value={user.name} onChange={onNameChange}/>
    </>
    
  )
}

export default UserNameChange