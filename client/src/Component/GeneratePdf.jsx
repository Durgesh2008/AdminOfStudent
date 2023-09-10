import React from 'react';
import html2PDF from 'jspdf-html2canvas';


const GenericPdfDownloader = ({rootElementId }) => {
    const downloadPdfDocument = () => {
        const pages = document.getElementsByClassName(rootElementId);
          html2PDF(pages, {
            jsPDF: {
              format: 'a4',
            },
            imageType: 'image/jpeg',
            output: './pdf/generate.pdf'
       
        });
    }

    return <button onClick={downloadPdfDocument}>Download Pdf</button>

}

export default GenericPdfDownloader;