"use client";

import MovieAddModal from "@/components/MovieAddModal";
import MovieEditModal from "@/components/MovieEditModal";
import MovieList from "@/components/MovieList";
import { useState } from "react";
import toast from "react-hot-toast";

interface Movie {
  id: string;
  name: string;
  poster: string;
  sinopse: string;
}

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([
    {
      id: "1",
      name: "Um Príncipe em Nova York 2",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
      sinopse:
        "Em Um Príncipe em Nova York 2, no luxuoso país da realeza de Zamunda, o Rei Akeem (Eddie Murphy) descobre que tem um filho bastardo nos EUA, que ele não conhece e que pode ser herdeiro do trono — apesar do nobre já ter três filhas preparadas para assumir o governo, e que não recebem a notícia do novo irmão muito bem. Na sequência da franquia de sucesso Um Príncipe em Nova York, Akeem e seu confidente Semmi (Arsenio Hall) embarcam em uma hilária jornada que os levará de sua grande nação africana, de volta ao Queens, bairro de Nova York. O jovem Lavelle (Jermaine Fowler) é trazido para aprender a ser Rei no país da África, mas Akeem ainda precisará lidar com seu rival político, o General Izzi (Wesley Snipes), que insiste em um casamento arranjado para unir os povos de Zamunda, além de administrar as princesas injustiçadas que perderam o lugar na linha de sucessão ao trono.",
    },
    {
      id: "2",
      name: "Liga da Justiça de Zack Snyder",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
      sinopse:
        "Depois de restaurar sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca Diana Prince para combater um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes -- Batman, Mulher-Maravilha, Aquaman, Ciborgue, e Flash -- poderá ser tarde demais para salvar o planeta de um catastrófico ataque.",
    },
    {
      id: "3",
      name: "Raya e o Último Dragão",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
      sinopse:
        "Em Raya e o Último Dragão, em uma região antiga e mágica, habitada por dragões mágicos que controlam o tempo e o redor, Raya é uma princesa de um país quebrado entre clãs. Porém, após uma terrível batalha entre dragões e o mal, os seres desapareceram, deixando a terra à mercê dos terríveis monstros que sugam qualquer vida e os transformam em pedra. Após uma reunião entre as tribos que acaba com seu clã sendo petrificado, Raya, agora uma exilada, sai em busca de um último dragão para que possa restabelecer a natureza do local. A princesa acaba encontrando Sisu, a última da espécie que decide ajudar Raya e deixar seus irmãos dragões orgulhosos. Mas à medida que eles vão encontrando pedaços de uma pedra que pode por o fim nos monstros de uma vez por todas, Raya e Sisu farão amizades e inimigos que vão mudar o curso de toda a história.",
    },
    {
      id: "4",
      name: "Tom & Jerry: O Filme",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
      sinopse:
        'Adaptação dos desenhos, Tom & Jerry: O Filme mostra uma das rivalidades mais amadas da história que é reacendida quando Jerry se muda para o melhor hotel de Nova York na véspera do "casamento do século", forçando a desesperada organizadora do evento (Chloe Moretz) a contratar Tom para se livrar do rato. Mas logo surge um problema ainda maior: um funcionário diabolicamente ambicioso conspira contra os três. Uma combinação de animação clássica e live-action.',
    },
    {
      id: "5",
      name: "Monster Hunter",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
      sinopse:
        "Baseado no jogo da Capcom chamado Monster Hunter, por trás do mundo que conhecemos, existe um perigoso universo, com bestas gigantes e monstros perigosos que governam com total feracidade. Quando uma tempestade de areia transporta a Tenente Artemis (Milla Jovovich) e sua unidade para esse mundo, os soldados ficam em choque, descobrindo que o novo ambiente é o hostil lar de diversas criaturas perigosas, imunes ao seu poder de fogo. Batalhando por suas vidas, a unidade precisará de um milagre para se salvar da fúria desse inóspito novo local.",
    },
    {
      id: "6",
      name: "Mortal Kombat",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
      sinopse:
        "Em Mortal Kombat, Shang Tsung, imperador da Exoterra, envia seu melhor guerreiro, Sub-Zero, para assassinar o jovem Cole Young. Temendo pela segurança da família, Cole vai em busca de Sonya Blade seguindo a indicação de Jax, um major das Forças Especiais, que tem a mesma estranha marca de dragão com a qual Cole nasceu. Logo, ele se vê no templo do Lorde Raiden, um Deus Ancião e guardião do Plano Terreno, que abriga todos que possuem a marca. No templo, ele treina com os experientes guerreiros Liu Kang, Kung Lao e Kano, enquanto se prepara para lutar contra os inimigos da Exoterra em uma batalha pelo universo. Será que Cole irá longe o suficiente para desbloquear sua arcana - o imenso poder da sua alma - a tempo de salvar não apenas a família, mas interromper os planos de Shang Tsung de uma vez por todas?",
    },
  ]);

  const [editedMovie, setEditedMovie] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddMovie = (movie: any) => {
    setMovieList([...movieList, movie]);
  };

  const handleEditMovie = (editedMovie: any) => {
    let newMovieList = movieList.map((movie) => {
      if (movie.id === editedMovie.id) {
        return editedMovie;
      }

      return movie;
    });

    setMovieList(newMovieList);

    setIsEditModalOpen(false);
  };

  const handleDeleteMovie = (id: string) => {
    let newMovieList = movieList.filter((movie) => {
      return movie.id !== id;
    });

    setMovieList(newMovieList);

    toast.success("Filme removido com sucesso!");
  };

  const handleOpenEditModal = (movie: any) => {
    setEditedMovie(movie);
    setIsEditModalOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-[20px] gap-[20px]">
        <h1 className="text-4xl text-center text-gray-100 font-bold">
          Cinema{" "}
          <strong className="text-green-500">TADS 6 {process.env.TESTE}</strong>
        </h1>

        <div className="flex items-center">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gray-800 rounded-lg p-[12px] text-gray-100 hover:bg-gray-700 transition-colors duration-200"
          >
            Adicionar filme
          </button>
        </div>
      </div>

      <main className="container mx-auto px-[20px] mt-[40px] flex flex-col items-center">
        <MovieList
          movieList={movieList}
          handleDeleteMovie={handleDeleteMovie}
          handleOpenEditModal={handleOpenEditModal}
        />
      </main>

      {isEditModalOpen && (
        <MovieEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          movie={editedMovie as any}
          onSave={(editedMovie) => {
            handleEditMovie(editedMovie);
          }}
        />
      )}

      {isAddModalOpen && (
        <MovieAddModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          handleAddMovie={handleAddMovie}
        />
      )}
    </div>
  );
}
