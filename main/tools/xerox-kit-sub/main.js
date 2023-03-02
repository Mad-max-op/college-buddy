//visting tool pages

function visit(url) {
  window.location.href = url;
}

//toggle

$(".template-1").click(() => {
  $(".template-2").toggle(() => {
    console.log("1");
  });
});

$(".template-2").click(() => {
  $(".template-1").toggle(() => {
    console.log("2");
  });
});

const generatePDF = async (name, usn, code, coname, assno, sem, sec, date) => {
  const { PDFDocument, rgb } = PDFLib;

  const exBytes = await fetch("1.pdf").then((res) => {
    return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  pdfDoc.registerFontkit(fontkit);

  const pages = pdfDoc.getPages();
  const firstPg = pages[0];

  firstPg.drawText(name, {
    x: 250,
    y: 395,
    size: 15,
  });
  firstPg.drawText(usn, {
    x: 250,
    y: 362,
    size: 15,
  });
  firstPg.drawText(code, {
    x: 350,
    y: 547,
    size: 13,
  });
  firstPg.drawText(coname, {
    x: 350,
    y: 520,
    size: 13,
  });
  firstPg.drawText(assno, {
    x: 350,
    y: 494,
    size: 13,
  });
  firstPg.drawText(sem, {
    x: 250,
    y: 330,
    size: 15,
  });
  firstPg.drawText(sec, {
    x: 250,
    y: 298,
    size: 15,
  });
  firstPg.drawText(date, {
    x: 300,
    y: 265,
    size: 15,
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  //   document.querySelector("#mypdf").src = uri;
  saveAs(uri, "Front page.pdf", { autoBom: true });
};

function gen() {
  console.log("working");
  var a = document.getElementsByName("name")[0].value;
  var b = document.getElementsByName("USN")[0].value;
  var c = document.getElementsByName("course-code")[0].value;
  var d = document.getElementsByName("course-name")[0].value;
  var e = document.getElementsByName("assignment-number")[0].value;
  var f = document.getElementsByName("semester")[0].value;
  var g = document.getElementsByName("section")[0].value;
  var h = document.getElementsByName("date")[0].value;

  console.log(a, b);
  generatePDF(a, b, c, d, e, f, g, h);
}
