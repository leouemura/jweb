// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
type Data = {
    data?: Record<string, any>
    message?: string
}

const prisma = new PrismaClient( )

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {method} = req

    if(method === "GET"){
        const users = await prisma.user.findMany()

        return res.status(200).json({
            data: users,
        })
    }
    if(method === "POST"){
        const {name} = req.body

        const user = await prisma.user.create({
            data: {
                name,
            }
        })

        return res.status(201).json({
            data: user,
        })
    }

    return res.status(404).json({message: 'Route not found.'})
}
