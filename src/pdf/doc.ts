import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { UserInput } from '../models/user.model';

const doc = (user: UserInput): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        content: [
            { text: 'Test (Node.js developer)', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['First Name ', user.firstName],
                        ['Last Name', user.lastName],
                    ],
                },
            },
            {
                image: `${user?.image}`,
                style: 'subheader',
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10],
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5],
            },
            tableExample: {
                margin: [0, 5, 0, 15],
            },
        },
    };

    return docDefinition;
}

export default doc;