import { Suspense } from "react";
import Title from "@/components/shared/title";
import CharacterList from "@/components/personajes/list";
import { getCharacters } from "@/actions/personajes/personajes.actions";

const Characters = async () => {
  const characters = await getCharacters();
  return <CharacterList characters={characters} />;
};

export default function Home() {
  return (
    <div>
      <Title title="Personajes" />

      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <Suspense fallback={<p>Cargando personajes...</p>}>
            <Characters />
          </Suspense>
        </div>
        <div className="col-span-6">
        </div>
      </div>
    </div>
  );
}
