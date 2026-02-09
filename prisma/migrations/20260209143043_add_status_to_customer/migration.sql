-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'IN_PROGRESS', 'READY', 'DELIVERED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PENDING';
