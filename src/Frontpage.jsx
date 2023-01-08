import React from "react"
import MealItem from "./MealItem";
import { Nav, Navbar, Container, Button, Form, FormControl, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
// import card from "./card"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Frontpage=()=>{
    return(
      <>
      <div className='main'>
        <div className='heading'>
          <h1 className="heading1">Welcome to Foodies</h1>
          <h4 className="heading1">Help other to meet new food around the world</h4>
        </div>
        {/* <div className='searchBox'>
          <input type="search" className="search-bar"></input></div> */}
          <div className="container">
          </div>
      </div>

      <nav className="navbar">
        <h3 className="home">Foodies</h3>
        <ul className="nav-links">
        
        <Link to="/home" className="home">
            <li>Home</li>
          </Link>
        
          <Link to="/menu" className="menu">
            <li>Menu</li>
          </Link>

          <Link to="/login" className="login">
            <li>Login</li></Link>
        </ul>
      </nav>

{/* <h1 className="text-center text-success my-5">Look out for more foodies!!</h1> */}

<div class="card text-center">
  <div class="card-header">
    About Foodies
  </div>
  <div class="card-body">
    <h5 class="card-title">A new Website to help strangers</h5>
    <p class="card-text">Foodies is more like a home to new people.<br/>With support from everyone of you, we can provide information from each of you to share and make a new memory.<br/>Let start from foodies</p>
    <a href="/login" class="btn btn-dark">Enter the world</a>
  </div>
</div>

  <div className="container">
    <div className="row">
      <div className="col-md-3">
      <div className="card">
        <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" className="card-img-top" alt="pizza"/>
        <div className="card-body">
          <h5>Pizza</h5>
          <p className="desc">Sometimes all you want at the end of the day is a simple cheese pizza. This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese, and an easy to make tomato sauce that hits all of the right sweet and savory notes to marry all of the flavors in this pie. A simple garnish of fresh herbs...</p>
          <a href="https://www.foodandwine.com/recipes/classic-cheese-pizza" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls3-1654808937.jpg?resize=1200:*" className="card-img-top" alt="Sushi"/>
        <div className="card-body">
          <h5>Sushi</h5>
          <p className="desc">The first time you attempt to roll sushi, there's one thing you'll have to quickly accept: you're bound to make a mess—but that's not a bad thing. "Mistakes are good news because how else can you learn? Even I still make mistakes," explains legendary Japanese chef Nobuyuki Matsuhisa after teaching a new sushi class at Le Royal Monceau, Raffles Paris.</p>
          <a href="https://www.tasteofhome.com/recipes/california-sushi-rolls/" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg" className="card-img-top" alt="Pasta"/>
        <div className="card-body">
          <h5>Pasta</h5>
          <p className="desc">This homemade pasta recipe is our new favorite cooking project! Lately, Jack and I have been spending even more time than usual in the kitchen, experimenting with bread, baked goods, and even okonomiyaki. But we keep coming back to homemade pasta. It’s super fun to make together, and it only requires a handful of basic ingredients. Of course, the ...</p>
          <a href="https://realfood.tesco.com/recipes/one-pot-tomato-pasta.html" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://www.foodrepublic.com/wp-content/uploads/2017/03/nasilemak.jpg" className="card-img-top" alt="pizza"/>
        <div className="card-body">
          <h5>Nasi Lemak</h5>
          <p className="desc">Think you can’t cook Malaysian food? Too complicated? Wouldn’t know where to start? Think again! This spicy, tangy, vibrant cuisine is well within reach if you have a copy of chef Christina Arokiasamy’s new cookbook. She served as Malaysia’s first official Food Ambassador to the U.S., so take her word for it and whip up some authentic nasi lemak tonight.</p>
          <a href="https://www.foodrepublic.com/recipes/authentic-nasi-lemak/" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container">
    <div className="row">
      <div className="col-md-3">
      <div className="card">
        <img src="https://cdn0-production-images-kly.akamaized.net/7RX_k8lbfizBb9CW1a2ImR7nipk=/1x121:1000x684/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4048349/original/072990100_1654825180-shutterstock_1924913702.jpg" className="card-img-top" alt="pizza"/>
        <div className="card-body">
          <h5>Nasi Kuning</h5>
          <p className="desc">Nasi tidak melulu disajikan sebagai nasi putih biasa. Nasi dibuat menjadi berbagai menu masakan yang enak dan lezat, misalnya seperti nasi goreng, nasi uduk, nasi liwet dan yang tidak kalah enak adalah nasi kuning. Membuat nasi kuning ternyata tidak susah, Ternyata. Nasi kuning biasanya dimasak dengan campuran santan ...</p>
          <a href="https://www.fimela.com/food/read/4983092/cara-membuat-nasi-kuning-yang-pulen-dan-gurih" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://asianinspirations.com.au/wp-content/uploads/2019/07/R00376-Hainanese_Chicken_Rice-2-768x512.jpg" className="card-img-top" alt="Nasi Hainan"/>
        <div className="card-body">
          <h5>Hainan Rice</h5>
          <p className="desc">Hainanese chicken rice is a dish adapted from early Chinese immigrants originally from Hainan province in southern China. It is considered one of the national dishes of Singapore. Hainanese chicken rice is most commonly associated with Singaporean and Malaysian cuisines, although it is also popular in Thailand. May the rest of people must tried and ...</p>
          <a href="https://asianinspirations.com.au/recipes/hainanese-chicken-rice/" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://www.piknikdong.com/wp-content/uploads/2021/02/Cara-Membuat-Pempek-300x186.jpg" className="card-img-top" alt="pizza"/>
        <div className="card-body">
          <h5>Empek-empek</h5>
          <p className="desc">Pempek biasanya disajikan dengan kuah cuka nikmat yang banyak orang menyebutnya dengan kuah cuko.Pempek terkenal berasal dari Palembang, walaupun menurut informasi yang ada seluruh bagian Sumatera Selatan membuat makanan nikmat yang satu ini.Sekarang ini mencari pempek sangatlah mudah, tidak harus ke Palembang...</p>
          <a href="https://www.piknikdong.com/cara-membuat-pempek.html" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://assets.bonappetit.com/photos/601185e9e0a941bb1291e9e2/3:2/w_1854,h_1236,c_limit/GoLive-Beef-Pho.jpg" className="card-img-top" alt="pizza"/>
        <div className="card-body">
          <h5>Pho</h5>
          <p className="desc">Vietnamese beef noodle pho is an easy soup to fall in love with. Those chewy noodles, that savory broth, the tender slices of beef — all those crunchy, spicy, herby garnishes we get to toss on top. On a cold evening, after a rough day at work, when we’re sick, on a lazy weekend afternoon — a bowl of piping hot pho is pretty much always a good idea.</p>
          <a href="https://www.thekitchn.com/how-to-make-quick-vietnamese-beef-pho-cooking-lessons-from-the-kitchn-215118" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://www.tastingtable.com/img/gallery/spicy-tteokbokki-recipe/l-intro-1663857189.jpg" className="card-img-top" alt="pizza"/>
        <div className="card-body">
          <h5>Tteokbokki</h5>
          <p className="desc">Tteokbokki is chewy rice cakes cooked in a red, spicy broth. It’s a popular Korean street food. When I was a student coming home from school it was hard to resist the spicy rice cakes sold by vendors on the street! They would have big vats of tteokbokkie and just keep stirring and stirring. We would stop by and they would give us a small paper cup of spicy rice cakes and the spicy sauce for a very reasonable price that any student could afford.</p>
          <a href="https://www.maangchi.com/recipe/tteokbokki" className="btn btn-light">Find the Recipe</a>
          <a href="/menu" className="btn btn-dark">or Other Recipes</a>
        </div>
      </div>
    </div>

    </div>
    </div>
      </>
    );
  }

export default Frontpage;