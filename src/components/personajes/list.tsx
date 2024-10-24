import Image from 'next/image';
import React from 'react';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

type CharacterListProps = {
  characters: Character[];
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {characters.map((character) => (
        <div key={character.id} className="border rounded-lg p-4 shadow-md">
          <Image src={character.image} alt={character.name} className="w-full h-auto mb-2 rounded-lg" width={300} height={300} />
          <h2 className="text-lg font-bold">{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
