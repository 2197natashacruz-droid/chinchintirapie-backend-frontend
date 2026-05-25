import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import { AuthProvider } from './context/AuthContext'
import './styles/global.css'

// Lazy-loaded pages para mejor rendimiento
const Home            = lazy(() => import('./pages/Home.jsx'))
const Historia        = lazy(() => import('./pages/Historia.jsx'))
const Organizacion    = lazy(() => import('./pages/Organizacion.jsx'))
const Noticias        = lazy(() => import('./pages/Noticias.jsx'))
const CEDOC           = lazy(() => import('./pages/CEDOC.jsx'))
const Contacto        = lazy(() => import('./pages/Contacto.jsx'))
const Tienda          = lazy(() => import('./pages/Tienda.jsx'))
const Login           = lazy(() => import('./pages/Login.jsx'))

const Cronicas        = lazy(() => import('./pages/Cronicas.jsx'))
const Repositorio     = lazy(() => import('./pages/Repositorio.jsx'))
const MaterialEducativo = lazy(() => import('./pages/MaterialEducativo.jsx'))

const NoticiaDetail           = lazy(() => import('./pages/NoticiaDetail.jsx'))
const CronicaDetail           = lazy(() => import('./pages/CronicaDetail.jsx'))
const RepositorioDetail       = lazy(() => import('./pages/RepositorioDetail.jsx'))
const CEDOCDetail             = lazy(() => import('./pages/CEDOCDetail.jsx'))
const MaterialEducativoDetail = lazy(() => import('./pages/MaterialEducativoDetail.jsx'))


function PageLoader() {
  return (
    <div className="page-loader">
      🥁 Cargando...
    </div>
  )
}

function Layout() {
  const { pathname } = useLocation()
  const isLogin = pathname === '/login'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {!isLogin && <Navbar />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/historia"           element={<Historia />} />
          <Route path="/organizacion"       element={<Organizacion />} />
          <Route path="/noticias"           element={<Noticias />} />
          <Route path="/cronicas"           element={<Cronicas />} />
          <Route path="/repositorio"        element={<Repositorio />} />
          <Route path="/cedoc"              element={<CEDOC />} />
          <Route path="/material-educativo" element={<MaterialEducativo />} />
          <Route path="/contacto"           element={<Contacto />} />
          <Route path="/tienda"             element={<Tienda />} />
          <Route path="/login"              element={<Login />} />

          <Route path="/noticias/:id"       element={<NoticiaDetail />} />
          <Route path="/cronicas/:id"       element={<CronicaDetail />} />
          <Route path="/repositorio/:id"    element={<RepositorioDetail />} />
          <Route path="/cedoc/:id"          element={<CEDOCDetail />} />
          <Route path="/material-educativo/:id" element={<MaterialEducativoDetail />} />
          <Route path="*" element={
            <div className="page-empty-state">
              <div className="page-empty-state-icon">🎭</div>
              <h1 className="page-empty-state-title">Página no encontrada</h1>
              <p className="page-empty-state-text">Parece que esta calle no lleva al carnaval.</p>
              <a href="/" className="btn btn-primary">← Volver al inicio</a>
            </div>
          } />
        </Routes>
      </Suspense>
      {!isLogin && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  )
}
