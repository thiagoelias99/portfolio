import { BrowserRouter, Route, Routes } from "react-router"
import MainTemplate from "./template/main-template"
import MainPage from "./pages/main"
import ProjectsPage from "./pages/projects"
import RsNlwPlanner from "./pages/projects/rs-nlw-planner"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<MainPage />} />
          <Route path="projetos" element={<ProjectsPage />} />
          <Route path="projetos/rs-nlw-planner" element={<RsNlwPlanner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
