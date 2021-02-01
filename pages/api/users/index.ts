import { NextApiRequest, NextApiResponse } from "next"
import { mockUserManagement } from "../../../state/mockData/users"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(mockUserManagement)) {
      throw new Error("Cannot find user data")
    }

    res.status(200).json(mockUserManagement);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
