document.getElementById('imageInput').addEventListener('change', handleImageChange);

function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = function() {
            document.getElementById('outputContainer').innerHTML = '';
            document.getElementById('outputContainer').appendChild(img);
        };
    }
}

function convertToPdf() {
    const element = document.getElementById('outputContainer');
    html2pdf(element, { 
        filename: 'output.pdf',
        output: 'download',
        html2canvas: { scale: 2 }
    });
}

function convertToJpg() {
    const element = document.getElementById('outputContainer').getElementsByTagName('img')[0];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = element.width * 2; // scale for higher resolution
    canvas.height = element.height * 2;
    ctx.drawImage(element, 0, 0, canvas.width, canvas.height);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg');
    link.download = 'output.jpg';
    link.click();
}

function convertToPng() {
    const element = document.getElementById('outputContainer').getElementsByTagName('img')[0];
    const link = document.createElement('a');
    link.href = element.src;
    link.download = 'output.png';
    link.click();
}

function convertToPdf() {
    const element = document.getElementById('outputContainer');

    // Using html2pdf API
    html2pdf(element, {
        filename: 'output.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).then((pdf) => {
        // Save the PDF to a file
        pdf.save('output.pdf');
    });
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    handleImage(file);
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}

function handleDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImage(file);
}

function handleImage(file) {
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = function() {
            document.getElementById('outputContainer').innerHTML = '';
            document.getElementById('outputContainer').appendChild(img);
        };
    }
}
function handleImage(file) {
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = function() {
            document.getElementById('outputContainer').innerHTML = '';
            
            // Set the maximum height to 300px (you can adjust as needed)
            img.style.maxHeight = '300px';
            
            document.getElementById('outputContainer').appendChild(img);
        };
    }
}
