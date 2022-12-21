import logo from './logo.svg';
import './App.css';
import Register from './Register';
import './Register.css';
import './Utils/i18';
import Login from './Login';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import BlogDetails from './hooks/BlogDetails';
import ApiData from './hooks/ApiData';
import { QueryClient, QueryClientProvider } from "react-query";


// import { Routes, Route, Link } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
  //  <Register/>
  <QueryClientProvider client={queryClient}>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login />}/>
     <Route path="/register" element={<Register />}/>
     <Route path="/login" element={<Login/>} />
     <Route path="/apiDataDisplay" element={<BlogDetails/>} />
     <Route path="/apiData" element={<ApiData/>} />
   </Routes>
 </BrowserRouter>
 </QueryClientProvider>
  );
}
 
export default App;
