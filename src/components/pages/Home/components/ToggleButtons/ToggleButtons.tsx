import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from 'react';

interface IToggleButtonsProps {
  setBig: (value: boolean) => void;
}

export default function ToggleButtons({ setBig }: IToggleButtonsProps) {
  const [alignment, setAlignment] = useState<string | null>('right');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    const isBig = newAlignment === 'right';
    setBig(isBig);
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
