import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import WriteArticle from './pages/WriteArticle.jsx'
import BlogTitle from './pages/BlogTitle.jsx'  
import GenarateImages from './pages/GenarateImages.jsx' 
import RemoveBackground from './pages/RemoveBackground.jsx'
import Removeobject from './pages/RemoveObject.jsx'
import ReviewResume from './pages/ReviewResume.jsx'
import Community from './pages/Community.jsx'




const App = () => {
  return (
    <div>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='write-article'  element={<WriteArticle/>} />
          <Route path='blog-titles' element={<BlogTitle/>} />
          <Route path='genarates-images' element={<GenarateImages/>} />
          <Route path='remove-backgroud' element={<RemoveBackground/>} />
          <Route path='remove-object' element={<Removeobject/>} />
          <Route path='review-resume' element={<ReviewResume/>} />
          <Route path='community' element={<Community/>} />

      </Route>
      
    </Routes>
    </div>
  )
}

export default App
