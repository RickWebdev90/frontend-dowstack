import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";

export default function InAndOut() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TypeInput type={type} setType={setType} />
      <TitleInput title={title} setTitle={setTitle} />
      <CurrencyInput amount={amount} setAmount={setAmount} />
      <RecurrInput recurr={recurr} setRecurr={setRecurr} />
      <DateInput date={date} setDate={setDate} />
      <button
        onClick={() => {
          saveData(close);
          updateBalance(userId, type, amount);
        }}
      >
        Speichern
      </button>
    </form>
  );
}
