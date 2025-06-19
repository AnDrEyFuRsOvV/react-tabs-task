import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Dasboard from "./pages/Dashboard"
import Banking from "./pages/Banking"
import Accounting from "./pages/Accounting"
import Administration from "./pages/Administration"
import Auswahllisten from "./pages/Auswahllisten"
import Doppage1 from "./pages/Doppage1"
import Doppage2 from "./pages/Doppage2"
import Doppage3 from "./pages/Doppage3"
import Einkauf from "./pages/Einkauf"
import Help from "./pages/Help"
import Lagerverwaltung from "./pages/Lagerverwaltung"
import PostOffice from "./pages/PostOffice"
import Rechn from "./pages/Rechn"
import Statistik from "./pages/Statistik"
import Telephone from "./pages/Telephone"
import Verkauf from "./pages/Verkauf"
import Warenbestand from "./pages/Warenbestand"


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dasboard />} />
        <Route path="banking" element={<Banking />} />
        <Route path="accounting" element={<Accounting />} />
        <Route path="administration" element={<Administration />} />
        <Route path="auswahllisten" element={<Auswahllisten />} />
        <Route path="doppage1" element={<Doppage1 />} />
        <Route path="doppage2" element={<Doppage2 />} />
        <Route path="doppage3" element={<Doppage3 />} />
        <Route path="einkauf" element={<Einkauf />} />
        <Route path="help" element={<Help />} />
        <Route path="lagerverwaltung" element={<Lagerverwaltung />} />
        <Route path="post-office" element={<PostOffice />} />
        <Route path="rechn" element={<Rechn />} />
        <Route path="statistik" element={<Statistik />} />
        <Route path="telephone" element={<Telephone />} />
        <Route path="verkauf" element={<Verkauf />} />
        <Route path="warenbestand" element={<Warenbestand />} />
      </Route>
    </Routes>
  )
}

export default App
