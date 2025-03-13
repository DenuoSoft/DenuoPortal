import { userData } from '../../../../data/userData';
import { clientData } from '../../../../data/clientData';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const NavButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'uppercase',
	fontSize: 14,
	color: 'rgba(0, 0, 0, 0.6)',
	padding: '6px 8px',
	lineHeight: 1.5,
	backgroundColor: '#f0f0f0',
	'&:hover': {
		backgroundColor: '#c8d2e6',
		color: '#d7ff23',
	},
});

export const allInputs = [
	{ id: 0, label: 'Client UBOs:' },
	{ id: 1, label: 'Client address:' },
	{ id: 2, label: 'Adverse party:' },
	{ id: 3, label: 'Adverse party UBOs:' },
	{ id: 4, label: 'Other party:' },
	{ id: 5, label: 'Matter name:' },
	{ id: 6, label: 'Matter details:' },
];
//{ label: 'Partner', options: userData.map(option => option.name) },
//{ label: 'Fee earner', options: userData.map(option => option.name) },
//{ label: 'Client', options: clientData.map(option => option.name + " " + option.number) },
