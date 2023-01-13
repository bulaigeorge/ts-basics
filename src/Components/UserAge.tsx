import { UserData } from '../types'

interface IUserAgeComponentProperties {
    user: UserData;
}

const UserAge = ({user}: IUserAgeComponentProperties) => {
  return (
    <p>Age: {user.age} </p>
  )
}

export default UserAge