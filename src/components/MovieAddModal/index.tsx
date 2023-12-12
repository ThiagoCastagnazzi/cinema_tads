"use client";

import { useRef } from "react";
import ModalTemplate from "../ModalTemplate";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";

interface MovieAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleAddMovie: (newMovie: {
    name: string;
    poster: string;
    sinopse: string;
  }) => void;
}

export default function MovieAddModal({
  isOpen,
  onClose,
  handleAddMovie,
}: MovieAddModalProps) {
  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current as any);
    const newMovie = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.get("name"),
      poster: formData.get("poster"),
      sinopse: formData.get("sinopse"),
    };

    if (newMovie.name && newMovie.poster && newMovie.sinopse) {
      handleAddMovie(newMovie as any);
      onClose();

      toast.success("Filme adicionado com sucesso!");
    } else {
      toast.error("Preencha todos os campos!");
    }
  };

  return (
    <div>
      {isOpen && (
        <ModalTemplate>
          <div className="w-[400px] md:w-[700px] bg-gray-800 rounded-lg p-[24px] relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white"
            >
              <IoCloseOutline size={24} />
            </button>

            <h1 className="text-2xl text-gray-100 font-bold mb-[24px]">
              Adicionar filme
            </h1>

            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="flex flex-col mb-[24px]">
                <label htmlFor="name" className="text-gray-100 mb-[8px]">
                  Nome do filme
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-700 rounded-lg p-[8px] text-gray-100"
                />
              </div>

              <div className="flex flex-col mb-[24px]">
                <label htmlFor="poster" className="text-gray-100 mb-[8px]">
                  Poster do filme
                </label>
                <input
                  type="text"
                  name="poster"
                  id="poster"
                  className="bg-gray-700 rounded-lg p-[8px] text-gray-100"
                />
              </div>

              <div className="flex flex-col mb-[24px]">
                <label htmlFor="sinopse" className="text-gray-100 mb-[8px]">
                  Sinopse do filme
                </label>
                <textarea
                  name="sinopse"
                  id="sinopse"
                  className="bg-gray-700 rounded-lg p-[8px] text-gray-100"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 rounded-lg px-[16px] py-[8px] text-gray-100 font-bold"
              >
                Adicionar
              </button>
            </form>
          </div>
        </ModalTemplate>
      )}
    </div>
  );
}
