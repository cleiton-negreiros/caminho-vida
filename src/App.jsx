// src/App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Programa from './pages/Programa';
import Depoimentos from './pages/Depoimentos';
import Contato from './pages/Contato';

const AppLayout = () => (
  <>
    <GlobalStyles />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/programa", element: <Programa /> },
      { path: "/depoimentos", element: <Depoimentos /> },
      { path: "/contato", element: <Contato /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



