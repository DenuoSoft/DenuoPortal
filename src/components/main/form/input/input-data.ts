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
        { label: 'Partner', options: userData.map(option => option.name) },
        { label: 'Fee earner', options: userData.map(option => option.name) },
        { label: 'Client', options: clientData.map(option => option.client + " " + option.number) },
        { label: 'Client UBOs:', options: [] },
        { label: 'Client address:', options: [] },
        { label: 'Adverse party:', options: [] },
        { label: 'Adverse party UBOs:', options: [] },
        { label: 'Other party:', options: [] },
        { label: 'Matter name:', options: [] },
        { label: 'Matter details:', options: [] },
];
    