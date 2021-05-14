import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Mainpage from './Mainpage';
import Hero from './Hero';
import KoreanSong1 from './KoreanSong1';
import KoreanSong2 from './KoreanSong2';

const Content = () => (
  <div>
    <Navigation />
    <Hero />
    <div id="bg-main" class="light-mode">
      <Main />
    </div>
  </div>
);

class Navigation extends React.Component {

  handleDark(event) {
    var background = document.getElementById("bg-main");
    var spacer_bg = document.getElementById("spacer");
    background.classList.toggle("dark-mode");
    spacer_bg.classList.toggle("dark-mode");

  }

  render() {
    return (
      <div class="navbar-resize">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to='/' href="/"><img src="/favicon.ico" alt="test" style={{ width: 40, height: 40 }}></img> Turtle Translations</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Novels" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to='/book1' href="/book1">Book 1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/book2' href="/book2">Book 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/book3' href="/book3">Book 3</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link as={Link} to='/songs' href="/songs"><i class="fa fa-music fa-fw"></i> Songs</Nav.Link>
              <Nav.Link as={Link} to='/about' href="/about"><i class="fa fa-edit fa-fw"></i> About</Nav.Link>
              <Nav.Link as={Link} to='/contact' href="/contact"><i class="fa fa-envelope fa-fw"></i> Contact</Nav.Link>
            </Nav>

            <Nav>

              <label class="switch">
                <input id="night" type="checkbox" onChange={this.handleDark}></input>
                <span class="slider round"></span>
              </label>


            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const Home = () => (
  <div className='home'>
    <Mainpage />
  </div>
);
/*
class NavBar extends React.Component {
  render() {
    return (
      <div class="text-center">
        <div class="btn-group btn-group-lg">
          <button type="button" class="btn btn-secondary"><i class="fa fa-arrow-left"></i></button>
          <button type="button" class="btn btn-secondary"><i class="fa fa-home"></i></button>
          <button type="button" class="btn btn-secondary"><i class="fa fa-arrow-right"></i></button>
        </div>
      </div>
    );
  }
}*/

const Novels = () => (
  <div className='novels' class="text-center">
    <h3>Book Selection:</h3>
    <Link class="nav-link" activeclassName="current" to='/book1'> Book 1</Link>
    <Link class="nav-link" activeclassName="current" to='/book2'> Book 2</Link>
    <Link class="nav-link" activeclassName="current" to='/book3'> Book 3</Link>
    <p></p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>A never-ending student I am always reminded of how vast the knowledge of this world can be. 
      There is a lot to learn and limited time to learn it so I try to make the most of it by
       doing side projects on the side and living my life how I want to.</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>Currently don't have any interest in having other people getting my email at the moment. </p>
    <br></br>
    <p>Not sure why you would want to be contacting me in the first place...</p>
  </div>
);

const Book1 = () => (
  <div className='book1' class="text-center">
    <h3>Book1</h3>
    <h3>Chapter List:</h3>
    <Link class="nav-link" activeclassName="current" to='/b1chapter1'> Chapter 1</Link>
    <Link class="nav-link" activeclassName="current" to='/b1chapter2'> Chapter 2</Link>
    <p></p>
  </div>
);

const Book2 = () => (
  <div className='book2' class="text-center">
    <h3>Book2</h3>
    <p></p>
  </div>
);

const Book3 = () => (
  <div className='book3' class="text-center">
    <h3>Book3</h3>
    <p></p>
  </div>
);

const B1Chapter1 = () => (
  <div className='chapter1' class="text-center">
    <h3>Book 1</h3>
    <h3>Chapter 1</h3>
    <p></p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <h3>Default Buttons:</h3>

    <div class="text-center">
      <div class="btn-group btn-group-lg">
        <Link exact class="btn btn-secondary" role='button' to='/book1'>

          <i class="fa fa-arrow-left"></i>
        </Link>
        <Link exact class="btn btn-secondary" role='button' to='/book1'>

          <i class="fa fa-home"></i>
        </Link>
        <Link exact class="btn btn-secondary" role='button' to='/b1chapter2'>

          <i class="fa fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>


  </div>
);

const B1Chapter2 = () => (
  <div className='chapter2' class="text-center">
    <h3>Book 1</h3>
    <h3>Chapter 2</h3>
    <p></p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <h3>Default Buttons:</h3>
    <div class="text-center">
      <div class="btn-group btn-group-lg">
        <Link exact class="btn btn-secondary" role='button' to='/b1chapter1'>

          <i class="fa fa-arrow-left"></i>
        </Link>
        <Link exact class="btn btn-secondary" role='button' to='/book1'>

          <i class="fa fa-home"></i>
        </Link>
        <Link exact class="btn btn-secondary" role='button' to='/book1'>

          <i class="fa fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </div>
);

const Songs = () => (
  <div className='songs' class="text-center">
    <h3>Song Selection:</h3>
    <Link class="nav-link" activeclassName="current" to='/song1'> Song 1: IU - Unlucky</Link>
    <Link class="nav-link" activeclassName="current" to='/song2'> Song 2: IU - Voice Mail</Link>
    <Link class="nav-link" activeclassName="current" to='/song3'> Song 3</Link>
    <p></p>
  </div>
)

const Song1 = () => (
  <div className='song1' class="text-center">
    <h1>IU - Unlucky</h1>

    <div class="videoWrapper">
      <iframe title="IU_unlucky" width="560" height="349" src="https://www.youtube.com/embed/3hrHjHiEfuM" frameborder="0" allowfullscreen></iframe>
    </div>


    <KoreanSong1 />

  </div>
);

const Song2 = () => (
  <div className='song2' class="text-center">
    <h1>IU - Voice Mail</h1>

    <div class="videoWrapper">
      <iframe title="IU_voicemail" width="560" height="349" src="https://www.youtube.com/embed/0LgFc_0B30I" frameborder="0" allowfullscreen></iframe>
    </div>


    <KoreanSong2 />

  </div>
);

const Song3 = () => (
  <div className='song3' class="text-center">
    <h3>Song3</h3>
    <p></p>

  </div>
);

const Main = () => (
  <div class="page-wrap" >
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/novels' component={Novels}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/book1' component={Book1}></Route>
      <Route exact path='/book2' component={Book2}></Route>
      <Route exact path='/book3' component={Book3}></Route>
      <Route exact path='/b1chapter1' component={B1Chapter1}></Route>
      <Route exact path='/b1chapter2' component={B1Chapter2}></Route>
      <Route exact path='/songs' component={Songs}></Route>
      <Route exact path='/song1' component={Song1}></Route>
      <Route exact path='/song2' component={Song2}></Route>
      <Route exact path='/song3' component={Song3}></Route>
    </Switch>
  </div>
);

export default Content;