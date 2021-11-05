import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/lab/Alert';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deactivateSnackbar } from '../../redux/snackbar/snackbar.slice';

const SnackBar = () => {
  const dispatch = useAppDispatch();
  const { showSnackbar, snackbarContent, snackbarSeverity } = useAppSelector(
    (state) => state.snackbar
  );

  const handleCloseSnackbar = () => dispatch(deactivateSnackbar());
  return (
    <Snackbar open={showSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
      <MuiAlert
        elevation={6}
        variant='filled'
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
      >
        {snackbarContent}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBar;
