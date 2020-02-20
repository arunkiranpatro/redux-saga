import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import financeReducer from "./financeReducer";
import interactionsReducer from "./interactionsReducer";
import ccTxnsReducer from "./ccTxnsReducer";
import errorReducer from "./errorReducer";
import txnCardReducer from "./txnCardReducer";
import txnslistReducer from "./txnslistReducer";

export default combineReducers({
  accountCard: accountReducer,
  errors: errorReducer,
  financeCard: financeReducer,
  icasesCard: interactionsReducer,
  cctxnsCard: ccTxnsReducer,
  txncard: txnCardReducer,
  txnslist: txnslistReducer
});
