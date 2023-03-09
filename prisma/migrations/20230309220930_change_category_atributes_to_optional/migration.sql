-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "create_at" DROP NOT NULL,
ALTER COLUMN "update_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "create_at" DROP NOT NULL;
