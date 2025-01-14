import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from "./router.tsx"

import './swiper.min.css'
import './pagination.min.css'
import './navigation.min.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
