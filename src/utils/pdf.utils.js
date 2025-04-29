import fs from "fs";

export async function generateCustomPdfBuffer(htmlContent) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: "a4" });
  await browser.close();
  return pdfBuffer;


}
