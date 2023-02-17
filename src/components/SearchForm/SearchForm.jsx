import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const onHadleChange = (e) => {
    setQuery(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <SearchFormStyled onSubmit={onFormSubmit}>
      <BtnSearch type='submit'>
        <FiSearch size='16px' />
      </BtnSearch>
      <Select
        onChange={onHadleChange}
        aria-label='select'
        name='region'
        required
        defaultValue='DEFAULT'
      >
        <option value='DEFAULT' disabled defaultValue=''>
          Select a region and press enter
        </option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
