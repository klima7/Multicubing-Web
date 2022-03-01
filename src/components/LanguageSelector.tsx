import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSelector = () => {

  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  console.log(i18n.language);

  return (
    <Box display="flex" style={{alignItems: 'center'}}>
      <LanguageIcon />
      <FormControl size="small" style={{ paddingLeft: '10px' }}>
        <Select
          value={i18n.language}
          variant="outlined"
          onChange={handleChange}
          style={{color: 'white'}}
          sx={{ minWidth: 130 }}
        >
          <MenuItem key="pl-PL" value="pl-PL">Polski</MenuItem>
          <MenuItem key="en-EN" value="en-EN">English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelector;
