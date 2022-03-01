import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const LanguageSelector = () => {

  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl size="small" style={{ paddingLeft: '10px' }}>
      <Select
        value={i18n.language}
        variant="outlined"
        onChange={handleChange}
        style={{color: 'white'}}
        sx={{ minWidth: 130 }}
      >
        <MenuItem key="pl" value="pl">Polski</MenuItem>
        <MenuItem key="en" value="en">English</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
