import { useState } from "react";
import { Navbar, Gallery, Form, Loading } from "./components";

const images = [
  { url: "https://picsum.photos/id/237/200/300", name: "imagen 1" },
  { url: "https://picsum.photos/id/238/200/300", name: "imagen 2" },
  { url: "https://picsum.photos/id/239/200/300", name: "imagen 3" },
  { url: "https://picsum.photos/id/236/200/300", name: "imagen 4" },
  { url: "https://picsum.photos/id/235/200/300", name: "imagen 5" },
  { url: "https://picsum.photos/id/234/200/300", name: "imagen 6" }
];

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
   <main className="bg-gradient-to-tr from-cyan-600 to-teal-600">
    <Navbar handleDark={() => setDarkMode(!darkMode)}/>
    <div className={`${darkMode ? "dark": ""} flex justify-center my-20`}>
      <Loading />
    </div>
    <Form />
    <Gallery images={images} />
   </main>
  );
}