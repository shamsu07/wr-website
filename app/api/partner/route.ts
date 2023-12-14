import { prisma } from "@../../../db";
import { type NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {

    try {

        const { name, mobile, email, location, dob, eduQual } = await request.json();

        const postContact = await prisma.postPartnerWithUs.create({
            data: {
                name: name,
                mobile: mobile,
                email: email,
                location: location,
                dob: dob,
                eduQual: eduQual
            },
        });

        if (postContact) {
            console.log("Partner stored in the database:", postContact);
            const allContacts = await prisma.postPartnerWithUs.findMany();

            // Output the retrieved data
            console.log("All Partners in the Database:", allContacts);

            return NextResponse.json(
                { message: "Partner Stored to Database" },
                { status: 200 }
            );
        } else {
            console.log("Failed to store partner in the database");
            return NextResponse.json(
                { message: "Error storing partner information" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error submitting partner information" },
            { status: 500 }
        );
    }
}