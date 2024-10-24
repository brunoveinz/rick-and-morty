'use server'

export async function getCharacters() {
  try {
    // Simular un retraso de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
