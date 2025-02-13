import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePage from './page/create';
import EditPage from './page/edit';
import ListPage from './page/list';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  )
}

export default App