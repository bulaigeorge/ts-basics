import { UserData } from "../types"

interface IUserAddressComponentProperties {
    user: UserData
}

const UserAddress = ({user}: IUserAddressComponentProperties) => {
  return (
    <p>Address: {user.address}</p>
  )
}

export default UserAddress