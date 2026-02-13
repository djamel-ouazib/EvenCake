import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
    const totalCustomers = await prisma.customer.count()

    return new Response(JSON.stringify(totalCustomers), {
        headers: { 'Content-Type': 'application/json' },
    })
}
