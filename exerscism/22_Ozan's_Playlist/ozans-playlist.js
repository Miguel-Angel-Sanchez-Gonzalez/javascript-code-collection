// Solución al ejercicio de Exercism: "Ozan's Playlist"
// Enunciado tomado de Exercism.org

export function removeDuplicates(playlist) {
  const cleanSet = new Set(playlist);
  playlist = Array.from(cleanSet);
  return playlist;
}

// Test case
const playlist = [
  "Court and Spark - Joni Mitchell",
  "Big Yellow Taxi - Joni Mitchell",
  "Court and Spark - Joni Mitchell",
];

console.log(removeDuplicates(playlist));

export function hasTrack(playlist, track) {
  return playlist.includes(track);
}

// Test case
const playlist2 = [
  "The Fashion Show - Grace Jones",
  "Dr. Funkenstein - Parliament",
];

console.log(hasTrack(playlist2, "Dr. Funkenstein - Parliament"));
console.log(hasTrack(playlist2, "Walking in the Rain - Grace Jones"));

export function addTrack(playlist, track) {
  playlist.push(track);
  playlist = removeDuplicates(playlist);
  return playlist;
}

// Test case
const playlist3 = ["Selma - Bijelo Dugme"];
addTrack(playlist3, "Atomic Dog - George Clinton");
console.log(addTrack(playlist3, "Selma - Bijelo Dugme"));

export function deleteTrack(playlist, track) {
  const deleteTackSet = new Set(playlist);
  deleteTackSet.delete(track);
  return Array.from(deleteTackSet);
}

// Test case
const playlist4 = [
  "The Treasure - Fra Lippo Lippi",
  "After the Fall - Klaus Nomi",
];

console.log(deleteTrack(playlist4, "The Treasure - Fra Lippo Lippi"));
console.log(deleteTrack(playlist4, "I Feel the Magic - Belinda Carlisle"));

export function listArtists(playlist) {
  const artist = new Set();
  for (const track of playlist) {
    artist.add(track.split(" - ").pop());
  }
  return Array.from(artist);
}

// Test case
const playlist5 = [
  "All Mine - Portishead",
  "Sight to Behold - Devendra Banhart",
  "Sour Times - Portishead",
];

console.log(listArtists(playlist5));
