import * as React from "react"

import UserDetail from "./UserDetail/UserDetail"
import { User } from "../../interfaces"

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <UserDetail user={user} />
)

export default ListDetail
