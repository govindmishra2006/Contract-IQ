import Contract from "../models/contract.model.js";

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
