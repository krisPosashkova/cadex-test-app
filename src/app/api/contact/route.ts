import { NextResponse } from "next/server";

interface ContactRequest {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data: ContactRequest = await request.json();
        const { name, email, message } = data;

        console.log("The form data is received:", { name, email, message });

        return NextResponse.json(
            { message: `Thank you for your interest, ${name}` },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { message: "Error processing contact form" },
            { status: 500 }
        );
    }
}
