import { userData } from '../../../../data/userData';
import { clientData } from '../../../../data/clientData';
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