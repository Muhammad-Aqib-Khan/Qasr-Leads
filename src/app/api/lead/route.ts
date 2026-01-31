import { NextResponse } from "next/server";
import { addLead } from "@/lib/googleSheets";

export async function POST(req: Request) {
    try {
        const { firstName, email, whatsapp } = await req.json();

        // Basic validation
        if (!firstName || !email) {
            return NextResponse.json(
                { error: "First name and email are required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Add to Google Sheets
        await addLead(firstName, email, whatsapp);

        return NextResponse.json(
            { message: "Welcome to the Royal Court 👑" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Lead submission error:", error);

        // Check for custom error message from addLead
        const errorMessage = error.message || "Something went wrong. Please try again later.";
        const status = error.message.includes("already registered") ? 409 : 500;

        return NextResponse.json(
            { error: errorMessage },
            { status }
        );
    }
}
