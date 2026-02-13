'use server'

import { prisma } from '@/app/lib/prisma/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const FormSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phoneNumber: z.string().min(6),
    typeOfEvent: z.string().optional(),
    eventDate: z.string(),
    typeOfCake: z.string().optional(),
    flavors: z.string().optional(),
    numberOfServings: z.string(),
    decoration: z.string().optional(),
    personalizedMessage: z.string().optional(),
    totalPrice: z.string(),
    depositPaid: z.string(),
})

export async function addCustomer(formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        typeOfEvent: formData.get('typeOfEvent'),
        eventDate: formData.get('eventDate'),
        typeOfCake: formData.get('typeOfCake'),
        flavors: formData.get('flavors'),
        numberOfServings: formData.get('numberOfServings'),
        decoration: formData.get('decoration'),
        personalizedMessage: formData.get('personalizedMessage'),
        totalPrice: formData.get('totalPrice'),
        depositPaid: formData.get('depositPaid'),
    })

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        redirect('/dashboard')
    }

    const data = validatedFields.data

    await prisma.customer.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            typeOfEvent: data.typeOfEvent,
            eventDate: new Date(data.eventDate),
            typeOfCake: data.typeOfCake,
            flavors: data.flavors,
            numberOfServings: Number(data.numberOfServings),
            decoration: data.decoration,
            personalizedMessage: data.personalizedMessage,
            totalPrice: Number(data.totalPrice),
            depositPaid: Number(data.depositPaid),
        },
    })
    revalidatePath('/dashboard/customers')
    redirect('/dashboard/customers')
}

export async function UpdateStatus(id: number, status: string) {
    try {
        await prisma.customer.update({
            where: {
                id,
            },
            data: {
                status: status,
            },
        })
    } catch (error) {
        console.error(error)
    }
    revalidatePath('/dashboard/customers')
    redirect('/dashboard/customers')
}
