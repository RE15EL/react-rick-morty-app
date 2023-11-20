import { useState } from "react"
import { Header } from "./components/Header";
import Router from "./components/Router";
import Footer from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] =useState(false);
  
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-200 dark:bg-gray-800 text-gray-800
       dark:text-gray-200 min-h-screen">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Router />
        <Footer />
      </div>
    </div>
  )
}

export default App
