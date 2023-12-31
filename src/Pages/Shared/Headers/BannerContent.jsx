import PropTypes from "prop-types";

const BannerContent = ({ data }) => {

  console.log(data);
  
  return (
    <div>
      {/* page content here */}
      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerContent.propTypes = {
  data: PropTypes.object,
};

export default BannerContent;
