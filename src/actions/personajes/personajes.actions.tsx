// app/actions/character.actions.ts
'use server'

export async function getCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}