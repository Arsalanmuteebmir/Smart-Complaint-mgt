import { useState, useEffect } from "react";
import API from "../api/axios";


const CATEGORIES = ["Roads & Infrastructure", "Water Supply", "Electricity", "Sanitation", "Public Safety", "Parks & Recreation", "Other"];

export default function Home() {
  const [title, setTitle]           = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory]     = useState("");
  const [list, setList]             = useState([]);

  const fetchData = () => {
    API.get("/complaints").then(res => setList(res.data));
  };

  useEffect(() => { fetchData(); }, []);

  const addComplaint = () => {
    if (!title.trim()) return;
    API.post("/complaints", { title, description, category }).then(() => fetchData());
  };

  const updateStatus = (id) => {
    API.put("/complaints/" + id, { status: "Resolved" }).then(() => fetchData());
  };

  const deleteComplaint = (id) => {
    API.delete("/complaints/" + id).then(() => fetchData());
  };

  const openCount     = list.filter(c => c.status !== "Resolved").length;
  const resolvedCount = list.filter(c => c.status === "Resolved").length;

  return (
    <div className="portal-wrapper">

      {/* ── Header ── */}
      <header className="portal-header">
        <div className="header-left">
          <div className="header-eyebrow">Citizen Services</div>
          <h1 className="portal-title">
            Complaint <span>Portal</span>
          </h1>
        </div>
        <div className="header-badge">
          <strong>{openCount}</strong> open · <strong>{resolvedCount}</strong> resolved
        </div>
      </header>

      {/* ── Submit Form ── */}
      <div className="form-card">
        <div className="form-title">
          <span className="icon">📝</span>
          File a New Complaint
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Title</label>
            <input
              placeholder="Brief issue title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group full">
            <label>Description</label>
            <textarea
              placeholder="Describe the issue in detail…"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button className="btn-submit" onClick={addComplaint}>
          <span>＋</span> Submit Complaint
        </button>
      </div>

      {/* ── Complaints List ── */}
      <div className="list-header">
        <h2 className="list-title">All Complaints</h2>
        <span className="count-pill">{list.length} total</span>
      </div>

      {list.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p>No complaints filed yet. Be the first to report an issue.</p>
        </div>
      ) : (
        list.map(c => (
          <div className="complaint-card" key={c._id}>
            <div className="card-top">
              <div>
                <div className="card-meta">
                  {c.category && (
                    <span className="badge badge-category">📁 {c.category}</span>
                  )}
                  <span className={`badge ${c.status === "Resolved" ? "badge-resolved" : "badge-open"}`}>
                    {c.status || "Open"}
                  </span>
                </div>
                <div className="card-title">{c.title}</div>
              </div>
            </div>

            {c.description && (
              <p className="card-desc">{c.description}</p>
            )}

            <div className="card-actions">
              {c.status !== "Resolved" && (
                <button className="btn btn-resolve" onClick={() => updateStatus(c._id)}>
                  ✓ Mark Resolved
                </button>
              )}
              <button className="btn btn-delete" onClick={() => deleteComplaint(c._id)}>
                ✕ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
