export type City = {
  asciiname: string;
  lat: string;
  lon: string;
  featureClass: string;
  featureCode: string;
  country: string;
  adminCode: string;
  countrySubdivision: string;
  municipality: string;
  municipalitySubdivision: string;
  population: string;
  tz: string;
};

export type Country = {
  country: string;
  zone: string;
  flag: string;
  subdiv: { title: string }[];
  cities: City[];
};

export type ExtendedCountry = {
  country: string;
  zone: string;
  flag: string;
  subdiv?: { title: string }[];
  cities: City[];
  numericOffset: number;
};

export type Flag = {
  code: string;
  title: string;
  subdiv?: { title: string }[];
};

export type ZoneObject = {
  city: string;
  numericOffset: number;
  zone: string;
  flags: Flag[];
  cities: City[];
};

export type TimeZoneObject = { [key: string]: ZoneObject };

export type CountryObject = {
  [key: string]: string;
};

export type CountryNameObject = {
  [key: string]: CountryObject;
};

export type ClockFlag = {
  title: string | { title: string };
  subdiv: { title: string; extra: string }[];
  code: string;
};

export type ClockCityProps = {
  uniqueCities: City[];
};

export type DateProps = {
  date: string;
};

export type TimeProps = {
  date: string;
};

export type ClockProps = {
  flags: ClockFlag[];
  city: string;
  zone: string;
  cities: City[];
};

export type FlagProps = {
  code: string;
  title: string | { title: string };
  style?: any;
  cn?: string;
};

export type ClockTitleProps = {
  city: string;
};

export type ClockFlagsProps = {
  flags: {
    title: string | { title: string };
    subdiv: { title: string; extra: string }[];
    code: string;
  };
};
