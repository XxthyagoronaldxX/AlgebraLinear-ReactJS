import { Container, Step } from "./styles"
import ArrowFront from "../../assets/arrow-front.png"
import { useScaling } from "../../hooks/useScaling"
import { ShowMatriz } from "../ShowMatriz"
import Modal from "react-modal"
import { MatrizModel } from "../../models/matriz"

Modal.setAppElement("div#root")

interface StepsModalProps {
  isModalOpen: boolean
  handleCloseModal: () => void
}

export function StepsModal(props: StepsModalProps) {
  const { steps } = useScaling()

  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.handleCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <Step isResult={true}>
          <h1>Resultado</h1>
          <ShowMatriz matriz={steps.length !== 0 ? steps[steps.length - 1].matrizAfter : {} as MatrizModel} />
        </Step>

        {steps.map((step, stepIndex) => (
          <Step key={stepIndex}>
            <ShowMatriz matriz={step.matrizBefore} />
            <img src={ArrowFront} alt='ArrowFront' />
            <h2>{step.done}</h2>
            <img src={ArrowFront} alt='ArrowFront' />
            <ShowMatriz matriz={step.matrizAfter} />
          </Step>
        ))}
      </Container>
    </Modal>
  )
}
