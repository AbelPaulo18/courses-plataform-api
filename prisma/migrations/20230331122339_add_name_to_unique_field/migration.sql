/*
  Warnings:

  - A unique constraint covering the columns `[number,courses_id,name]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number,chapter_id,name]` on the table `videos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "chapters_number_courses_id_key";

-- DropIndex
DROP INDEX "videos_number_chapter_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "chapters_number_courses_id_name_key" ON "chapters"("number", "courses_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "videos_number_chapter_id_name_key" ON "videos"("number", "chapter_id", "name");
