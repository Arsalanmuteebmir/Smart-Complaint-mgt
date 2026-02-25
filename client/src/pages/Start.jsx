export default function Start({ setShowLogin }) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h1>Public Complaint Portal</h1>
        <h3>Are you a new user or existing user?</h3>
  
        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => setShowLogin(false)}
            style={{ marginRight: 10 }}
          >
            New User (Register)
          </button>
  
          <button onClick={() => setShowLogin(true)}>
            Existing User (Login)
          </button>
        </div>
      </div>
    );
  }