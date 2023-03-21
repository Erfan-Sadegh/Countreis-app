import './country-detail.css';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { searchByCode } from '../../features/countries/countriesAction';

const CountryDetail = () => {
  const { error, countryData } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLocaleLowerCase()));
    }
    if (error) {
      console.log(error);
    }
  }, [error, code, dispatch]);

  console.log(countryData);

  // const handleBack = () => {
  //   window.history.back();
  // };

  return (
    <section className='country-detail-container'>
      <Link
        className='back-button'
        // onClick={handleBack}
        to='/'
        style={{ border: 0, cursor: 'pointer' }}
      >
        <i className='fa-solid fa-arrow-left'></i> Back
      </Link>

      <div className='country-detail-content'>
        {countryData.length > 0 ? (
          <>
            <img
              src={countryData[0].flags.png}
              alt={countryData[0].flags.alt}
              className='country-detail-image'
            />
            <div className='country-detail-right'>
              <h1>{countryData[0].name.common}</h1>
              <div className='details'>
                <div className='detail-left'>
                  <p>
                    Offcial Name: <span>{countryData[0].name.official}</span>
                  </p>
                  <p>
                    Population: <span>{countryData[0].population}</span>
                  </p>
                  <p>
                    Region: <span>{countryData[0].region}</span>
                  </p>

                  <p>
                    Sub Region: <span>{countryData[0].subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{countryData[0].capital}</span>
                  </p>
                </div>

                <div className='detail-right'>
                  <p>
                    Top Level Domain: <span>{countryData[0].tld[0]}</span>
                  </p>
                  <p>
                    Currencies:
                    <span>
                      {Object.values(countryData[0].currencies)
                        .map((item) => item.name)
                        .join(',')}
                    </span>
                  </p>

                  <p>
                    Languages:
                    <span>
                      {Object.values(countryData[0].languages).map(
                        (item) => item
                      )}
                    </span>
                  </p>
                </div>
              </div>

              <div className='border'>
                <p>Border Countries:</p>
                {countryData[0].borders ? (
                  countryData[0].borders.map((item, index) => (
                    <Link className='border-name' key={index} to={`/${item}`}>
                      <p>{item}</p>
                    </Link>
                  ))
                ) : (
                  <span>No Border</span>
                )}
              </div>
            </div>
          </>
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </section>
  );
};

export default CountryDetail;
