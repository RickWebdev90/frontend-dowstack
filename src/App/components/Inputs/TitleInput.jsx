const TitleInput = ({ title, setTitle }) => {
  return (
    <>
      <label>Bezeichnung</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Titel"
      />
    </>
  );
};

export default TitleInput;
