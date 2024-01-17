import getBalanceById from "../user/UserBalance/GetBalanceById";
const UpdateBalance = async (userId, boolean, amount) => {
  const currentUserBalance = await getBalanceById();
  console.log(
    "CURRENT USER BALANCE:",
    typeof currentUserBalance,
    currentUserBalance
  );
  let amountReformed = "";
  if (typeof amount === "string") {
    console.log("THE RECIEVED AMOUNT IS A STRING:", typeof amount, amount);
    amountReformed = amount.replace(",", ".");
  } else {
    console.log("THE RECIEVED AMOUNT IS A Number:", typeof amount, amount);
    amountReformed = amount;
  }
  const amountAsFloat = parseFloat(amountReformed);
  const updatedBalance =
    boolean === "true"
      ? currentUserBalance + amountAsFloat
      : currentUserBalance - amountAsFloat;
  console.log("UPDATED BALANCE:", typeof updatedBalance, updatedBalance);
  const newBalance = {
    userId: userId,
    updateData: {
      balance: updatedBalance === null ? 0 : updatedBalance,
    },
  };
  console.log("NEWBALANCE", newBalance);
  const configUpdate = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBalance),
  };
  try {
    const response = await fetch(
      "https://dowstack.onrender.com/users/settings",
      configUpdate
    );
    const data = await response.json();
    console.log("UPDATE BALANCE MSG:", data);
  } catch (err) {
    console.log("creating Ticket failed!", err);
  }
};
export default UpdateBalance;
