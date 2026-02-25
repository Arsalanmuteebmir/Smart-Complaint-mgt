export default function Start({ setPage }) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h1>Public Complaint Portal</h1>
        <h3>Are you a new or existing user?</h3>
  
        <button onClick={() => setPage("register")}>
          New User
        </button>
  
        <button onClick={() => setPage("login")}>
          Existing User
        </button>
      </div>
    );
  }