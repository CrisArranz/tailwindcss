import { Navbar, Gallery, Form } from "./components";

const images = [
  { url: "https://picsum.photos/id/237/200/300", name: "imagen 1" },
  { url: "https://picsum.photos/id/238/200/300", name: "imagen 2" },
  { url: "https://picsum.photos/id/239/200/300", name: "imagen 3" },
  { url: "https://picsum.photos/id/236/200/300", name: "imagen 4" },
  { url: "https://picsum.photos/id/235/200/300", name: "imagen 5" },
  { url: "https://picsum.photos/id/234/200/300", name: "imagen 6" }
];

export default function App() {
  return (
   <main className="bg-gradient-to-tr from-cyan-600 to-teal-600">
    <Navbar />
    <Form />
    <Gallery images={images} />
   </main>
  );
}