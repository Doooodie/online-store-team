import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GridViewIcon from '@mui/icons-material/GridView';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setBig } from '../../../../store/filterSlice';

export default function ToggleButtons() {
  const dispatch = useAppDispatch();
  const size = useAppSelector((state) => state.filter.big);
  const isRight = size === true || size === undefined;
  const [alignment, setAlignment] = useState<string | null>('');

  useEffect(() => {
    setAlignment(isRight ? 'right' : 'left');
  }, [isRight]);

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment === null) return;
    if (newAlignment === 'right') dispatch(setBig(true));
    if (newAlignment === 'left') dispatch(setBig(false));
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      size='small'
      onChange={handleAlignment}
      aria-label='text alignment'
    >
      <ToggleButton value='left' aria-label='left aligned'>
        <ViewCompactIcon />
      </ToggleButton>
      <ToggleButton value='right' aria-label='centered'>
        <GridViewIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
