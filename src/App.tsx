import { useState } from "react"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { StepsModal } from "./components/StepsModal"
import { MatrizProvider } from "./hooks/useMatriz"
import { ScalingProvider } from "./hooks/useScaling"
import { AppContainer } from "./styles/App"
import { GlobalStyle } from "./styles/Global"

export function App() {
  const [ isScalingModalOpen, setIsScalingModalOpen ] = useState(false)

  function handleOpenScalingModal() {
    setIsScalingModalOpen(true)
  }

  function handleCloseScalingModal() {
    setIsScalingModalOpen(false)
  }

  return (
    <ScalingProvider>
      <MatrizProvider>
        <AppContainer>
          <Sidebar />
          <Content handleOpenScalingModal={handleOpenScalingModal} />
          <GlobalStyle />
          <StepsModal isModalOpen={isScalingModalOpen} handleCloseModal={handleCloseScalingModal}/>
        </ AppContainer>
      </MatrizProvider>
    </ScalingProvider>
  )
}
