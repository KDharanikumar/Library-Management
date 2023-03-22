import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./SignIn";
import Portal from "./Portal";
import Dashboard from "./Dashboard";
import Library from "./Library";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import ViewBook from "./ViewBook";
import BooksCorner from "./BooksCorner";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="library" element={<Library />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="library/edit/:id" element={<EditBook />} />
            <Route path="library/:id" element={<ViewBook />} />
            <Route path="bookscorner" element={<BooksCorner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
