import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ModalRemoveProps } from "../../interfaces/Body";
import { api } from "../../Api/api";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ModalRemoveAlbum({ openModal, close, row }: ModalRemoveProps) {
  const handleClose = () => {
    close();
  };

  const handleDeleteAlbum = () => {
    api
      .delete(`album/${row?.id}`)
      .then(() => {
        alert("Álbum deletado");
        window.location.reload();
        close();
      })
      .catch((error) => console.error(error));
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
              <p className="text-gray-600">{"Deseja excluir essa faixa?"}</p>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                className="text-center"
              >
                <>
                  <div className="flex justify-between items-center w-full hover:bg-[#ffffff81]">
                    <div className="flex justify-between items-center cursor-pointer  ">
                      <div className="flex justify-center items-center gap-5">
                        <span className="text-gray-600 ">{`Álbum: ${row?.name}`}</span>
                        <span className="text-gray-600">{`Ano: ${row?.year}`}</span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteAlbum} color="primary" type="submit">
                Confirmar
              </Button>
              <Button onClick={handleClose} color="error" className="">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
}
