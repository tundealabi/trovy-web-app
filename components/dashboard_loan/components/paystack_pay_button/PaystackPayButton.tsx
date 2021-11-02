import { usePaystackPayment } from 'react-paystack';
import Chip from '@mui/material/Chip';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { loanPayHelper } from '../../../../utils/api_helpers/api_loan/api-loan.helper';
import { IPaystackPayButton, IPaystackPayButtonReference } from './paystack-pay-button.interface';

const LoanInterfaceActionPayChip = styled(Chip)`
  border-color: #2dd882;
`;

const PaystackPayButton = ({ amount, reference, disabled }: IPaystackPayButton) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: session?.user.email as string,
    amount: amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
  };

  // you can call this function anything
  const onPaymentSuccess = async (data: IPaystackPayButtonReference) => {
    try {
      await loanPayHelper({ loanId: data.loanId, proratedPaymentId: data.scheduleId });
      queryClient.invalidateQueries('getLoans');
      // console.log('onPaymentSuccess-success',response)
    } catch (err) {
      // console.log("onPaymentSuccess-fail",err)
    }
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const handlePayment = () => {
    initializePayment(() => onPaymentSuccess(reference));
  };

  return (
    <LoanInterfaceActionPayChip
      label='pay now'
      variant='outlined'
      onClick={handlePayment}
      disabled={disabled}
    />
  );
};

export default PaystackPayButton;
