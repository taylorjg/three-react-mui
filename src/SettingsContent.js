import { useState } from "react"
import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch } from '@mui/material'
import styled from '@emotion/styled'

const StyledContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const SettingsContent = ({ threeAppActions }) => {

  const [cubeColour, setCubeColour] = useState("red")
  const [autoRotate, setAutoRotate] = useState(true)

  const handleChangeCubeColour = event => {
    const value = event.target.value
    setCubeColour(value)
    threeAppActions.setCubeColour(value)
  }

  const handleChangeAutoRotate = event => {
    const value = event.target.checked
    setAutoRotate(value)
    threeAppActions.setAutoRotate(value)
  }

  return (
    <StyledContent>
      <div>
        <h2>Settings</h2>
        <FormControl size="small" sx={{ minWidth: '10rem' }}>
          <InputLabel id="cube-colour-label">Cube Colour</InputLabel>
          <Select
            labelId="cube-colour-label"
            id="cube-colour"
            value={cubeColour}
            label="Cube Colour"
            onChange={handleChangeCubeColour}
          >
            <MenuItem value="red">Red</MenuItem>
            <MenuItem value="green">Green</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={autoRotate}
              onClick={handleChangeAutoRotate}
            />
          }
          label="Auto Rotate"
        />
      </div>
    </StyledContent>
  )
}

export default SettingsContent
