export interface Track {
  number: number;
  title: string;
  duration: number;
  id: number;
}

export interface Album {
  id: number;
  name: string;
  year: number;
  tracks: Track[];
}

export interface IModalProps {
  id: number;
  number: number;
  title: string;
  duration: number;
}

export interface IModalDelete {
  id: number;
  name: string;
  year: number;
}

export interface ModalRemoveProps {
  openModal: boolean;
  close: () => void;
  row: IModalDelete | null;
}

export interface ModalAddFaixa {
  openModal: boolean;
  close: () => void;
  idAlbum: number;
}

export interface ModalNewAlbum {
  openModal: boolean;
  close: () => void;
}

export interface modalRemoveFaixa {
  openModal: boolean;
  close: () => void;
  row: IModalProps | null;
}
