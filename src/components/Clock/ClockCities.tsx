import Flag from './Flag';
import { countries } from './data';
// import { getPermLocale } from './getLocale';
import type { City, CountryObject, ClockCityProps } from '../../types/custom';
import styles from '@/styles/ClockCities.module.css';

const getSunTime = (city: City) => {
  const { lon } = city;
  const now = Date.now();
  const offsetRaw = parseFloat(lon) * 4;
  const offsetMs = offsetRaw * 60 * 1000;
  const time = now + offsetMs;
  const sunTime = new Date(time)
    .toLocaleTimeString('en-GB', { timeZone: 'Etc/GMT+0' })
    .split(':')
    .slice(0, 2)
    .join(':');
  return sunTime;
};

const ClockCities = ({ uniqueCities }: ClockCityProps) => {
  let currentLanguage = window.navigator.language.substring(0, 2).toLowerCase();
  if (['de', 'en', 'fr'].includes(currentLanguage)) currentLanguage = 'en';
  return (
    <>
      {uniqueCities && uniqueCities.length > 0 ? (
        <details className={styles.citylist}>
          <summary>Major Cities</summary>
          <ul className={styles.ul}>
            {uniqueCities
              .sort((a: City, b: City) => {
                if (a.asciiname.toLowerCase() < b.asciiname.toLowerCase()) return -1;
                if (b.asciiname.toLowerCase() < a.asciiname.toLowerCase()) return +1;
                if (a.country.toLowerCase() < b.country.toLowerCase()) return -1;
                if (b.country.toLowerCase() < a.country.toLowerCase()) return +1;
                if (a.adminCode.toLowerCase() < b.adminCode.toLowerCase()) return -1;
                if (b.adminCode.toLowerCase() < a.adminCode.toLowerCase()) return +1;
                return 0;
              })
              .map((city: City, index: number) => {
                const { country, asciiname } = city;
                const countryObject: CountryObject =
                  typeof country === 'string' && countries.hasOwnProperty(country) ? countries[country] : {};
                const countryName: string = countryObject.hasOwnProperty(currentLanguage)
                  ? countryObject[currentLanguage]
                  : '';
                if (!countryName.length) return;
                return (
                  <li key={`city-${index}`} className={styles.cityrow}>
                    <span className={styles.cityname}>{asciiname}</span>
                    <Flag code={country} title={countryName} cn={styles.flag} />
                    <span>{getSunTime(city)}</span>
                  </li>
                );
              })}
          </ul>
        </details>
      ) : (
        <div style={{ height: '24.5px' }} />
      )}
    </>
  );
};

export default ClockCities;
