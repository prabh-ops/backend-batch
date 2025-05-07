
import puppeteer from "puppeteer";
export async function generateCustomPdfBuffer(htmlContent) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: !true,
  });

  // wait for 2 secs
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const page = await browser.newPage();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await page.setContent(htmlContent);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const pdfBuffer = await page.pdf({ format: "a4" });
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await browser.close();
  return pdfBuffer;
  
}

