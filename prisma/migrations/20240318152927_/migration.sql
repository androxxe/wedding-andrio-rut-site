-- CreateTable
CREATE TABLE "Wishes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "wish" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Wishes_id_key" ON "Wishes"("id");
