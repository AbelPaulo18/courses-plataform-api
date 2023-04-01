/*
  Warnings:

  - A unique constraint covering the columns `[number,courses_id]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "chapters_number_courses_id_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "chapters_number_courses_id_key" ON "chapters"("number", "courses_id");
