
interface InputTextProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  inputclassName?: string;
  labelClassName?: string;
  containerClassName?: string;
  required?: boolean;
  readOnly?: boolean;
}
const TextInput = (props: InputTextProps) => {
  const {
    name,
    label,
    type,
    placeholder,
    value,
    onChange,
    error,
    labelClassName,
    required,
    inputclassName,
    containerClassName,
    readOnly,
  } = props;
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 mt-4  text-gray-500 dark:text-gray-400" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
          type="search" 
          id="search" 
          value={value}
          className="mt-3 h-12 w-full p-4 pl-10 text-sm text-white border border-dark-line rounded-lg bg-formBg  focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" 
          placeholder={placeholder} 
          required 
        />
      </div>
    )
}

export default TextInput;
