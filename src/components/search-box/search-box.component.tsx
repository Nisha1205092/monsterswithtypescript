import './search-box.styles.css';

type SearchBoxProps = {
	placeholder: string;
	handleChange: React.ChangeEventHandler<HTMLInputElement>; 
				  //(event: React.ChangeEvent<T>) => void
				  // alternate way
};

export const SearchBox = ({ placeholder, handleChange } : SearchBoxProps) => (
	<input 
		className = 'search'
		type='search' 
		placeholder={placeholder}
		onChange={handleChange}
    />
);