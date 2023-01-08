import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Home Page</div>} />
        <Route path="testing" element={<div> Testing</div>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;


/*
# Bazı Notlar React Router 6

react-router-dom  u npm install ile kolaylıkla indirip kullanabiliriz.
React Router 6  da kullanılarn wraps lar başlıca BrowserRouter, Routes, ve Route dir.

## BrowserRouter
En dış katmanı sarıp sarmalayacagımız hook. BrowserRouter Browse ile bağlantıyı sağlar

## Routes 
Routes wrap'ı route taglarınının parrent olarak kullanılıyor.

## Route
Her sayfa bir tane Route alıyor.
2 tane props var "path='/'"  ve "element={<div>Home Page</div>}" gibi
Route wrap'ı path prop u adress cubugunda yazıyor

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Home Page</div>} />
        <Route path="testing" element={<div> Testing</div>} />
      </Routes>
    </BrowserRouter>

*/