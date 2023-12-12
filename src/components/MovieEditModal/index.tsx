import ModalTemplate from "../ModalTemplate";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";

interface MovieEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: {
    id: string;
    name: string;
    poster: string;
    sinopse: string;
  };
  onSave: (editedMovie: {
    id: string;
    name: string;
    poster: string;
    sinopse: string;
  }) => void;
}

export default function MovieEditModal({
  isOpen,
  onClose,
  movie,
  onSave,
}: MovieEditModalProps) {
  const [editedMovie, setEditedMovie] = useState({
    id: movie.id,
    name: movie.name,
    poster: movie.poster,
    sinopse: movie.sinopse,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setEditedMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedMovie);
    onClose();

    toast.success("Filme editado com sucesso!");
  };

  return (
    <div>
      {isOpen && (
        <ModalTemplate>
          <div className="w-[500px] md:w-[700px] bg-gray-800 rounded-lg p-[24px] relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white"
            >
              <IoCloseOutline size={24} />
            </button>

            <div className="flex flex-col items-center">
              <img
                src={editedMovie.poster}
                alt={editedMovie.name}
                className="w-[200px] h-[200px] object-cover rounded-lg shadow-md"
              />

              <h2 className="text-3xl font-bold mt-4 text-white">
                Editar Filme
              </h2>

              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col md:flex-row gap-[12px]">
                  <div className="text-gray-300">
                    <label>Título:</label>
                    <input
                      type="text"
                      name="name"
                      value={editedMovie.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 rounded-md p-2 text-white"
                    />
                  </div>

                  <div>
                    <label>Poster URL:</label>
                    <input
                      type="text"
                      name="poster"
                      value={editedMovie.poster}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 rounded-md p-2 text-white overflow-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label>Sinopse:</label>
                  <textarea
                    name="sinopse"
                    value={editedMovie.sinopse}
                    onChange={handleInputChange}
                    className="w-full h-36 bg-gray-700 rounded-md p-2 text-white"
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="mt-4 bg-blue-500 px-4 py-2 rounded-md text-white font-bold text-xl"
              >
                Salvar
              </button>
            </div>
          </div>
        </ModalTemplate>
      )}
    </div>
  );
}
