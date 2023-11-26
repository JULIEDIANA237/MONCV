document.getElementById('downloadButton').addEventListener('click', function() {
  var filename = 'mon-cv.pdf';

  html2pdf().set({
    margin: 10,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(document.body).save();
});






