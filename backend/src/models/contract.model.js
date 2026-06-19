import mongoose from "mongoose"

const contractSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        default:"",
    },
    contractType:{
        type:String,
        required:true,
        enum:[
            "NDA",
            "Employment",
            "Lease",
            "Vendor",
            "Service",
            "Other"
        ],
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    fileName:{
        type:String
    },
    fileKey:{
        type:String
    },
    fileUrl:{
        type:String
    },
    extractedText:{
        type:String,
    },
    summary:{
        type:String
    },
    riskAnalysis:{
        type:Object
    },
    clauses:[{
        clauseType:String,
        title:String,
        text:String,
    }]
},{timestamps:true})

const Contract = mongoose.model("Contract",contractSchema)
export default Contract;