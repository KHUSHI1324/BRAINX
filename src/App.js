import React,{useEffect,useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import About from './Component/WebPage/About';
import Home from './Component/WebPage/Home';
import Doctor from './Component/WebPage/Doctor';
import Service from './Component/WebPage/Service';
import Appont from './Component/WebPage/Appont';
import Contact from './Component/WebPage/Contact';
import Navbar from './Component/WebPage/Navbar';
import Testimonials from './Component/WebPage/Testimonials';
import Faq from './Component/WebPage/Faq';
import Login from './Component/forms/Login';
import Register from './Component/forms/Register';
import Reset from './Component/forms/Reset'
import ChatBoat from './Component/ChatBoat'
import {auth,db} from './Component/firebase';
import {doc,getDoc} from 'firebase/firestore';
import Accounts from './Component/forms/Account';
import './App.css';
function App() {
  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('User is not logged in');
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

async function handleLogout(){
  try {
    await auth.signOut();
    window.location.href = '/login'
    console.log('user logged out successfully');
  } catch (error) {
    console.log('error logging out',error.message);
  }
}
  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout}/>
      <Routes>
        <Route 
          path='/'
          element={
            <>
              <Element name="Home">
                <Home user={user} />
              </Element>

              <Element name="about">
                <About />
              </Element>

              <Element name="doc">
                <Doctor user={user} />
              </Element>

              {/* <Element name="app">
                <Appont />
              </Element> */}

              <Element name="service">
                <Service />
              </Element>

              <Element name="testi">
                <Testimonials />
              </Element>

              <Element name="faq">
                <Faq />
              </Element>

              <Element name="contact">
                <Contact />
              </Element>
            </>
          }
        />
        <Route path='/home' element={<Home />} />
        <Route path='/doc'  element={<Doctor />} />
        {/* <Route path='/app' element={<Appont />} /> */}
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testi' element={<Testimonials />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<ChatBoat/>}/>
        <Route path="/reset"  element={<Reset/>} />
        <Route path="/account"  element={<Accounts  setUser={setUser} user={user}/>} />
         
      </Routes>
    </div>
  );
}

export default App;
