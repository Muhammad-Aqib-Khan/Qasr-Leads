import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getSheetsInstance() {
    const credentials = JSON.parse(process.env.GOOGLE_CREDS || "{}");

    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: SCOPES,
    });

    return google.sheets({ version: "v4", auth });
}

export async function addLead(name: string, email: string, whatsapp?: string) {
    const sheets = await getSheetsInstance();
    const spreadsheetId = process.env.SHEET_ID;

    // 1. Check for duplicates
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Sheet1!B:B", // Assuming Email is in Column B
    });

    const rows = response.data.values || [];
    const exists = rows.some((row: string[]) => row[0]?.toLowerCase() === email.toLowerCase());

    if (exists) {
        throw new Error("This email is already registered in the Royal Court.");
    }

    // 2. Append new row
    const date = new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" });

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:D",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [[name, email, whatsapp || "N/A", date]],
        },
    });

    return { success: true };
}
