import { NextApiRequest, NextApiResponse } from "next"
import { mockUserContext } from "../../../state/mockData/userContext"

const MOCK_USERNAME = "hajar"
const MOCK_PASSWORD = "password"

type RequestBody = {
    auth: string
}

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    const encodedAuth = Buffer.from(MOCK_USERNAME + ":" + MOCK_PASSWORD).toString("base64");
  try {
    const body: RequestBody = _req.body
    if (encodedAuth === body.auth) {
        res.status(200).json(mockUserContext);
    } else {
        res.status(403).json({
            first: encodedAuth,
            sent: body.auth
        })
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
