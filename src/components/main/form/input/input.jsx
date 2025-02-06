import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SendIcon from '@mui/icons-material/Send';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import css from './input.module.scss';
import { allInputs, NavButton } from './input-data';


const MAX_VISIBLE_ITEMS = 9;

const generateRadioButtons = (count) => {
    return Array.from({ length: count }, (_, index) => ({
        label: `Option ${index + 1}`,
        value: index + 1,
    }));
};

export const Input = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRadio, setShowRadio] = useState(false);
    const [inputData, setInputData] = useState({}); 
	const [formData, setFormData] = useState({});
  
    const radioButtons = generateRadioButtons(12);
    const allInputsWithRadio = [...allInputs, ...radioButtons]; 
    
    const visibleInputs = allInputsWithRadio.slice(currentIndex, currentIndex + MAX_VISIBLE_ITEMS);

    const handleNext = () => {
        if (currentIndex + MAX_VISIBLE_ITEMS < allInputsWithRadio.length) {
            setCurrentIndex(prevIndex => prevIndex + MAX_VISIBLE_ITEMS);
            setShowRadio(!showRadio); 
        }
    };

    const handleBack = () => {
        if (currentIndex - MAX_VISIBLE_ITEMS >= 0) {
            setCurrentIndex(prevIndex => prevIndex - MAX_VISIBLE_ITEMS);
            setShowRadio(false); 
        }
    };

	const handleInputChange = (inputKey) => (event, value) => {
        setFormData({
            ...formData,
            [inputKey]: value || event.target.value, 
        });
    };
    const handleSubmit = () => {
        console.log("Форма отправлена", inputData);
		setFormData({});
		setCurrentIndex(0); 
        setInputData({});
    };

    return (
        <div className={css.forminput}>
            <Stack direction='column' spacing={2} sx={{ minWidth: 350 }}>
                {visibleInputs.map((input, index) => {
                    const fieldName = `input-${currentIndex + index}`; 
                    if (input.value) {
                        return (
                            <FormControlLabel
                                key={index}
                                control={<Radio onChange={() => handleInputChange(fieldName, input.value)} />}
                                label={input.label}
                            />
                        );
                    } else if (input.options && input.options.length > 0) {
                        return (
                            <Autocomplete
                                key={index}
                                freeSolo
                                disableClearable
                                options={input.options}
                                onChange={(event, newValue) => handleInputChange(fieldName, newValue)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        label={input.label}
                                        variant='filled'
                                    />
                                )}
                            />
                        );
                    } else {
                        return (
                            <TextField
                                key={index}
                                id={`filled-basic-${index}`}
                                label={input.label}
                                variant='filled'
                                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                                value={inputData[fieldName] || ''} 
                            />
                        );
                    }
                })}
            </Stack>
			<div className={ css.buttons}>
                {currentIndex > 0 && (
                    <NavButton type="button" onClick={handleBack}>
                        Back
                    </NavButton>
                )}
                {currentIndex + MAX_VISIBLE_ITEMS < allInputsWithRadio.length ? (
                    <NavButton type="button" onClick={handleNext}>
                        Next
                    </NavButton>
                ) : (
						<NavButton type="button" onClick={handleSubmit} endIcon={<SendIcon />}>
                        Send
                    </NavButton>
                )}
            </div>
        </div>
    );
};
