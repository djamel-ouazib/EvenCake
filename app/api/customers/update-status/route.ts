import { prisma } from '@/app/lib/prisma/prisma'

export async function POST(req: Request) {
    const { id, status } = await req.json()

    const customer = await prisma.customer.update({
        where: { id },
        data: { status },
    })

    return Response.json(customer)
}
