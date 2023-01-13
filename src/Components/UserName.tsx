import { UserData } from '../types'

interface IUserNameComponentProperties {
    user: UserData
}

const UserName = ({user}: IUserNameComponentProperties) => {
  return (
    <h1>Hello {user.name}</h1>
  )
}

export default UserName