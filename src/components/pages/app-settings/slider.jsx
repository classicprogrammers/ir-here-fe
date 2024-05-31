// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiSlider from '@mui/material/Slider'

const marks = [
  {
    value: 0,
    label: '0M'
  },
  {
    value: 10,
    label: '10M'
  },
  {
    value: 20,
    label: '20M'
  },
  {
    value: 30,
    label: '30M'
  },
  {
    value: 40,
    label: '40M'
  },
  {
    value: 50,
    label: '50M'
  },
  {
    value: 60,
    label: '60M'
  },
  {
    value: 70,
    label: '70M'
  },
  {
    value: 80,
    label: '80M'
  },
  {
    value: 90,
    label: '90M'
  },
  {
    value: 100,
    label: '100M'
  }
]

// Styled Slider component
const Slider = styled(MuiSlider)(({ theme }) => ({
  padding: '15px 0',
  height: '2px !important',
  color: theme.palette.primary.main,
  position: 'relative', // Ensure marks container is positioned relative
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf'
  },
  '& .MuiSlider-track': {
    border: 'none'
  },
  '& .MuiSlider-mark': {
    width: 1,
    height: 15,
    backgroundColor: '#bfbfbf',
    position: 'absolute',
    top: 15, // Adjust top position to move marks above slider
    '& span': {
      display: 'block',
      marginTop: '-25px', // Adjust top margin to move label above slider
      textAlign: 'center'
    }
  },
  '& .MuiSlider-markLabel': {
    top: -15, // Adjust top position to move label above slider
  },
  '& .MuiSlider-thumb': {
    width: 28,
    height: 28,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02) !important',
    '&:before': {
      border: 0
    },
    '&:after': {
      width: 42,
      height: 42
    },
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02) !important',

      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02) !important'
      }
    }
  },
  '& .MuiSlider-valueLabel': {
    display: 'none' // Hide the tooltip
  }
}))

const SliderCustomized = () => (
  <Slider marks={marks} defaultValue={60} valueLabelDisplay='off' aria-labelledby='customized-slider' />
)

export default SliderCustomized
