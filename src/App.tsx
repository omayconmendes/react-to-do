import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from "./components/icon";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">Olá, mundo!</Text>
        <Text variant="body-md" className="text-green-base">Olá, mundo!</Text>
        <Text variant="body-md-bold" className="text-shadow-gray-300">Olá, mundo!</Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} className="fill-pink-base" />
        <Icon svg={SpinnerIcon} className="fill-gray-base" animate />
      </div>
    </div>
  )
}
