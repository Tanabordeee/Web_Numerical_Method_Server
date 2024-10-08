/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "LinearQuestion" (
    "id" SERIAL NOT NULL,
    "matrixA" JSONB NOT NULL,
    "matrixB" JSONB NOT NULL,

    CONSTRAINT "LinearQuestion_pkey" PRIMARY KEY ("id")
);
