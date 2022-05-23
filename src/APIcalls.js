const fetchData = (path) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${path}`)
}

export { fetchData };
