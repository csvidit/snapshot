import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    if(req.method == "GET")
    {
        const { userID } = req.query;

    }
    else if(req.method == "POST")
    {
        const { userID, source } = req.body;
    }
    else 
    {
        return res.status(405).end();
    }
}