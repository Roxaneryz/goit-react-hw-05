import { Route, Routes } from "react-router-dom"
import {lazy, Suspense } from "react"
import Navigation from "./components/Navigation/Navigation"




const HomePage= lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import('./pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReview/MovieReview'));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" elements={<HomePage />}/>
            <Route path="/movies" elements={<MoviesPage />} />
            <Route path="/movies/:moviesId" elements={<MovieDetailsPage />}>
              <Route path="cast" elements={<MovieCast />} />
              <Route path="reviews" elements={<MovieReviews />} />
            </Route>
            <Route path="*" elements={<NotFoundPage />} />
          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App