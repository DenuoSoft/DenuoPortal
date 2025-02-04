//import css from './input.module.scss';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { userData } from '../../../../data/userData';
//import {Data} from "../form-data"
//import { Questions } from '../../../../hooks/form-provider';

export const Input = () => {
	return (
		<Stack direction='column' spacing={2} sx={{ width: 350 }}>
			<Autocomplete
				freeSolo
				id='free-solo-2-demo'
				disableClearable
				options={userData.map((option) => option.name)}
				renderInput={(params) => (
					<TextField
						{...params}
						required
						label='Partner'
						variant='filled'
						slotProps={{
							input: {
								...params.InputProps,
								type: 'search',
							},
						}}
					/>
				)}
			/>
			<Autocomplete
				freeSolo
				id='free-solo-2-demo'
				disableClearable
				options={userData.map((option) => option.name)}
				renderInput={(params) => (
					<TextField
						{...params}
						required
						label='Fee earner'
						variant='filled'
						slotProps={{
							input: {
								...params.InputProps,
								type: 'search',
							},
						}}
					/>
				)}
			/>
		</Stack>
	);
};
