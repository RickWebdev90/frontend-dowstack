const deleteSavingGoalEntry = async (trigger, setTrigger, id) => {
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
      `https://dowstack.onrender.com/savinggoals`,
      configDelete
    );

    const data = await response.json();
    console.log("Deleted Entry 👋:", data);
    setTrigger(!trigger);
  } catch (err) {
    console.log("creating Ticket failed!", err);
  }
};
export default deleteSavingGoalEntry;
