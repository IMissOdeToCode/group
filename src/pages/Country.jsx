import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { useEffect, useState } from 'react';

export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetchCountry(id).then((country) => {
      setCountry(country);
      console.log(country);
    });
  }, [id]);

  return (
    <Section>
      <Container>
        <CountryInfo flag={country.flag} capital={country.capital} country={country.countryName} id={country.id} languages={country.languages} population={country.population} />
      </Container>
    </Section>
  );
};
