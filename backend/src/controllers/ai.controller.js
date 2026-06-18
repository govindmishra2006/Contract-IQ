import summarizeContract from "../ai/summarizeContract.js";
import Contract from "../models/contract.model.js";

export const testAI = async(req,res) =>{
    try {
        const summary = await summarizeContract(`

      This agreement is entered into between Acme Inc and John Doe.

      John Doe will provide consulting services for 12 months.

      Payment will be $5000 per month.

      Either party may terminate with 30 days notice.

    `);
    res.status(200).json({
        summary,
    })
            

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:error.message
        })
        
    }
};

export const summarizeUploadedContract = async(req,res)=>{
    try {
        const contract = Contract.findById(req.params.id);

        if(!contract)
        {
            return res.status(404).json({
                message:"Contract was not found"
            })
        }

        // Generate AI summary

        const summary = await summarizeContract(contract.extractedText);
        res.status(200).json({
            contractId: contract._id,
            title:contract.title,
            summary,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:error.message
        })
    }
}