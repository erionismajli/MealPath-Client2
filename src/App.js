import React from "react";
import { Header, CreateContainer, MainContainer, Login, Signup, MenuContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";


const App = () => {

    return (

        <AnimatePresence /*exitBeforeEnter*/ >
            <div className="w-screen h-auto flex flex-col bg-primary">
             <Header />

              <main className="mt-14 md:mt-20 px-4 md:px-16 py-4  w-full">
                  <Routes>
                      <Route path="/*" element={<MainContainer />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/createItem" element={<CreateContainer />} />
                      <Route path="/menu" element={<MenuContainer />} />
                 </Routes>
              </main>
            </div>
        </AnimatePresence>
    
        );
};


export default App;
