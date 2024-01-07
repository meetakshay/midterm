
import './App.css'
import { HomePage, ProductPage, AboutPage, Cart } from './pages'

// import { Layout, CategoryList } from './components'
import Layout from './components/layout/Layout'
import CategoryList from './components/categoryList/CategoryList'
// import { Category, ProductList } from './components'
import { ProductDetailsPage } from './pages'

import { Routes, Route } from 'react-router-dom'
import WishList from './pages/whishList/WishList'
import SignUpForm from './pages/formsPage/SignUpForm'
import SignInForm from './pages/formsPage/SignInForm'
import CheckOutPage from './pages/checkOut/CheckOutPage'
import Coupon from './components/coupon/Coupon'
import NotFound from './pages/notFound/NotFound'




function App() {



  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<HomePage/>} />
      <Route path='/about' element={ <AboutPage/> } />     
      <Route path='/products' element={<ProductPage/>}> 
        <Route path=':category' element={<CategoryList />} />
      </Route> 
      <Route path='/products/details/:id' element={<ProductDetailsPage/>} />
      <Route path='/cart'  element={<Cart />} />
      <Route path='/wishlist'  element={<WishList />} />
      {/* <Route path='/wishlist'  element={<Coupon />} /> */}
      <Route path='/signup'  element={<SignUpForm />} />
      <Route path='/signin'  element={<SignInForm />} />
      <Route path='/checkout'  element={<CheckOutPage />} />
      <Route path='/*'  element={<NotFound />} />

    
    </Route>
   </Routes>
   </>
  )
}

export default App


