import { useEffect, useState } from 'react';
import './filter.css';
import { useDispatch } from 'react-redux';
import { reset, setRegion } from "../../../features/countries/countriesSlice";

const Filter = () => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [filter, setFilter] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (filter.length) {
      dispatch(setRegion(filter.toLocaleLowerCase()));
    }

    return () => {
      dispatch(reset());
    }
  }, [filter, dispatch, regions.length])

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  console.log(showDropdown);

  return (
    <section className='filter-container'>
      <div className='filter'>
        <input
          type='text'
          readOnly
          placeholder='Filter by Region'
          value={filter}
          className='filter-input'
          onClick={handleShowDropdown}
        />

        <i className='fa-solid fa-angle-down'></i>
      </div>
      {showDropdown ? (
        <div className='dropdown'>
          {regions.map((item, index) => (
            <div
              key={index}
              className='dropdown-item'
              onClick={() => {
                setFilter(item);
                handleShowDropdown();
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
