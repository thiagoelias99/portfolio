import { BrowserRouter, Route, Routes } from "react-router"
import MainTemplate from "./template/main-template"
import MainPage from "./pages/main"
import ProjectsPage from "./pages/projects"
import ProjectPage from "./pages/project"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<MainPage />} />
          <Route path="projetos" element={<ProjectsPage />} />
          <Route path="projetos/:slug" element={<ProjectPage />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
