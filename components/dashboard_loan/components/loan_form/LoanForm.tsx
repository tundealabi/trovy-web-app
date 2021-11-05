import { useState } from 'react';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import { useQueryClient } from 'react-query';
import { loanFormInit, loanFormSchema } from './loan-form.schema';
import TextField from '../../../shared/text_field/TextField';
import { LoanFormButton, LoanFormButtonContainer } from './LoanForm.styled';
import getTotalPortfolioValue from '../../../dashboard_portfolio/dashboard-portfolio.utils';
import { loanApplyHelper } from '../../../../utils/api_helpers/api_loan/api-loan.helper';
import { resetGlobalModal } from '../../../../redux/global_modal/global-modal.slice';
import { useAppDispatch } from '../../../../redux/hooks';
import { activateSnackbar } from '../../../../redux/snackbar/snackbar.slice';

const LoanForm = () => {
  const dispatch = useAppDispatch();
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
  const queryClient = useQueryClient();
  const totalMoney = getTotalPortfolioValue();
  const initialValues = loanFormInit;
  return (
    <Formik
      validationSchema={loanFormSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setFieldError }) => {
        setDisableSubmitBtn(true);
        try {
          const {
            loan_amount: loanAmount,
            loan_percentage: loanPercentage,
            loan_spread_duration: loanSpreadDuration,
          } = values;
          await loanApplyHelper({
            loanAmount,
            loanPercentage,
            loanSpreadDuration,
            loanDate: new Date().getTime().toString(),
          });
          // console.log('loan-resp',loanApplyResponse);
          queryClient.invalidateQueries('getLoans');
          dispatch(resetGlobalModal());
          dispatch(activateSnackbar({ content: 'Loan successfully granted', severity: 'success' }));
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          setDisableSubmitBtn(false);
          setFieldError('loan_spread_duration', err.message);
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            inputProps={{ inputMode: 'decimal', pattern: '[0-9]*' }}
            id='loan-amount'
            label='Loan Amount'
            variant='filled'
            name='loan_amount'
            value={values.loan_amount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.loan_amount && errors.loan_amount)}
            helperText={touched.loan_amount && errors.loan_amount}
            fullWidth
            disabled
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '([5-9]|[1-5][0-9]|60)' }}
            id='loan-percentage'
            label='Loan Percentage'
            variant='filled'
            name='loan_percentage'
            value={values.loan_percentage}
            onChange={(e) => {
              const loanPercentage = Number(e.target.value);
              if (loanPercentage > 0 && loanPercentage <= 60) {
                values.loan_amount = (totalMoney / loanPercentage).toFixed(2);
              }
              handleChange(e);
            }}
            onBlur={handleBlur}
            error={!!(touched.loan_percentage && errors.loan_percentage)}
            helperText={touched.loan_percentage && errors.loan_percentage}
            fullWidth
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '([6-9]|1[0-2])' }}
            id='loan-spread'
            label='Loan Spread Duration'
            variant='filled'
            name='loan_spread_duration'
            value={values.loan_spread_duration}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.loan_spread_duration && errors.loan_spread_duration)}
            helperText={touched.loan_spread_duration && errors.loan_spread_duration}
            fullWidth
          />
          <LoanFormButtonContainer>
            <LoanFormButton disabled={disableSubmitBtn} type='submit' fullWidth>
              take loan
            </LoanFormButton>
          </LoanFormButtonContainer>
        </form>
      )}
    </Formik>
  );
};

export default LoanForm;
