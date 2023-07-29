import { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { TextField } from "@mui/material";
import { api } from "../../Api/api";
import { ModalNewAlbum } from "../../interfaces/Body";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ModalAdicionarNewAlbum({ openModal, close }: ModalNewAlbum) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const handleClose = () => {
    close();
  };

  const handleSubmitAddAlbum = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = {
      name,
      year,
    };

    api
      .post("album", params)
      .then(() => {
        alert("Albúm adicionado!");
        window.location.reload();
        close();
      })
      .catch(() => alert("Erro ao adicionar esse albúm"));
  };

  return (
    <>
      {openModal && (
        <div>
          <Dialog
            open={openModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <p className="text-gray-600">
                {"Deseja Adicionar um novo albúm?"}
              </p>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                className="text-center"
              >
                <>
                  <form
                    className="flex-col"
                    autoComplete="npes"
                    onSubmit={handleSubmitAddAlbum}
                  >
                    <div className="flex justify-center items-center gap-3 pt-4 ">
                      <div className="flex flex-col gap-3">
                        <TextField
                          id="album"
                          label="Nome do novo albúm"
                          variant="outlined"
                          size="small"
                          type="text"
                          required
                          autoComplete="npes"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                          id="faixa"
                          label="Ano de lançamento"
                          variant="outlined"
                          size="small"
                          type="text"
                          required
                          autoComplete="npes"
                          onChange={(e) => setYear(e.target.value)}
                        />
                      </div>
                    </div>

                    <DialogActions>
                      <Button color="primary" type="submit">
                        Confirmar
                      </Button>
                      <Button onClick={handleClose} color="error">
                        Fechar
                      </Button>
                    </DialogActions>
                  </form>
                </>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
