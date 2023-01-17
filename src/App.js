import {lazy,Suspense} from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
const LazyHome=lazy(()=> import('./Components/Home/Home'));
const LazyNavBar=lazy(()=> import('./Components/NavBar/NavBar'));
const LazyNavBarLink=lazy(()=> import('./Components/NavBar/NavBarLink/NavBarLink'));
const LazyAuth=lazy(()=> import('./Components/Auth/Auth'));
const LazyCart=lazy(()=> import('./Components/Cart/Cart'));
const LazyBookDetails=lazy(()=> import('./Components/Books/BookDetails/BookDetails'));
const LazyBooks=lazy(()=> import('./Components/Books/Books'));
const LazyRecommended=lazy(()=> import('./Components/Recommended/Recommended'));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavBar />
        <LazyNavBarLink />
        <Routes>
          <Route path='/' element={<Navigate to='/Home' replace={true}/>}/>
          <Route path='/Home' element={<LazyHome />}/>
          <Route path='/Books' element={<LazyBooks />}/>
          <Route path='/Recommended' element={<LazyRecommended />}/>
          <Route path='/Auth' element={<LazyAuth />}/>
          <Route path='/BookDetails/:id' element={<LazyBookDetails />}/>
          <Route path='/Cart' element={<LazyCart />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
