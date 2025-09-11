import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are Intresting Facts
          <br />
          we're proud of
        </h2>
        <div className="gradient-cards">
          {countryFacts.map((country, id) => {
            const {countryName, capital, population, interestingFact } =
              country;
            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">Name: {countryName}</p>
                  <p>
                    <span className="card-description">Capital: {capital}</span>
                  </p>
                  <p>
                    <span className="card-description">
                      Population: {population}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Interesting Facts:{" "}
                      {interestingFact.length > 20
                        ? interestingFact.slice(0, 10) + "..."
                        : interestingFact}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
