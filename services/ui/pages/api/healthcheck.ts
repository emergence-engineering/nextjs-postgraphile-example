import {NextApiRequest, NextApiResponse} from "next";

export default function healthcheck(req: NextApiRequest, res: NextApiResponse<string>) {
    //TODO: implement your healthcheck logic here
    res.status(200).send("")
}