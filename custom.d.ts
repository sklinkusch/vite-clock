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
