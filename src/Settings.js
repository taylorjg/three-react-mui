import { useState } from "react"
import { Button, Drawer } from "@mui/material"

const Settings = ({ setCubeColour, setAutoRotate }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => {
    setIsDrawerOpen(true)
    setCubeColour("red")
    setAutoRotate(false)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setCubeColour("green")
    setAutoRotate(true)
  }

  return (
    <>
      <Button onClick={openDrawer}>Settings</Button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        TODO: Settings...
      </Drawer>
    </>
  )
}

export default Settings
