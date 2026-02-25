import Complaint from "../models/Complaint.js"
export const addComplaint = async (req, res) => {
  const data = await Complaint.create(req.body);
  res.json(data);
};
export const getComplaints = async (req, res) => {
  const data = await Complaint.find();
  res.json(data);
};

export const updateStatus = async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
};

export const deleteComplaint = async (req, res) => {
  await Complaint.findByIdAndDelete(req.params.id);
  res.json("Deleted");
};