export default url => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Erro(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}