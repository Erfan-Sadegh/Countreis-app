import { useEffect, useState } from 'react';
import fetchCountries, { searchByRegion } from '../../features/countries/countriesAction';
import './country.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Country = () => {
  const [countries, setCountries] = useState([]);

  const { countriesData, loading, error, success, regions, searchTerm } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());

    if (regions) {
      dispatch(searchByRegion(regions));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, regions]);

  console.log(countries);
  
  const data = countriesData.filter(country => country.name.common.toLowerCase().includes(searchTerm));
  console.log(data);

  return (
    <section className='country-container'>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        data &&
        data.map((item, index) => (
          <Link
            to={item.cioc}
            // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
            className='country-card'
            key={index}
          >
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className='country-image'
            />
            <div className='country-content'>
              <h3>{item.name.common}</h3>
              <p>
                Population: <span>{item.population}</span>
              </p>
              <p>
                Region: <span>{item.region}</span>
              </p>
              <p>
                Capital: <span>{item.capital}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </section>
  );
};

export default Country;
