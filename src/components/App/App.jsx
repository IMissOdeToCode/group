import { Header } from "components";
import { CountrySearch, Home, Country } from "pages";
import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<CountrySearch />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Route>
    </Routes>
  );
};
