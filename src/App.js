import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Options from "./Components/Option/Options";
import Picked from "./Components/Picked/Picked";
import Reviews from "./Components/Review/Reviews";
import Search from "./Components/Search/Search";
import Today from "./Components/Today/Today";
import img from './images/Component 1.png'
import img2 from './images/Rectangle 3.png'
function App() {
  return (
    <div className="max-w-[1560px] mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <Options></Options>
      <Picked></Picked>
      <img className='my-20 px-10' src={img} alt="" />
      <Today></Today>
      <Search></Search>
      <img className='my-20 px-20' src={img2} alt="" />
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
