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
<div className="grid grid-cols-1">
  {characters.map((character) => (
    <div key={character.id} className="border rounded-lg p-4 m-1 shadow-md flex flex-col w-1/2">
      <h2 className="text-lg font-bold mb-2">{character.name}</h2>
      <p className="text-sm">Status: {character.status}</p>
      <p className="text-sm">Species: {character.species}</p>
      <p className="text-sm">Gender: {character.gender}</p>
    </div>
  ))}
</div>
  );
};

export default CharacterList;
