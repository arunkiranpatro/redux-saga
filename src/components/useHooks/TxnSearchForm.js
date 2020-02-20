import React, { useState } from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue("")
  ];
};

const TxnSearchForm = () => {
  const [txnid, resetTxnid] = useInput("");
  const [party, resetParty] = useInput("");
  const onReset = e => {
    e.preventDefault();
    resetTxnid();
    resetParty();
  };
  return (
    <>
      <fieldset>
        <legend> Search Transactions</legend>
        <div>
          <label>Transaction ID</label>
          <input type="text" placeholder="input transaction id" {...txnid} />
          <label>Party Name</label>
          <input type="text" placeholder="input seller" {...party} />
          <button>Search</button>
          <button onClick={onReset}>Reset</button>
        </div>
      </fieldset>
    </>
  );
};
export default TxnSearchForm;
