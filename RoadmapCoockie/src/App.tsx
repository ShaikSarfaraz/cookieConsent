import './App.css'
import CookiesLogo from './assets/Cookies-Logo.jpg';

function App() {
  return (
    <>
      <div className='borderlines'>
        <h1>coockies</h1>
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
