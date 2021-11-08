import { Switch, Route } from "react-router-dom";

import "./App.css";
import MoviePage from "./pages/MoviePage";
import Movies from "./pages/Movies";
import { Header } from "./components";
import { ScrollToTop, Search } from "./components";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <div className="container">
          <Search />
          <Switch>
            <Route exact path="/movies/" component={Movies} />
            <Route path="/movie/:id" component={MoviePage} />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
