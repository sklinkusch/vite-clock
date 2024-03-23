import Flag from './Flag';
import { countries } from './data';
// import { getPermLocale } from './getLocale';
import type { City } from '../../../custom.d.ts';

type ClockCityProps = {
  uniqueCities: City[];
};

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
  const currentLanguage = window.navigator.language.substring(0, 2).toLowerCase();
  return (
    <>
      {uniqueCities && uniqueCities.length > 0 ? (
        <details style={{ width: '95%', paddingLeft: '2.5%', paddingRight: '2.5%' }}>
          <summary>Major Cities</summary>
          <ul>
            {uniqueCities
              .sort((a, b) => {
                if (a.asciiname.toLowerCase() < b.asciiname.toLowerCase()) return -1;
                if (b.asciiname.toLowerCase() < a.asciiname.toLowerCase()) return +1;
                if (a.country.toLowerCase() < b.country.toLowerCase()) return -1;
                if (b.country.toLowerCase() < a.country.toLowerCase()) return +1;
                if (a.adminCode.toLowerCase() < b.adminCode.toLowerCase()) return -1;
                if (b.adminCode.toLowerCase() < a.adminCode.toLowerCase()) return +1;
                return 0;
              })
              .map((city, index) => {
                const countryName =
                  currentLanguage in countries[city.country] && countries[city.country][currentLanguage]
                    ? countries[city.country][currentLanguage]
                    : 'en' in countries[city.country] && countries[city.country].en
                      ? countries[city.country].en
                      : city.country in countries && countries[city.country]
                        ? countries[city.country]
                        : city.country;
                return (
                  <li
                    key={`city-${index}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ flexBasis: '65%', textAlign: 'left' }}>{city.asciiname}</span>
                    <Flag
                      code={city.country}
                      title={countryName}
                      style={{ flexBasis: '35px', position: 'relative', bottom: '4px' }}
                    />
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
