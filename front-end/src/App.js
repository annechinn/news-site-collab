import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import logo_light from './assets/logo_light.png';

function App() {
  return (
    <>
    <main>
      {/*---------------------- NavBar ----------------------*/}
      <nav class="nav-container">
        <a href="index.html">
          <img src={logo} class="logo" alt="logo" />
        </a>
        <ul>
          <li><a href="">Tech</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Food</a></li>
          <li><a href="">Arts</a></li>
          <li><a href="">Sports</a></li>
          <li><a href="">Account</a></li>
        </ul>
      </nav>

      {/*---------------------- Showcase ----------------------*/}
      <section class="showcase food">
        <span class="category category-tech">Technology</span>
        <h1>An Article About Technology</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          recusandae consequatur similique doloribus. Corporis, et a ullam
        </p>
        <a href="" class="btn">Learn More</a>
      </section>

      {/*---------------------- Articles ----------------------*/}
      <section class="articles">
        <article>
          <img src="assets/jellyfish.jpg" alt="" />
          <span class="category category-science">Science</span>
          <h3><a href="">Lorem ipsum dolor sit amet.</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam nemo
            ad.
          </p>
        </article>
        <article>
          <img src="assets/french-toast.jpg" alt="" />
          <span class="category category-food">Food</span>
          <h3><a href="">Lorem ipsum dolor sit amet.</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam nemo
            ad.
          </p>
        </article>
        <article>
          <img src="assets/weight-lifter.jpg" alt="" />
          <span class="category category-sports">Sports</span>
          <h3><a href="">Lorem ipsum dolor sit amet.</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam nemo
            ad.
          </p>
        </article>
        <article>
          <img src="assets/break-dancer.jpg" alt="" />
          <span class="category category-arts">Arts</span>
          <h3><a href="">Lorem ipsum dolor sit amet.</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam nemo
            ad.
          </p>
        </article>
        <article>
          <img src="assets/snowboarder.jpg" alt="" />
          <span class="category category-sports">Sports</span>
          <h3><a href="">Lorem ipsum dolor sit amet.</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam nemo
            ad.
          </p>
        </article>
        <article>
          <span class="category category-science">Science</span>
          <h3><a href="">Lorem ipsum dolor sit amet.</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam nemo
            ad.
          </p>
          <img src="assets/skull.jpg" alt="" />
        </article>
      </section>
      
      {/*---------------------- Footer ----------------------*/}
      <footer class="footer-container">
        <div>
          <img src={logo_light} alt="NewsGrid" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolorem magnam sunt possimus perspiciatis quis suscipit quidem
            tempora, error numquam.
          </p>
        </div>
        <div>
          <h3>Sign-up for our Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, totam!
          </p>
          <form name="contact" method="POST" data-netlify="true">
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" class="btn btn-primary" />
          </form>
        </div>
        <div>
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="">Contact</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Subscriptions</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
      </footer>
    </main>
    </>  
  );
}

export default App;
