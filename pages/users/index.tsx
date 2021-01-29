import Link from "next/link"

import Layout from "../../components/Layout/Layout"
import List from "../../components/UserList/List"

const UsersPage = () => (
  <Layout title="Users List">
    <h1>Users List</h1>
    <List/>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default UsersPage
