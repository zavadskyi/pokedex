export const _baseApiURL = "https://pokeapi.co/api/v2";

export const getData = async (url) => {
    const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  return await res.json();
 
  
};
