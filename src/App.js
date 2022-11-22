import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Post from "./pages/Post";
import {React, useState} from "react";
import "./App.scss"

function App() {
    return (
        <div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    {/*<Route path="/post/:id" element={<Post content={getBlogContent}/>} />*/}
                    {/*<Route path="/post" element={<Post content={getBlogContent}/>} />*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
