import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import css from './input.module.scss';
import { allInputs } from './input-data';

const MAX_VISIBLE_ITEMS = 8;

// Function to generate radio buttons
const generateRadioButtons = (count) => {
    return Array.from({ length: count }, (_, index) => ({
        label: `Option ${index + 1}`,
        value: index + 1,
    }));
};

export const Input = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRadio, setShowRadio] = useState(false);
    const [inputData, setInputData] = useState({}); // State to preserve input data
	const [formData, setFormData] = useState({});
    // Generate radio buttons
    const radioButtons = generateRadioButtons(12);
    const allInputsWithRadio = [...allInputs, ...radioButtons]; // Merge input and radio buttons

    // Determine visible elements
    const visibleInputs = allInputsWithRadio.slice(currentIndex, currentIndex + MAX_VISIBLE_ITEMS);

    const handleNext = () => {
        if (currentIndex + MAX_VISIBLE_ITEMS < allInputsWithRadio.length) {
            setCurrentIndex(prevIndex => prevIndex + MAX_VISIBLE_ITEMS);
            setShowRadio(!showRadio); // Toggle showRadio on click
        }
    };

    const handleBack = () => {
        if (currentIndex - MAX_VISIBLE_ITEMS >= 0) {
            setCurrentIndex(prevIndex => prevIndex - MAX_VISIBLE_ITEMS);
            setShowRadio(false); // Reset showRadio when moving back
        }
    };

    /* const handleInputChange = (field, value) => {
        setInputData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    }; */
	const handleInputChange = (inputKey) => (event, value) => {
        setFormData({
            ...formData,
            [inputKey]: value || event.target.value, // Store input values
        });
    };
    const handleSubmit = () => {
        console.log("Форма отправлена", inputData);
		// Clear input data after submission
		setFormData({}); // Reset the form data
        setCurrentIndex(0); // Go back to the first step
        setInputData({});
    };

    return (
        <div className={css.forminput}>
            <Stack direction='column' spacing={2} sx={{ minWidth: 350 }}>
                {visibleInputs.map((input, index) => {
                    const fieldName = `input-${currentIndex + index}`; // Unique field name for each input
                    // For three states: radio buttons, Autocomplete, and TextField
                    if (input.value) {
                        // If it's a radio button
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
                                value={inputData[fieldName] || ''} // Preserve the input data
                            />
                        );
                    }
                })}
            </Stack>

            <div>
                {currentIndex > 0 && (
                    <Button type="button" onClick={handleBack}>
                        Back
                    </Button>
                )}
                {currentIndex + MAX_VISIBLE_ITEMS < allInputsWithRadio.length ? (
                    <Button type="button" onClick={handleNext}>
                        Next
                    </Button>
                ) : (
                    <Button type="button" onClick={handleSubmit}>
                        Send
                    </Button>
                )}
            </div>
        </div>
    );
};
