import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { LoaderContextProvider } from "./contexts/LoaderContext";
import { NotificationContextProvider } from "./contexts/NotificationContext";

export default function App() {
  return (
    <LoaderContextProvider>
      <NotificationContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<MovieDetailPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </NotificationContextProvider>
    </LoaderContextProvider>
  );
}
