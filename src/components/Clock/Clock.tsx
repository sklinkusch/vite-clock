import { useEffect } from 'react';
import { useDebugState } from 'use-named-state';
import type { City } from '../../../custom.d.ts';
import ClockTitle from './ClockTitle.tsx';
import ClockFlags from './ClockFlags.tsx';
// const ClockCities = lazy(() => import("./ClockCities"))

type Flag = {
  title: string | { title: string };
  subdiv: { title: string; extra: string }[];
  code: string;
};

type DateProps = {
  date: string;
};

type TimeProps = {
  date: string;
};

type ClockProps = {
  flags: Flag[];
  city: string;
  zone: string;
  cities: City[];
};

export const ClockDate = ({ date }: DateProps) => <p>{date}</p>;

export const ClockTime = ({ date }: TimeProps) => <p>{date}</p>;

const Clock = ({ flags, city, zone, cities }: ClockProps) => {
  const [formattedDate, setFormattedDate] = useDebugState<string>(
    'formattedDate',
    `${new Date().toLocaleDateString('en-GB', { timeZone: zone })}`
  );
  const [formattedTime, setFormattedTime] = useDebugState(
    'formattedTime',
    `${new Date().toLocaleTimeString('de', { timeZone: zone })}`
  );
  useEffect(() => {
    setInterval(() => tick(), 1000);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
  const tick = () => {
    setFormattedDate(`${new Date().toLocaleDateString('en-GB', { timeZone: zone })}`);
    setFormattedTime(`${new Date().toLocaleTimeString('de', { timeZone: zone })}`);
  };
  const sortedFlags = flags.sort((a, b) => {
    const aTitle = typeof a.title === 'object' ? a.title.title : a.title;
    const bTitle = typeof b.title === 'object' ? b.title.title : b.title;
    return aTitle.localeCompare(bTitle, 'de', { sensitivity: 'base' });
  });
  const reducedFlags = sortedFlags.reduce((acc: Flag[], curr) => {
    const arr = [...acc];
    const flagIndexes = arr.map((flag: Flag) => flag.code);
    if (flagIndexes.includes(curr.code)) {
      const index = flagIndexes.indexOf(curr.code);
      const element = arr[index];
      curr.subdiv.forEach((item) => {
        if (!element.subdiv.includes(item)) {
          element.subdiv.push(item);
        }
      });
      const sortedSubdiv = element.subdiv.sort((a, b) => {
        const aTitle = a.title;
        const bTitle = b.title;
        return aTitle.localeCompare(bTitle, 'de', { sensitivity: 'base' });
      });
      arr[index].subdiv = sortedSubdiv;
    } else {
      arr.push(curr);
    }
    return arr;
  }, []);
  const uniqueCities = [...new Set(cities)];
  return (
    <div>
      <div className="album-item">
        <ClockTitle city={city} />
        <ClockDate date={formattedDate} />
        <ClockTime date={formattedTime} />
        <ClockFlags flags={reducedFlags} />
        {/* <ClockCities uniqueCities={uniqueCities} /> */}
      </div>
    </div>
  );
};

export default Clock;
