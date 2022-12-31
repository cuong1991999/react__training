import React from 'react';
import ReactDOM from 'react-dom/client';
// setup react router dom
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

//nhúng css
import './assets/css/style.css';
// setup redux store
import { Provider } from 'react-redux';
import { store } from "./redux/configStore";
import { Navigate } from 'react-router-dom';

import BaiTapHomeLayout from './components/baitapHomeLayout/BaiTapHomeLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './State/DemoState';
import RenderList from './RenderList/RenderList';
import ExRenderFilms from './RenderList/ExRenderFilms';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesApp from './Props/ShoesApp/ShoesApp';
import BaiTapXemChiTiet from './State/BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStone from './Props/ExerciseCarStone/ExerciseCarStone';
import DemoChildrenProps from './Props/DemoChildrenProps/DemoChildrenProps';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from './templates/HomeTemplate';
import BaiTapGioHang from './pages/BaiTapGioHang/BaiTapGioHang';
import Navigation from './components/baitapHomeLayout/Navigation';
import Page404 from './pages/Page404/Page404';
import FormCreateProduct from './Form/FormCreateProduct'
import Lifecycle from './pages/Lifecycle/Lifecycle';
import Store from './pages/StoreAPI/Store';
import ReduxDemo from './pages/ReduxDemo/ReduxDemo';
import BaiTapGameXucSac from './pages/BaiTapGameXucSac/BaiTapGameXucSac';
import UseStateDemo from './pages/HookDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import DemoCategory from './pages/HookDemo/UseEffectDemo/DemoCategory';
import UseCallBackDemo from './pages/HookDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';
import UseReduxDemo from './pages/HookDemo/UseReduxDemo/UseReduxDemo';
import DemoUseNavigate from './pages/HooksRouter/DemoUseNavigate';
import DemoUseParams from './pages/HooksRouter/DemoUseParams';
import DemoUseSearchParams from './pages/HooksRouter/DemoUseSearchParams';
import DemoCustom from './pages/HooksRouter/DemoCustom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* localhost:3000 */}
        <Route path='' element={<HomeTemplate />} >
          <Route index element={<Home />} />
          {/* localhost:3000/home */}
          <Route path='home' element={<Home />} />
          {/* localhost:3000/login */}
          <Route path='login' element={<Login />} />
          {/* localhost:3000/register */}
          <Route path='register' element={<Register />} />
          {/* localhost:3000/excarstore */}
          <Route path='excarstore' element={<ExerciseCarStone />} />
          <Route path='btgiohang' element={<BaiTapGioHang />} />
          <Route path='page404' element={<Page404 />} />
          <Route path='form' element={<FormCreateProduct />} />
          <Route path='lifecycle' element={<Lifecycle />} />
          <Route path='store' element={<Store />} />

          <Route path='reduxdemo' element={<ReduxDemo />} />
          <Route path='baitapgamexucxac' element={<BaiTapGameXucSac />} />
          <Route path='hook-use-state' element={<UseStateDemo />} />
          <Route path='hook-use-effect' element={<UseEffectDemo />} />
          <Route path='hook-use-effect-update' element={<DemoCategory />} />
          <Route path='hook-use-callback' element={<UseCallBackDemo />} />
          <Route path='hook-use-memo' element={<UseMemoDemo />} />
          <Route path='hook-use-ref' element={<UseRefDemo />} />
          <Route path='hook-use-redux' element={<UseReduxDemo />} />
          <Route path='hook-use-navigate' element={<DemoUseNavigate />} />
          <Route path='detail' >
            <Route path=':id' element={<DemoUseParams />} />
          </Route>
          <Route path='hook-use-search-params' element={<DemoUseSearchParams />} />
          <Route path='demo-custom' element={<DemoCustom />} />











          {/* <Route path='*' element={<Navigate to='/page404' />} /> */}
          <Route path='*' element={<Navigate to='/' />} />

        </Route >

      </Routes>
    </BrowserRouter>
  </Provider>
);

