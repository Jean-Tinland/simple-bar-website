export const getRepo = () => fetch('https://api.github.com/repos/Jean-Tinland/simple-bar').then((res) => res.json())
