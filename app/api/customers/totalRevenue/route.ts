import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
    const result = await prisma.customer.aggregate({
        _sum: {
            totalPrice: true,
        },
    })
    const TotalRevenue = result._sum.totalPrice ?? 0
    console.log('api totalRevenue: ', TotalRevenue)
    return new Response(JSON.stringify(TotalRevenue), {
        headers: { 'Content-Type': 'application/json' },
    })
}
