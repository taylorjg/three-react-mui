import { useState } from "react"
import { Button, Drawer } from "@mui/material"

const Settings = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Settings</Button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        TODO: Settings...
      </Drawer>
    </>
  )
}

export default Settings
