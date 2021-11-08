export const additionalKey = () => {
  let key = "";
  const alph = "abcçdefghıijklmnoöprsştuüvyz";
  const randomLetter = () =>
    alph.charAt(Math.floor(Math.random() * alph.length));
  while (key.length < 6) {
    key += randomLetter();
    key += (Math.random() * 20).toFixed();
  }

  return key;
};

const infosToExclude = ["Poster", "imdbID", "Response", "Website", "Type"];

export const filterUnnecessaryInfo = (data) =>
  Object.keys(data)
    .map((key, ind) => {
      if (!Array.isArray(data[key]) && !infosToExclude.includes(key)) {
        return {
          name: key,
          value: data[key],
          id: ind,
        };
      }
      return undefined;
    })
    .filter(Boolean);
