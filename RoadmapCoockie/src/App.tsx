import './App.css'
import CookiesLogo from './assets/Cookies-Logo.jpg';

function App() {
  return (
    // Creared one branch and trying to commit those changes as well. Need to check what are getting imapcted.
    <>
    {/* This is the cookies Parent Container that i have created */}
      <div className='borderlines bg-black'>
        <h1>coockies</h1>
        {/* This is the chailed container inside the Parent container */}
        <div className='cookiesContainer'>
          <div>
            <img className='logo' src={CookiesLogo} alt="Cookies Logo" />
          </div>
          <div>
            <span>We use cookies to improve your user experience</span>
            <button>I like Cookies</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
