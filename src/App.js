import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovie from "./pages/Movie/Create"
import Popular from "./pages/Movie/Popular"
import NowPlaying from "./pages/Movie/NowPlaying"
import TopRated from "./pages/Movie/TopRated"
import { ThemeProvider } from 'styled-components';
import theme from "./components/utils/constants/theme";
import GlobalStyle from './components/GlobalStyle';
import Detail from "./pages/Movie/Detail";


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now" element={<NowPlaying />}></Route>
          <Route path="/movie/top" element={<TopRated />}></Route>
          <Route path="/movie/:id" element={<Detail />}> </Route> 
        </Routes>
      </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;
