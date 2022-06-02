import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePerson from "./Pages/ProfilePerson";
import SearchPerson from "./Pages/SearchPerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<EmptyPage />} /> */}

        <Route path="/" element={<SearchPerson />} />
        <Route path="/profile/:id" element={<ProfilePerson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
