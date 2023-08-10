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
import { ModalAddFaixaProps } from "../../interfaces/Body";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ModalAdicionarFaixa({
  openModal,
  close,
  idAlbum,
}: ModalAddFaixaProps) {
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleClose = () => {
    close();
  };

  const handleSubmitAddFaixa = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = {
      album_id: idAlbum,
      number: +number,
      title,
      duration: +duration,
    };

    api
      .post("track", params)
      .then(() => {
        alert("faixa adicionada!");
        window.location.reload();
        close();
      })
      .catch(() => alert("Erro ao adicionar essa faixa"));
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
                {"Deseja Adicionar uma nova faixa?"}
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
                    onSubmit={handleSubmitAddFaixa}
                  >
                    <div className="flex justify-center items-center gap-3 pt-4 ">
                      <div className="flex flex-col gap-3">
                        <TextField
                          id="album"
                          label="Número do albúm"
                          variant="outlined"
                          size="small"
                          type="number"
                          required
                          autoComplete="npes"
                          value={idAlbum}
                          disabled
                        />
                        <TextField
                          id="faixa"
                          label="Número da faixa"
                          variant="outlined"
                          size="small"
                          type="number"
                          required
                          autoComplete="npes"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <TextField
                          id="titulo"
                          label="Titulo da faixa"
                          variant="outlined"
                          size="small"
                          type="text"
                          required
                          autoComplete="npes"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                          id="duration"
                          label="Duração da faixa"
                          variant="outlined"
                          size="small"
                          type="number"
                          required
                          autoComplete="npes"
                          onChange={(e) => setDuration(e.target.value)}
                        />
                      </div>
                    </div>

                    <DialogActions>
                      <Button color="primary" type="submit">
                        Confirmar
                      </Button>
                      <Button onClick={handleClose} color="error" className="">
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
