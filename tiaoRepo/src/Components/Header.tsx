import logo from "../assets/logo.png";

export function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white shadow-lg   ">
        <img src={logo} alt="Imagem do Tião Carreiro" />
        <p className="text-gray-500 text-2xl font-sans">Discografia</p>
      </div>
    </>
  );
}
