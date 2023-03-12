import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Home from '../pages/home/Home';
import Details from '../pages/details/Details';
import UserComment from '../pages/userComment/UserComment';
import Register from '../pages/register/Register';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/comments" element={<UserComment />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
