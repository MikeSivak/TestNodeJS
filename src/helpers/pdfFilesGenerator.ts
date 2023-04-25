import PdfPrinter from "pdfmake";
import fs from 'fs';

const fonts = {
    Roboto: {
        normal: 'jsnode/fonts/DejaVuSans.ttf',
        bold: 'jsnode/fonts/DejaVuSans-Bold.ttf',
        italics: 'jsnode/fonts/DejaVuSans.ttf',
        bolditalics: 'jsnode/fonts/DejaVuSans.ttf'
    }
}

export const generatePdf = (firstName: string, lastName: string, image: string) => {
    const printer = new PdfPrinter(fonts);

    const docDefinition = {
        content: [
            {
                layout: 'noBorders',
                fontSize: 11,
                table: {
                    widths: ['100%'],
                    body: [
                        [{ text: 'First name:', margin: [0, 10, 0, 0] }],
                        [firstName],
                        ['Last name:'],
                        [lastName],
                    ]
                }
            },
        ]
    }
    const options = {};
    const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
    pdfDoc.pipe(fs.createWriteStream(`${firstName}_${lastName}_${Date.now()}.pdf`));
    pdfDoc.end();
}