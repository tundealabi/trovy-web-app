import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const TextInputField = styled(TextField)`
  & .MuiFilledInput-root.MuiFilledInput-underline:after {
    border-color: #00b87c;
  }
  & .MuiFilledInput-root.MuiFilledInput-underline.Mui-error:after {
    border-color: red;
  }

  & > label.MuiFormLabel-root.MuiInputLabel-root.Mui-focused {
    color: #00b87c;
  }
  & > label.MuiFormLabel-root.MuiInputLabel-root.Mui-focused.Mui-error {
    color: red;
  }
`;

export default TextInputField;
