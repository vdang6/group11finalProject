import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantPage from "./routes/RestaurantPage";
import UpdatePage from "./routes/UpdatePage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App= ()=> {
    return(
        <RestaurantsContextProvider>
            <div className="container">
                <Router>
                    <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/restaurants/:id" element={<RestaurantPage />}></Route>
                    <Route exact path="/restaurants/:id/update" element={<UpdatePage />}></Route>
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvider>
    )

}

export default App;