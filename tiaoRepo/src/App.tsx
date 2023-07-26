import "./App.css";
import { Body } from "./Components/Body";
import { Header } from "./Components/Header";

export function App() {
  return (
    <>
      <div className="flex justify-center  w-full bg-[url('../src/assets/background.png')] bg-no-repeat bg-cover bg-center h-screen ">
        <div className="pt-2 px-4 pb-2 w-[80%]">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
}
