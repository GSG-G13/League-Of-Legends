const getData = () => {
  return fetch(`http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json`)
    .then(res => res.json())
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
};

export default getData;