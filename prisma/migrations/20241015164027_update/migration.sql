/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `matrixX` to the `LinearQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LinearQuestion" ADD COLUMN     "matrixX" JSONB NOT NULL;

-- DropTable
DROP TABLE "Question";

-- CreateTable
CREATE TABLE "RootQuestion" (
    "id" SERIAL NOT NULL,
    "equation" TEXT NOT NULL,
    "XL" INTEGER NOT NULL,
    "XR" INTEGER NOT NULL,
    "Gval" INTEGER NOT NULL,
    "SGval" INTEGER NOT NULL,

    CONSTRAINT "RootQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterpolationQuestion" (
    "id" SERIAL NOT NULL,
    "matrixX" JSONB NOT NULL,
    "matrixY" JSONB NOT NULL,
    "size" INTEGER NOT NULL,
    "xValue" INTEGER NOT NULL,

    CONSTRAINT "InterpolationQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExtrapolationQuestion" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,
    "xValue" INTEGER NOT NULL,
    "mOrder" INTEGER NOT NULL,
    "kOrder" INTEGER NOT NULL,
    "matrixX" JSONB NOT NULL,
    "matrixY" JSONB NOT NULL,
    "DataX" JSONB NOT NULL,
    "ArrayX" JSONB NOT NULL,

    CONSTRAINT "ExtrapolationQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntegrationQuestion" (
    "id" SERIAL NOT NULL,
    "low" INTEGER NOT NULL,
    "upper" INTEGER NOT NULL,
    "n" INTEGER NOT NULL,
    "equation" TEXT NOT NULL,

    CONSTRAINT "IntegrationQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DifferentiationQuestion" (
    "id" SERIAL NOT NULL,
    "equation" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "h" INTEGER NOT NULL,

    CONSTRAINT "DifferentiationQuestion_pkey" PRIMARY KEY ("id")
);
