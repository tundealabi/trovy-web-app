interface IPaystackPayButtonReference {
  loanId: string;
  scheduleId: string;
}

interface IPaystackPayButton {
  amount: number;
  reference: IPaystackPayButtonReference;
  disabled: boolean;
}

export type { IPaystackPayButton, IPaystackPayButtonReference };
