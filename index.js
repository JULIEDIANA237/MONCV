function convertHTMLtoPDF() {
  const { jsPDF } = window.jspdf;

  let doc = new jsPDF('p', 'mm', [1500, 1500]);
  let pdfjs = document.querySelector('#divID');

  doc.html(pdfjs, {
      callback: function(doc) {
          doc.save("newpdf.pdf");
      },
      x: 12,
      y: 12
  });                
}            