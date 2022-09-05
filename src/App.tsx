import { ToastContainer } from "react-toastify";
import "./App.css";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
        <ContactPage />
      </div>
    </>
  );
}

export default App;
