import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MySelectProps } from '../../types/types';
import { useAppSelector } from '../../../../hooks';
import { setSort } from '../../../../store/filterSlice';

export default function MySelect({ defaultValue, options, searchParams }: MySelectProps) {
  const dispatch = useDispatch();
  const value = useAppSelector((state) => state.filter.sort);
  useMemo(() => {
    const current = searchParams.get('sort');
    if (current === null) dispatch(setSort('default'));
    if (current !== null) dispatch(setSort(current));
  }, [searchParams, dispatch]);

  const [, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    dispatch(setSort(event.target.value));
  };

  return (
    <Box sx={{ width: '100%', marginBottom: '1rem' }}>
      <FormControl fullWidth>
        <InputLabel size='small' id='demo-simple-select-label'>
          {defaultValue}
        </InputLabel>
        <Select
          size='small'
          sx={{ heigth: '1rem' }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label='Age'
          onChange={handleChange}
          defaultValue=''
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
