import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the <b className="text-blue-500">MEDICINE NAME</b> in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" status="correct" />
        <Cell value="D" />
        <Cell value="V" />
        <Cell value="I" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500">
        The letter A is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="Q" />
        <Cell value="U" status="present" />
        <Cell value="I" />
        <Cell value="X" />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" />
        <Cell value="S" />
        <Cell value="A" />
        <Cell value="I" status="absent" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500">
        The letter I is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
