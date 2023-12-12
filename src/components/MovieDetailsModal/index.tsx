"use client";

import ModalTemplate from "../ModalTemplate";

import { IoCloseOutline } from "react-icons/io5";

interface MovieDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: {
    id: string;
    name: string;
    poster: string;
    sinopse: string;
  };
}

export default function MovieDetailsModal({
  isOpen,
  onClose,
  movie,
}: MovieDetailsModalProps) {
  return (
    <div>
      {isOpen && (
        <ModalTemplate>
          <div className="w-[500px] bg-gray-700 rounded-lg relative p-[12px]">
            <div className="flex items-center justify-center">
              <button
                onClick={onClose}
                className="absolute top-[12px] right-[12px]"
              >
                <IoCloseOutline size={24} />
              </button>
            </div>

            <div className="flex flex-col">
              <img
                src={movie.poster}
                alt={movie.name}
                className="w-[300px] h-[350px] md:w-[300px] md:h-[400px] object-cover mx-auto rounded-lg shadow-md"
              />

              <h2 className="text-center  text-2xl font-bold mt-4 mb-2">
                {movie.name}
              </h2>

              <p className="text-justify text-[13px] text-gray-300 h-[200px] overflow-auto bg-gray-800 rounded-md p-2">
                {movie.sinopse}
              </p>

              <div className="flex items-center justify-end gap-[12px] mt-4">
                <button
                  onClick={() => onClose()}
                  className="bg-gray-800 rounded-lg p-[12px] text-gray-100 hover:bg-gray-700 transition-colors duration-200"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </ModalTemplate>
      )}
    </div>
  );
}
