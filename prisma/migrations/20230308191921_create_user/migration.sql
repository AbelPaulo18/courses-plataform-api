-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'TEACHER');

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "update_at" DROP DEFAULT,
ALTER COLUMN "update_at" SET DATA TYPE DATE;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
