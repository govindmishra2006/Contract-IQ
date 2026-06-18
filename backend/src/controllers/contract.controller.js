import Contract from "../models/contract.model.js";
import uploadToS3 from "../utils/uploadToS3.js";
import extractTextFromPDF from "../utils/extractTextFromPDF.js";

export const createContract = async (req, res) => {
  try {
    const { title, description, contractType } = req.body;
    const contract = await Contract.create({
      title,
      description,
      contractType,
      owner: req.user._id,
    });
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getContracts = async (req, res) => {
  try {
    // get all the contracts of the user and sort them on the basis of newest to oldest
    const contracts = await Contract.find({
      owner: req.user._id,
    }).sort({ createdAt: -1 });
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);

    if (!contract) {
      return res.status(404).json({
        message: "Contract not found",
      });
    }

    if (contract.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteContract = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({
        message: "Contract Not found",
      });
    }
    if (
      !contract.owner ||
      contract.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }
    await contract.deleteOne();

    res.status(200).json({
      message: "Contract deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const uploadContract = async(req,res)=>{
    try {
        // check if file was uploaded 

        if(!req.file){
            return res.status(400).json({
                message:"no file uploaded"
            })
        }

        const uploadedFile = await uploadToS3(req.file);
        // Extract text from the uploaded pdf

        const extractedText = await extractTextFromPDF(req.file.buffer);

        const contract = await Contract.create({
            title:req.file.originalname,
            description:"Uploaded contract",
            contractType:"Other",
            owner:req.user._id,
            fileName:req.file.originalname,
            fileKey:req.file.fileKey,
            fileUrl:uploadedFile.fileUrl,
            extractedText
        })
        res.status(201).json({
            message:"contract uploaded successfully",
            contract,
        })
    } catch (error) {

        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}
