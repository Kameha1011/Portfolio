import './App.css'
import { FloatingSideBar } from './components/FloatingSideBar/FloatingSideBar'
import { Header } from './components/Header/Header'
export const App: React.FC = () => {

  return (
    <>
      <Header />
      <FloatingSideBar />
    </>
  )
}

