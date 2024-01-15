const deleteEntry = async (id, boolean) => {
  const deleteRoute = boolean === "Income" ? "in" : "out";
  const deleteRequest = {
    _id: id,
  };
  const configDelete = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deleteRequest),
  };
  try {
    const response = await fetch(
      `https://dowstack.onrender.com/${deleteRoute}/delete`,
      configDelete
    );
    console.log(response);
    console.log(deleteRoute);
    const data = await response.json();
    console.log("Deleted Entry 👋:", data);
  } catch (err) {
    console.log("creating Ticket failed!", err);
  }
};
export default deleteEntry;
