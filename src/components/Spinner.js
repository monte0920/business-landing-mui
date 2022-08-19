import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
        <Stack sx={{ height: '100%', pb: 10 }} alignItems='center' justifyContent='center' >
            <CircularProgress sx={{ color: theme => theme.colors.green }} />
        </Stack>
    )
}

export default Spinner;