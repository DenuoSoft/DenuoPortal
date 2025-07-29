import {lazy} from 'react';
const Autocomplete = lazy(() =>
    import('../form/autocomplete/autocomplete')
);
const RadioButtons = lazy(() =>
    import('../form/radiobuttons/radiobuttons')
);
const Input = lazy(() => import('../form/input/input'));
import  TextArea  from "./textarea/textarea";

export { Autocomplete, Input, RadioButtons, TextArea}