document.getElementById('html-code').addEventListener('input', updateOutput);
document.getElementById('css-code').addEventListener('input', updateOutput);

function updateOutput() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    
    const outputFrame = document.getElementById('output-frame');
    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    
    outputDoc.open();
    outputDoc.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
        </body>
        </html>
    `);
    outputDoc.close();
}
