import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { userData } from '../../../../data/userData';
import { clientData } from '../../../../data/clientData';

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
			<Autocomplete
				freeSolo
				id='free-solo-2-demo'
				disableClearable
				options={clientData.map((option) => option.client + " " +  +option.number)}
				renderInput={(params) => (
					<TextField
						{...params}
						required
						label='Client'
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
			<TextField id="filled-basic" label="Client UBOs:" variant="filled" />
			<TextField id="filled-basic" label="Client address:" variant="filled" />
			<TextField id="filled-basic" label="Adverse party:" variant="filled" />
			<TextField id="filled-basic" label="Adverse party UBOs:" variant="filled" />
			<TextField id="filled-basic" label="Other party:" variant="filled" />
			<TextField id="filled-basic" label="Matter name:" variant="filled" />
			<TextField id="filled-basic" label="Matter details:" variant="filled" />
		</Stack>
	);
};
