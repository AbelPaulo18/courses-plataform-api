/*
  Warnings:

  - You are about to drop the `PlayerLinks` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[number,courses_id]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number,chapter_id]` on the table `videos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "PlayerLinks" DROP CONSTRAINT "PlayerLinks_video_id_fkey";

-- AlterTable
ALTER TABLE "videos" ADD COLUMN     "number" DECIMAL(65,30) NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "PlayerLinks";

-- CreateTable
CREATE TABLE "player_links" (
    "id" TEXT NOT NULL,
    "video_id" TEXT NOT NULL,

    CONSTRAINT "player_links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapters_number_courses_id_key" ON "chapters"("number", "courses_id");

-- CreateIndex
CREATE UNIQUE INDEX "videos_number_chapter_id_key" ON "videos"("number", "chapter_id");

-- AddForeignKey
ALTER TABLE "player_links" ADD CONSTRAINT "player_links_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
