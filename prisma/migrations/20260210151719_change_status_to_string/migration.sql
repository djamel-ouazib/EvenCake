-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "typeOfEvent" TEXT,
    "eventDate" TIMESTAMP(3),
    "typeOfCake" TEXT,
    "flavors" TEXT,
    "numberOfServings" INTEGER,
    "decoration" TEXT,
    "personalizedMessage" TEXT,
    "totalPrice" DOUBLE PRECISION,
    "depositPaid" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
