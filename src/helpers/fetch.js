
export const fetchData = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        fetch(url)
        .then((res) => res.json())
      )
    }, 1500);
  })
}
