const countriesData = [
  {
    id: 1,
    country: "Germany",
    population: 83783942,
    region: "Europe",
    capital: "Berlin",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    id: 2,
    country: "United States of America",
    population: 331893745,
    region: "Americas",
    capital: "Washington, D.C.",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    id: 3,
    country: "Brazil",
    population: 212559417,
    region: "Americas",
    capital: "Brasília",
    flag: "https://flagcdn.com/br.svg",
  },
  {
    id: 4,
    country: "Iceland",
    population: 366425,
    region: "Europe",
    capital: "Reykjavik",
    flag: "https://flagcdn.com/is.svg",
  },
  {
    id: 5,
    country: "Afghanistan",
    population: 38928346,
    region: "Asia",
    capital: "Kabul",
    flag: "https://flagcdn.com/af.svg",
  },
  {
    id: 6,
    country: "Åland Islands",
    population: 28875,
    region: "Europe",
    capital: "Mariehamn",
    flag: "https://flagcdn.com/ax.svg",
  },
  {
    id: 7,
    country: "Albania",
    population: 2877797,
    region: "Europe",
    capital: "Tirana",
    flag: "https://flagcdn.com/al.svg",
  },
  {
    id: 8,
    country: "Algeria",
    population: 43851044,
    region: "Africa",
    capital: "Algiers",
    flag: "https://flagcdn.com/dz.svg",
  },
];


const Hom = () => {
  return (
    <div className="container sm-auto  h-[100vh] flex flex-wrap gap-[64px]">
      <div>
        
      </div>
      {countriesData.map((country) => (
        <div key={country.id} className="country-card p-4 border m-2 rounded shadow-lg w-[264px]">
          <img src={country.flag} alt={`${country.country} flag`} className="w-[267px]" />
          <h2 className="text-xl font-bold">{country.country}</h2>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default Hom;
