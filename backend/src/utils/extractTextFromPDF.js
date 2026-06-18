import pdf from "pdf-parse-new";
// Extract text from pdf 

const extractTextFromPDF = async (buffer) =>{
    const data = await pdf(buffer);

    return data.text;
}

export default extractTextFromPDF;