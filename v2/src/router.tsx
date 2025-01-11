import { BrowserRouter, Route, Routes } from "react-router"
import MainTemplate from "./template/main-template"
import MainPage from "./pages/main"
import ProjectsPage from "./pages/projects"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<MainPage />} />
          <Route path="projetos" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
