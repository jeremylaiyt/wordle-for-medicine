import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Clinical Owl Word Game" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        <b className="text-orange-600">Guess the 5-letter MEDICINE</b>
        <br></br>
        <br></br>
          Developed by <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/clinical_owl"
            className="underline font-bold"
          ><b className="text-blue-600">Clinical Owl</b></a> inspired by the popular game {' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >Wordle</a>. Code is developed based on the open source project hosted <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >here</a> on Github. Credits go to respective parties.
        <br></br><br></br>
        Follow us on <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/clinical_owl"
            className="underline font-bold text-green-600"
          >Instagram</a>.
          <br></br>
        Also check out our <a
            target="_blank"
            rel="noreferrer"
            href="https://clinicalowl.etsy.com/"
            className="underline font-bold text-purple-600"
          >last-minute study note</a>.
      </p>
    </BaseModal>
  )
}
