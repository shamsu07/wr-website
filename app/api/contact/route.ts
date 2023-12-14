import { prisma } from "@../../../db";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, mobile, email, subject, details } = await request.json();

    const postContact = await prisma.postContactUs.create({
      data: {
        name: name,
        mobile: mobile,
        email: email,
        subject: subject,
        details: details,
      },
    });

    if (postContact) {
      console.log("Contact stored in the database:", postContact);
      const allContacts = await prisma.postContactUs.findMany();

      // Output the retrieved data
      console.log("All Contacts in the Database:", allContacts);

      return NextResponse.json(
        { message: "Contact Stored to Database" },
        { status: 200 }
      );
    } else {
      console.log("Failed to store contact in the database");
      return NextResponse.json(
        { message: "Error storing contact information" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error submitting contact information" },
      { status: 500 }
    );
  }
}
