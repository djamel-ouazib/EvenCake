import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
    const customers = await prisma.customer.findMany()
    return new Response(JSON.stringify(customers), {
        headers: { 'Content-Type': 'application/json' },
    })
}
