export interface IModalProps {
  id: number;
  number: number;
  title: string;
  duration: number;
}

export interface Album {
  id: number;
  name: string;
  year: number;
  tracks: IModalProps[];
}

export interface IModalDelete {
  id: number;
  name: string;
  year: number;
}

export interface ModalProps {
  openModal: boolean;
  close: () => void;
}

export interface ModalRemoveProps extends ModalProps {
  row: IModalDelete | null;
}

export interface ModalAddFaixaProps extends ModalProps {
  idAlbum: number;
}

export interface ModalRemoveFaixas extends ModalProps {
  row: IModalProps | null;
}
