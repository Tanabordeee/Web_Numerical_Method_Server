-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "equation" VARCHAR(255) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
