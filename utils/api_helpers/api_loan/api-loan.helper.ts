import axios from 'axios';
import moment from 'moment';
import { ILoanApplyHelper, ILoanPayHelper } from './api-loan.interface';

const getDateMonthRange = (date: string, interval: string) => {
  const dateArr = [];
  const nextDate = moment(moment(new Date(Number(date))).add(interval, 'month')).format(
    'MM-DD-YYYY'
  );
  let startDate = new Date(Number(date));
  const endDate = new Date(nextDate);

  while (startDate < endDate) {
    const newDateMonth = startDate.setMonth(startDate.getMonth() + 1);
    startDate = new Date(newDateMonth);
    dateArr.push(moment(startDate).format('MMMM'));
  }
  return dateArr;
};

const loanApplyHelper = async (loanData: ILoanApplyHelper) => {
  const response = await axios({
    method: 'post',
    url: '/api/loan/apply',
    data: {
      ...loanData,
    },
  });
  // console.log('resp-login', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};
const loanPayHelper = async (loanData: ILoanPayHelper) => {
  const response = await axios({
    method: 'post',
    url: '/api/loan/pay',
    data: {
      ...loanData,
    },
  });
  // console.log('resp-login', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};

const getLoansFromApi = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/loan',
  });
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};

export { getDateMonthRange, loanApplyHelper, getLoansFromApi, loanPayHelper };
