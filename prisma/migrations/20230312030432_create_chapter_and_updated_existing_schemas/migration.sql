/*
  Warnings:

  - Made the column `update_at` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `duration` on the `courses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "update_at" SET NOT NULL,
ALTER COLUMN "update_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "chapters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),
    "courses_id" TEXT NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapters_name_key" ON "chapters"("name");

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_courses_id_fkey" FOREIGN KEY ("courses_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
