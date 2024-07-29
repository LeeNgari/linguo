import './App.css'
import LogIn from "./pages/login"
import Main from './pages/main';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import Footer from './components/footer';
import Camera from './pages/Camera';
import Support from './pages/Support';
import Forum from './pages/Forum';
import Community from './components/community';
import Chat from './components/chat';
import CommunityDetail from './components/communitydetail';
function App() {
 
  const firebaseConfig = {
    apiKey: "AIzaSyC2rn0pP7sugZwxNszORDEjNXg1WaUg9i8",
    authDomain: "linguo-cbb63.firebaseapp.com",
    projectId: "linguo-cbb63",
    storageBucket: "linguo-cbb63.appspot.com",
    messagingSenderId: "813161632045",
    appId: "1:813161632045:web:36e1bfa46e39e386f0c3a4"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)

  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<LogIn  
            app = {app}
            auth = {auth}
        />} />

         <Route path="home" element={<Main
        />} />

        <Route path="camera" element={<Camera
        />} />
  

           <Route path="forum" element={<Forum/>}>

               <Route path="community" element={<Community />}/>
               <Route path="chat" element={<Chat />}/>
            </Route>

        <Route path="support" element={<Support
        />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
