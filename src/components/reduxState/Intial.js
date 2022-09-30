var data;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "bcc8098ffamshce8bb38499c7410p14e8e6jsnac5a1d470508",
//     "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
//   },
// };
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ad11b2b852mshb911cd884c7238ep1fda53jsnf320c74be2de",
    "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
  },
};

async function intial() {
  const response = await fetch(
    "https://opensea13.p.rapidapi.com/assets?order_direction=desc&limit=50&include_orders=false",
    options
  );
  data = await response.json();
  // console.log(data);
  return data;
}
data = intial();

export default data;
