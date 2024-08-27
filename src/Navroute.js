import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Homepage';
import Beauty from './Beauty';
import Food from './Food';
import Travel from './Travel';
import Nav from './Navbar';
import './Navbar.css';
import Fashion from './Fashionpage';
import Article from './Article';
import Footer from './Footer';
import Logo from './Logo';
import aboutus from './Aboutus';
import AboutUs from './Aboutus';


function navrout(){
    return(
    <BrowserRouter>
      <div> 
      <Logo/>      
      <Nav/>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/beauty" element={<Beauty />} />
              <Route path="/food" element={<Food />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/article" element={<Article name="fashion" title="My Discount Guide" img="fashion.jpg" />}  />
              <Route path="/article2" element={<Article name="fashion" title="My Revolve Summer Picks" img="summerr.jpg" />}  />
              <Route path="/article3" element={<Article name="fashion" title="Fash Favorite: The Luxury Closet" img="bags.jpg" />}  />
              <Route path="/article4" element={<Article name="fashion" title="Style discovery: Sunglasses" img="sung.jpg" />}  />
              <Route path="/article5" element={<Article name="fashion" title="Brand to Know: Dior" img="dior.jpg" />}  />
              <Route path="/article6" element={<Article name="fashion" title="The Closet of your Dreams" img="sidecol.jpg" />}  />
              
              <Route path="/article7" element={<Article name="beauty" title="Hair Care" img="beauty.jpg" />}  />
              <Route path="/article8" element={<Article name="beauty" title="Skin Care" img="beauty2.jpg" />}  />
              <Route path="/article9" element={<Article name="beauty" title="Guide to achieve the Perfect body" img="beauty3.jpg" />}  />

              <Route path="/article10" element={<Article name="food" title="Sushi: Powerhouse of micro-nutrients" img="food.jpg" />}  />
              <Route path="/article11" element={<Article name="food" title="Practice of eating on banana leaf" img="food2.jpg" />}  />
              <Route path="/article12" element={<Article name="food" title="Healthy eating as a sweet tooth" img="food3.jpg" />}  />
              <Route path="/article13" element={<Article name="food" title="Start your day with these fruits" img="food4.jpg" />}  />
              <Route path="/article14" element={<Article name="food" title="Herbs: The miracle food" img="food5.jpg" />}  />
              <Route path="/article15" element={<Article name="food" title="Work day drinks" img="food6.jpg" />}  />

              <Route path="/article16" element={<Article name="travel" title="Dubai: The Luxary Destination" img="travel1.jpg" />}  />
              <Route path="/article17" element={<Article name="travel" title="Travel Guide: What to pack" img="travel2.jpg" />}  />
              <Route path="/article18" element={<Article name="travel" title="Guide to travel budget" img="travel3.jpg" />}  />
              <Route path="/article19" element={<Article name="travel" title="Tour to India" img="travel4.jpg" />}  />
              <Route path="/article20" element={<Article name="travel" title="Bungee" img="travel5.jpg" />}  />
              <Route path="/aboutus" element={<AboutUs/>}  />
              






        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    );
}

export default navrout;