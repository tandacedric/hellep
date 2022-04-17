// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../utils/dbConnect'
import Paque from '../../models/paque'

type Data = {
  id?:string,
  name: string,
  city?: string,
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  await dbConnect()

  switch(req.method){
    case "POST":
      const pet = await Paque.create(req.body)
      res.status(200).json({ id: "1", name: 'John Doe', city: "Yaoundé" })
      break;
    default:
      res.status(200).json({ name: 'John Doe' })
      break;
  
  }
}
