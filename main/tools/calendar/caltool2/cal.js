//visting tool pages

function visit(url) {
  window.location.href = url;
}
//nav bar drop down code

let navbar_ul = document.getElementById("navbar-ul");
function drop_box() {
  if (navbar_ul.style.height == "10.1vh") {
    navbar_ul.style.height = "0vh";
  } else {
    navbar_ul.style.height = "10.1vh";
  }
}
const generatePDF = async () => {
  const { PDFDocument, rgb } = PDFLib;
  const filename = "see" + ".pdf";
  const exBytes = await fetch(filename).then((res) => {
    return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  pdfDoc.registerFontkit(fontkit);

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  //   document.querySelector("#mypdf").src = uri;
  saveAs(uri, "Front page.pdf", { autoBom: true });
};
function tt() {
  generatePDF();
}
