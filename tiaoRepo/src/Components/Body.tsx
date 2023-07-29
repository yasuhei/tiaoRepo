import { useEffect, useState } from "react";
import { api } from "../Api/api";
import { Album, IModalDelete, IModalProps, Track } from "../interfaces/Body";
import { ModalRemoveFaixa } from "./ModalsActions/RemoveFaixa";
import { Plus } from "lucide-react";
import { ModalAdicionarFaixa } from "./ModalsActions/AdicionarFaixa";
import { ModalAdicionarNewAlbum } from "./ModalsActions/AdicionarNewAlbum";
import { ModalRemoveAlbum } from "./ModalsActions/RemoveAlbum";
import { Divider } from "@mui/material";

export function Body() {
  const [data, SetDate] = useState<Album[]>([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openAddNewAlbum, setOpenAddNewAlbum] = useState(false);
  const [openDeleteAlbum, setOpenDeleteAlbum] = useState(false);

  const [selectedTrack, setSelectedTrack] = useState<IModalProps | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<IModalDelete | null>(null);
  const [filtraItem, setFiltraItem] = useState<string>("");
  const [idAlbum, setIdAlbum] = useState(0);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltraItem(event.target.value);
  };

  const filteredData = data.filter((album: Album) => {
    return album.name.toLowerCase().includes(filtraItem.toLowerCase());
  });

  useEffect(() => {
    api
      .get("album")
      .then((response) => SetDate(response.data.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOpen = (row: IModalProps) => {
    setSelectedTrack(row);
    setOpen(true);
  };

  const handleDeleteAlbum = (row: IModalDelete) => {
    setSelectedAlbum(row);
    setOpenDeleteAlbum(true);
  };

  const handleModalOpenAddFaixa = (id: number) => {
    setIdAlbum(id);
    setOpenAdd(true);
  };

  const handleOpenModalNewAlbum = () => {
    setOpenAddNewAlbum(true);
  };

  return (
    <>
      <ModalRemoveFaixa
        close={() => setOpen(false)}
        openModal={open}
        row={selectedTrack}
      />
      <ModalAdicionarFaixa
        close={() => setOpenAdd(false)}
        idAlbum={idAlbum}
        openModal={openAdd}
      />
      <ModalAdicionarNewAlbum
        close={() => setOpenAddNewAlbum(false)}
        openModal={openAddNewAlbum}
      />
      <ModalRemoveAlbum
        close={() => setOpenDeleteAlbum(false)}
        openModal={openDeleteAlbum}
        row={selectedAlbum}
      />

      <main>
        <div className="flex justify-start flex-col items-center w-full pt-3 border h-auto bg-[#ffffff54]">
          <form className="flex  justify-start items-start w-full flex-col">
            <span className="text-gray-600 p-2 mx-2">
              Digite uma palavra chave
            </span>
            <div className="flex  justify-between items-center  w-full  gap-4 px-4">
              <input
                type="search"
                className="bg-white rounded-3xl text-gray-400 p-3 w-full"
                placeholder="Min"
                value={filtraItem}
                onChange={handleSearchChange}
              />
              <button className="bg-blue-500 text-center w-48 text-white p-3 rounded-3xl  font-extralight">
                Procurar
              </button>
            </div>
          </form>

          <div className="pt-7 w-full px-3 ">
            {filteredData.map((item, index) => (
              <>
                <div className="p-4 " key={index}>
                  <h3
                    className="text-gray-600 font-bold cursor-pointer hover:bg-[#ffffff81]"
                    onClick={() => handleDeleteAlbum(item)}
                  >{`Album: ${item.name}, ${item.year}`}</h3>
                  <div className="flex justify-between items-center w-full ">
                    <div className="flex justify-between items-center w-full ">
                      <div className="flex justify-center items-center gap-5 ">
                        <span className="text-gray-600">N°</span>
                        <span className="text-gray-600">Faixa</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600">Duração</span>
                    </div>
                  </div>
                  {item.tracks.map((track: Track) => (
                    <>
                      <div
                        className="flex justify-between items-center w-full hover:bg-[#ffffff81]"
                        onClick={() => handleOpen(track)}
                        key={track.id}
                      >
                        <div className="flex justify-between items-center cursor-pointer  ">
                          <div className="flex justify-center items-center gap-5">
                            <span className="text-gray-600 ">
                              {track.number}
                            </span>
                            <span className="text-gray-600">{track.title}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">
                            {`${track.duration} min `}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
                  <button
                    className="ml-[-8px]"
                    onClick={() => handleModalOpenAddFaixa(item.id)}
                    title="Adicionar nova faixa"
                  >
                    <Plus className="text-gray-600" />
                  </button>
                </div>
              </>
            ))}
            <Divider />

            <div className="py-3">
              <button
                className="text-blue-600 font-bold"
                onClick={handleOpenModalNewAlbum}
              >
                Criar novo álbum
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
