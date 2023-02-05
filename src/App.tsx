import Header from './components/Header/Header'
import Map from './components/Map/Map'
import ReviewPage from './components/ReviewPage/ReviewPage'
import Footer from "./components/Footer/Footer";
import ViewPage from "./components/ViewPage/ViewPage"
import './App.css'

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Map/>
      <ReviewPage/>
      <Footer/>
      <ViewPage />
    </div>
  )
}
