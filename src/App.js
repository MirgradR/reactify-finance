import Header from "./components/Header/Header";
import NoInternet from "./components/NoInternet/NoInternet";
import { Router } from "./routes/Router";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) return <NoInternet />;

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
