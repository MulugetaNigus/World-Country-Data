const SampleCountry = () => {
  return (
    <>
      {/* banner for the time when the user get */}
      <div className="row">
        <div className="col-md-10 rounded mx-auto mt-5" id="con">
          <div className="card m-3 shadow">
            <img
              src="../Assets/logo.png"
              alt="country flag logo"
              className="img-fluid w-50 mx-auto"
            />
            <p className="display-1 my-3">Name: Poland</p>
            <p className=" fs-2">Capital City: Warsaw</p>
            <p className=" fs-2">currencies: Polish Zloty</p>
            <p className=" fs-2">language: Polish</p>
            <p className=" fs-2">population: 37950802</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleCountry;
