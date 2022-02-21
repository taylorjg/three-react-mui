import { useState } from "react"
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, Typography } from '@mui/material'
import styled from '@emotion/styled'

const StyledContent = styled.div`
  height: 100%;
  padding: 1rem 2rem;
`

const SettingsContent = ({ initialValues, onOK, onCancel }) => {

  const [settings, setSettings] = useState({ ...initialValues })

  const handleChangeCubeColour = event => {
    const cubeColour = event.target.value
    setSettings(currentValues => ({ ...currentValues, cubeColour }))
  }

  const handleChangeAutoRotate = event => {
    const autoRotate = event.target.checked
    setSettings(currentValues => ({ ...currentValues, autoRotate }))
  }

  return (
    <StyledContent>
      <div>
        <Typography variant="subtitle1" component="div" gutterBottom>
          Settings
        </Typography>
        <FormControl variant="standard" size="small" sx={{ minWidth: '10rem', my: '1rem' }}>
          <InputLabel id="cube-colour-label">Cube Colour</InputLabel>
          <Select
            labelId="cube-colour-label"
            id="cube-colour"
            value={settings.cubeColour}
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
              checked={settings.autoRotate}
              size="small"
              onClick={handleChangeAutoRotate}
            />
          }
          label="Auto Rotate"
        />
      </div>
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
        <Button size="small" onClick={onCancel} style={{ marginRight: ".5rem" }}>Cancel</Button>
        <Button variant="contained" size="small" onClick={() => onOK(settings)}>OK</Button>
      </div>
    </StyledContent>
  )
}

export default SettingsContent
