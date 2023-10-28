
import AppRoutes from './routes/index.jsx'
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./layout/Sidebar.jsx";
import Login from './pages/Auth/Login.jsx';
import { Toaster } from "./common/Toast.js"
let token = localStorage.getItem("_token")
function App() {

  return (
    <div id="App">
      {/* {!token ?  */}
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
{/* : */}
      <Sidebar>
        <AppRoutes />
      </Sidebar>
{/* } */}
      <Toaster position="top-right" />
    </div >
  )
}

export default App;
