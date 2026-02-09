export type order = {
    id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    typeOfEvent: string
    evntDate: number
    typeOfCake: string
    flavors: string
    numberOfServings: number
    decoration: string
    personalizedMessage: string
    totalPrice: number
    depositPaid: number
    status:
        | 'PENDING'
        | 'CONFIRMED'
        | 'IN_PROGRESS'
        | 'READY'
        | 'DELIVERED'
        | 'CANCELLED'
}
