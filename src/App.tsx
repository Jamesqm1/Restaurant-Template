import { Routes, Route } from 'react-router-dom';

import './globals.css';
import RootLayout from '@/_root/RootLayout';
import { About, Contact, Home, Menu, NotFound } from '@/_root/pages';
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from './components/shared';

function App() {

  return (
    <main className="flex h-screen">
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
