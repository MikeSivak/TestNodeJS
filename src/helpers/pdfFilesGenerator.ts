import PdfPrinter from "pdfmake";
import doc from "../pdf/doc";
import { Roboto } from "../pdf/fonts";
import { UserInput } from "../models/user.model";

export const generatePdf = async (user: UserInput): Promise<Buffer | Boolean> => {

    if (user.image === null) {
        return false;
    }
    
    const printer = new PdfPrinter({ Roboto });
    const docDefinition = doc(user);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);

    return new Promise((resolve, reject) => {
        try {
            const chunks: Uint8Array[] = [];
            pdfDoc.on('data', (chunk) => chunks.push(chunk));
            pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
            pdfDoc.end();
        } catch (err) {
            reject(err);
        }
    });
}