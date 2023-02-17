import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [serchParams, setSerchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = serchParams.get('query');
    if (!region) {
      return;
    }
    fetchByRegion(region).then((data) => {
      setCountries(data);
    });
  }, [serchParams]);

  const onHandleSubmit = (query) => {
    setSerchParams({ query });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
