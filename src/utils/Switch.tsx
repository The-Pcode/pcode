import { Switch } from '@headlessui/react'

interface SwitchToggleType {
  isEnabled: boolean
  setIsEnabled: (isEnabled: boolean) => void
}

export const SwitchToggle = ({ isEnabled, setIsEnabled }: SwitchToggleType) => {
  return (
    <div className="flex items-center">
      <Switch
        checked={isEnabled}
        onChange={setIsEnabled}
        className={`${isEnabled ? 'bg-amber-500' : 'bg-amber-200'}
          relative inline-flex items-center h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
