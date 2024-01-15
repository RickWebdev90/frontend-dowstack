const auth = sessionStorage.getItem("userid");
const fetchBalance = async (setBalance) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `https://dowstack.onrender.com/users/${auth}`,
      config
    );
    const data = await response.json();
    // console.log("data", data)
    console.log("USERbalance", data.balance);
    setBalance(data.balance);
    return data.balance;
    //   setBalance(data.balance);
  } catch (err) {
    console.log("irgendwas stimmt nicht", err);
  }
};
export default fetchBalance;
