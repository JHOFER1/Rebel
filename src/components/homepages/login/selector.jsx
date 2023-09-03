import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imgFlag1 from '../../../assets/imgPreApi/flagEcuador.png';
import imgFlag2 from '../../../assets/imgPreApi/flagChile.png';
import imgFlag3 from '../../../assets/imgPreApi/flagArgentina.png';

const countries = [
  { name: 'Ecuador', flagUrl: imgFlag1 },
  { name: 'Chile', flagUrl: imgFlag2 },
  { name: 'Argentina', flagUrl: imgFlag3 }
];

const CountrySelector = ({ onCountryChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleSelectChange = (e) => {
    const selectedCountryName = e.target.value;
    const selectedCountry = countries.find((country) => country.name === selectedCountryName);
    setSelectedCountry(selectedCountry);
    onCountryChange(selectedCountry.name); // Llama a la función para notificar al componente padre
  };

  return (
    <div className='w-full flex justify-center mt-[10vh]'>
      <div className="flex w-2/5 justify-center items-center bg-white rounded-full">
        <img src={selectedCountry.flagUrl} alt={selectedCountry.name} className="w-6 h-6 rounded-full" />
        <select
          value={selectedCountry.name}
          onChange={handleSelectChange}
          className="border rounded p-2 border-none"
        >
          {countries.map((country) => (
            <option key={country.name} value={country.name} className='text-sm'>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

CountrySelector.propTypes = {
  onCountryChange: PropTypes.func.isRequired,
};

export default CountrySelector;
