import { useContext } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../contexts/TransactionContext";

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  // {ìncome: 0, outcome:0 , total:0 }

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.ìncome += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      ìncome: 0,
      outcome: 0,
      total: 0,
    }
  );
  return summary;
}
