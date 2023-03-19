-- CreateTable
CREATE TABLE "Users_Tokens" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_Tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users_Tokens" ADD CONSTRAINT "Users_Tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
