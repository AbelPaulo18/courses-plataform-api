-- CreateTable
CREATE TABLE "PlayerLinks" (
    "id" TEXT NOT NULL,
    "video_id" TEXT NOT NULL,

    CONSTRAINT "PlayerLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayerLinks" ADD CONSTRAINT "PlayerLinks_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
