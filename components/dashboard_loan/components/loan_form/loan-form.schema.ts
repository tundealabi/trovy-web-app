import * as Yup from 'yup';

const loanFormSchema = Yup.object().shape({
  loan_amount: Yup.string()
    .trim()
    .matches(/^[0-9]*$/)
    .required('Loan Amount field is required'),
  loan_percentage: Yup.string()
    .trim()
    .matches(/^([5-9]|[1-5][0-9]|60)$/)
    .required('Loan Percentage field is required'),
  loan_spread_duration: Yup.string()
    .trim()
    .matches(/^([6-9]|1[0-2])$/)
    .required('Loan Spread field is required'),
});

const loanFormInit = {
  loan_amount: '0',
  loan_percentage: '0',
  loan_spread_duration: '6',
};

export { loanFormSchema, loanFormInit };
