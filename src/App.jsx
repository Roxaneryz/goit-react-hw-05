import { Route, Router } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReview from "./components/MovieReview/MovieReview"
import NotFoundPage from "./pages/NotFoundPage"



const App = () => {
  return (
    <Router>
      <Route path="/" elements={<HomePage/>}>
        <Route path="/movies" elements={<MoviePage />} />
        <Route path="/movies/:moviesId" elements={<MovieDetailsPage />}>
          <Route path="cast" elemnts={<MovieCast />} />
          <Route path= "reviews" elements={<MovieReview/>}/>
        </Route>
        <Route path = "*" elemnts = {<NotFoundPage/>}/>

      </Route>

     
  </Router>
  )
}

export default App