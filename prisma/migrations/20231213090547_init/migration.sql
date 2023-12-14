-- CreateTable
CREATE TABLE "PostContactUs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "PostContactUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostPartnerWithUs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "eduQual" TEXT NOT NULL,

    CONSTRAINT "PostPartnerWithUs_pkey" PRIMARY KEY ("id")
);
