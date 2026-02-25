import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  
  status: {
    type: String,
    default: "Pending"
  }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;