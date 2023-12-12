"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import MovieDetailsModal from "../MovieDetailsModal";

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

interface MovieListProps {
  movieList: {
    id: string;
    name: string;
    poster: string;
    sinopse: string;
  }[];
  handleDeleteMovie: (id: string) => void;
  handleOpenEditModal?: (movie: any) => void;
}

export default function MovieList({
  movieList,
  handleDeleteMovie,
  handleOpenEditModal,
}: MovieListProps) {
  const [selectedMovie, setSelectedMovie] = useState(null as any);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const onClose = () => {
    setSelectedMovie(null);
    setIsDetailsModalOpen(false);
  };

  const handleOpenDetailsModal = (id: string) => {
    const movie: any = movieList.find((movie) => movie.id === id);
    setSelectedMovie(movie);
    setIsDetailsModalOpen(true);
  };

  const moviesList = useMemo(() => {
    return movieList.map((movie) => (
      <div
        key={movie.id}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-md opacity-100 md:opacity-60 hover:opacity-100 transition-opacity duration-300 w-[max-content]"
      >
        <div
          className="relative cursor-pointer overflow-hidden"
          onClick={() => handleOpenDetailsModal(movie.id)}
        >
          <img
            src={movie.poster}
            alt={movie.name}
            className="object-cover w-[400px] h-[600px]"
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl text-gray-200 font-bold mb-2">{movie.name}</h2>
        </div>

        <div className="p-4 flex justify-end gap-[12px] items-center">
          <button
            className="py-2 rounded-md text-blue-500 font-bold text-sm hover:text-gray-100 transition-colors duration-300"
            onClick={() => handleOpenEditModal && handleOpenEditModal(movie)}
          >
            <FiEdit size={24} />
          </button>

          <button
            className="py-2 rounded-md text-red-500 font-bold text-sm hover:text-gray-100 transition-colors duration-300"
            onClick={() => handleDeleteMovie(movie.id)}
          >
            <FiTrash2 size={24} />
          </button>
        </div>
      </div>
    ));
  }, [movieList]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
      {moviesList}

      <MovieDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={onClose}
        movie={selectedMovie}
      />
    </div>
  );
}
