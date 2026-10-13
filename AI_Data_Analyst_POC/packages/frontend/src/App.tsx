// Hosts the Data Analyst UI (public/analyst.html) inside the authenticated Rayfin shell.
// The page ships in DEMO_MODE until the Fabric data agent is wired in.
function App() {
  return (
    <iframe
      title="Data Analyst | Woven Health Collective"
      src={`${import.meta.env.BASE_URL}analyst.html`}
      style={{ border: 0, width: '100vw', height: '100vh', display: 'block' }}
    />
  );
}

export default App;
