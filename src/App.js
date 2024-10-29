import { Link } from "react-router-dom";
import FlyOutMenu from "./Compound/FlyOutMenu";
import DogImages from "./HOC/DogImages";
import LogOut from "./Reducer/LogOut";
import Login from "./Reducer/Login";
import AuthProvider from "./Reducer/Reducer";
import UserProfile from "./Reducer/UserProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Temp, { Fahrenheit, Kelvin } from "./Render/Temp";
import POA from "./Render/POA";
import { useState } from "react";
import Modal from "./ModalPortal/Modal";
import Debounce from "./Hooks/Debounce";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <h1 className="text-3xl text-center text-gray-800 font-bold uppercase">
        React js Practice
      </h1>

      {/* React Portal Modal */}
      <h2 className="text-left text-xl text-gray-950 font-bold">
        React Portal
      </h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-blue-200 font-semibold text-lg"
      >
        Open Modal
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h1>Hello World</h1>
        </Modal>
      )}
      {/* React ROuter Dom */}
      <h2 className="text-left text-xl text-gray-950 font-bold">
        React Router DOM
      </h2>
      <Router>
        <div className="flex w-1/2 gap-2">
          <Link className="bg-slate-800 text-white p-2" to="/hello">
            Home
          </Link>
          <Link className="bg-slate-800 text-white p-2" to="/bye">
            Bye
          </Link>
        </div>
        <Routes>
          <Route path="/hello" element={<h1>Hello</h1>} />
          <Route path="/bye" element={<h1>Byeo</h1>} />
        </Routes>
      </Router>

      <h2 className="text-left text-xl text-gray-950 font-bold">Context API</h2>
      {/* Context API */}
      <AuthProvider>
        <UserProfile />
        <Login />
        <LogOut />
      </AuthProvider>
      {/* Ends here */}
      <hr />

      <h2 className="text-left text-xl text-gray-950 font-bold">
        Compound Pattern
      </h2>
      {/* Compound Pattern */}
      <FlyOutMenu />
      <hr />

      <h2 className="text-left text-xl text-gray-950 font-bold">
        Render Props Pattern
      </h2>
      {/* prop on a component which value is function that returns a JSX element. sharing data & logic among several components easily*/}
      <Temp
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />

      <h2 className="text-left text-xl text-gray-950 font-bold">
        Performance Optimized APP
      </h2>
      <POA />

      <Debounce />

      <h2 className="text-left text-xl text-gray-950 font-bold">
        High Order Component Pattern
      </h2>
      {/* HOC Patterns */}
      {/* take component and return a component so same logic in multiple components, reuse same logic throughtout the application */}
      <div className="pb-2">{/* <DogImages /> */}</div>
      {/* Ends Here */}
    </div>
  );
}

export default App;
