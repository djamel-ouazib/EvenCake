import Input from '@/app/ui/dashboard/Input'

export default function NewOrder() {
    return (
        <main className="text-zinc-600 px-4 py-2 ">
            <h1 className="text-2xl text-black text-center">
                Add a new order{' '}
            </h1>
            <p className="text-center">
                take few minute to add a new order for your customrs
            </p>
            <form action="" method="post">
                <div className="p-6  rounded-xl max-w-3xl m-auto  ">
                    {/* first name & last name */}
                    <div className="flex gap-3 mb-3">
                        <div className="flex-1">
                            <label
                                htmlFor="firstName"
                                className="text-black font-semibold "
                            >
                                first name{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="customer"
                                placeHolder="First name"
                                type="text"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="lastName"
                                className="text-black font-semibold"
                            >
                                Last name{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="lastName"
                                placeHolder="Last name"
                                type="text"
                            />
                        </div>
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label
                            htmlFor="Email"
                            className="text-black font-semibold"
                        >
                            Email <span className="text-red-600">*</span>
                        </label>
                        <Input label="Email" placeHolder="Email" type="email" />
                    </div>
                    {/* phone */}
                    <div className="mb-3">
                        <label
                            htmlFor="Phone number"
                            className="text-black font-semibold"
                        >
                            Phone number <span className="text-red-600">*</span>
                        </label>
                        <Input
                            label="Phone number"
                            placeHolder="Phone number"
                            type="tel"
                        />
                    </div>
                    {/* EVENT */}
                    <div className='flex gap-3 mb-3"'>
                        <div className="flex-1">
                            <label
                                htmlFor="typeEvent"
                                className="text-black font-semibold "
                            >
                                Type of event{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="event"
                                placeHolder="(birthday, wedding, etc.)"
                                type="text"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="EventDate"
                                className="text-black font-semibold "
                            >
                                Event Date{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="eventDate"
                                placeHolder=""
                                type="date"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="TypeOfCake"
                                className="text-black font-semibold "
                            >
                                Type of Cake{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="typeCake"
                                placeHolder="Layer Cake"
                                type="text"
                            />
                        </div>
                    </div>
                    {/* details event */}
                    <div className='flex gap-3 mb-3"'>
                        <div className="flex-1">
                            <label
                                htmlFor="flavors"
                                className="text-black font-semibold "
                            >
                                Flavors <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="flavors"
                                placeHolder="chocolate"
                                type="text"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="EventDate"
                                className="text-black font-semibold "
                            >
                                Number of serving{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="serving"
                                placeHolder="0"
                                type="number"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="decoration"
                                className="text-black font-semibold "
                            >
                                Decoration{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="decoration"
                                placeHolder="decoration"
                                type="text"
                            />
                        </div>
                    </div>
                    {/* personalized message */}
                    <div className="mb-3">
                        <label
                            htmlFor="Personalized message"
                            className="text-black font-semibold"
                        >
                            Personalized message
                            <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            name="personalizedMessage"
                            className="block border border-zinc-400 w-full"
                            placeholder="Enter the message to write on the cake"
                        ></textarea>
                    </div>
                    {/* price & deposit & status */}
                    <div className='flex gap-3 mb-3"'>
                        <div className="flex-1">
                            <label
                                htmlFor="Total price"
                                className="text-black font-semibold "
                            >
                                Total price{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="Total price"
                                placeHolder="Total price"
                                type="number"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="Deposit paid"
                                className="text-black font-semibold "
                            >
                                Deposit paid{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                label="serving"
                                placeHolder="0"
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        {' '}
                        <button
                            type="submit"
                            className="bg-blue-700 w-full text-white py-3 px-1 rounded-[7px]"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}
