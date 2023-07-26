export function Body() {
  return (
    <>
      <main>
        <div className="flex justify-center flex-col items-center w-full pt-3 bg-gray-200 ">
          <form
            action=""
            className="flex  justify-start items-start w-full flex-col"
          >
            <span className="text-gray-600 p-2 mx-2">
              Digite uma palavra chave
            </span>
            <div className="flex  justify-between items-center  w-full  gap-4 px-4">
              <input
                type="search"
                className="bg-white rounded-3xl text-gray-400 p-3 w-full"
                placeholder="Min"
              />
              <button className="bg-blue-500 text-center w-48 text-white p-3 rounded-3xl  font-extralight">
                Procurar
              </button>
            </div>
          </form>

          <div className="pt-7 w-full px-3">
            <h3 className="text-gray-600 font-bold">
              Álbum: Rei do gado, 1961
            </h3>
            <div className="flex justify-between items-center w-full">
              <ul className="flex justify-center items-center gap-12 ">
                <li className="text-gray-400">N°</li>
                <li className="text-gray-400">Faixa</li>
                <ul className="flex justify-center items-center gap-12">
                  <li className="text-gray-400">11</li>
                  <li className="text-gray-400">Minas Gerais</li>
                </ul>
              </ul>
              <span className="text-gray-400">3:47</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
