import { useEffect } from 'react';
import { useDebugState } from 'use-named-state';
import type { Country, ExtendedCountry, TimeZoneObject } from '../custom.d.ts';
import './App.css';
import Clock from './components/Clock/Clock.tsx';

function getCurrentOffset(timeZone: string) {
  const format = new Intl.DateTimeFormat('en', { timeZone, timeZoneName: 'longOffset' }) || {
    offsetString: '±00:00',
    offsetMinutes: 0,
  };
  const offsetString = format
    .formatToParts()
    .find((p) => p.type === 'timeZoneName')
    .value.slice(3);

  if (!offsetString) return { offsetString: '±00:00', offsetMinutes: 0 };
  if (offsetString === '') {
    return { offsetString: '±00:00', offsetMinutes: 0 };
  }

  const hours = offsetString.slice(0, 3);
  const minutes = offsetString.slice(4);
  const offsetMinutes = parseInt(hours, 10) * 60 + (parseInt(hours, 10) < 0 ? -1 : 1) * parseInt(minutes, 10);
  return { offsetString, offsetMinutes };
}

function App() {
  const [allTz, setAllTz] = useDebugState<Country[]>('allTz', []);
  const [filtVal, setFiltVal] = useDebugState<string>('filtVal', '');
  const [timezones, setTimezones] = useDebugState<any[]>('timezones', []);
  const fetchData = (currentLanguage: string) => {
    fetch(`https://worldtime-api.vercel.app/real?lang=${currentLanguage}`)
      .then((response) => response.json())
      .then((data) => {
        setAllTz(data);
        prepareZones(data, filtVal);
        // setInterval(() => prepareZones(allTz, filtVal), 1000);
      })
      .catch((error) => console.error(error));
  };
  const prepareZones = (data: Country[], filterVal: string) => {
    const myData = data ? data : allTz;
    const unsortedStates = myData.map((tz) => {
      const { country, zone, flag, subdiv = [], cities = [] } = tz;
      const offsetObject = getCurrentOffset(zone) || { offsetMinutes: 0 };
      const { offsetMinutes: numericOffset = 0 } = offsetObject;
      return { country, zone, flag, numericOffset, subdiv, cities };
    });
    const sortedStates = unsortedStates.sort(
      (a: ExtendedCountry, b: ExtendedCountry) => a.numericOffset - b.numericOffset
    );
    const timezoneObject = sortedStates.reduce((acc: TimeZoneObject, curr: ExtendedCountry) => {
      const obj = { ...acc };
      const { flag: code, country: title, zone, numericOffset, subdiv = [], cities = [] } = curr;
      const sign = numericOffset < 0 ? '-' : numericOffset > 0 ? '+' : '±';
      const absOffset = Math.abs(numericOffset);
      const offsetHours = Math.floor(absOffset / 60);
      const offsetMins = absOffset % 60;
      const offsetH = offsetHours < 10 ? `0${offsetHours}` : `${offsetHours}`;
      const offsetM = offsetMins < 10 ? `0${offsetMins}` : `${offsetMins}`;
      const city = `UTC${sign}${offsetH}:${offsetM}`;
      const flag = { code, title, subdiv };
      if (obj.hasOwnProperty(city)) {
        obj[city].flags.push(flag);
        obj[city].cities = obj[city].cities.concat(cities);
      } else {
        obj[city] = { city, numericOffset, zone, flags: [flag], cities };
      }
      return obj;
    }, {});
    const timezoneArray = Object.values(timezoneObject).sort((a, b) => a.numericOffset - b.numericOffset);
    const filterValue = filterVal ? filterVal : filtVal;
    const filteredStates =
      filterValue !== ''
        ? timezoneArray.filter((tz) => {
            const { flags, cities } = tz;
            const filteredFlags = flags.filter((flag) => {
              const { title: country, subdiv = [] } = flag;
              const title = subdiv.length > 0 ? `${country}: ${subdiv.map((item) => item.title).join(', ')}` : country;
              if (filterValue !== '') {
                if (title.toLowerCase().includes(filterValue.toLowerCase())) return true;
                return false;
              }
              return true;
            });
            if (filteredFlags.length > 0) return true;
            const filteredCities = cities.filter((city) =>
              city.asciiname.toLowerCase().includes(filterValue.toLowerCase())
            );
            if (filteredCities.length > 0) return true;
            return false;
          })
        : timezoneArray;
    setTimezones(filteredStates);
  };
  useEffect(() => {
    const currentLanguage = window.navigator.language.substring(0, 2).toLowerCase();
    fetchData(currentLanguage);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="app">
      <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '24px' }}>
        <input
          type="text"
          placeholder="Filter countries"
          onChange={(e) => {
            setFiltVal(e.target.value);
            prepareZones(allTz, e.target.value);
          }}
        />
      </div>
      <div className="row album sk-album">
        {timezones &&
          timezones.length > 0 &&
          timezones.map((time, index) => (
            <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} cities={time.cities} />
          ))}
      </div>
    </div>
  );
}

export default App;
