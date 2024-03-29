import PropTypes from "prop-types";
import "./Header.scss";
import {Link} from "react-router-dom";

const Header=({ countOrder, countFavor })=> {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__actions">
            <div className="header__favorites-list">
            <Link to="/favorite">
              <span className="icon-favorite">
                <span className="count">{countFavor}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#e62429"
                    d="M16.2 8.1c-.2.1-.3.1-.4 0-4-5.7-11.6-1.7-11.6 3.8 0 4.8 6.1 8.7 11 14.1 0 0 0 .1.1.1.4.4 1 .3 1.4-.1 4.9-5.4 11-9.2 11-14.1.1-5.5-7.2-9.5-11.5-3.8z"
                  />
                </svg>
              </span>
            </Link>
            </div>
          </div>
          <div className="header__logo">
            <a href="#" className="logo">
              <svg
                width="130"
                height="52"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect fill="#EC1D24" width="100%" height="100%"></rect>
                <path
                  fill="#FEFEFE"
                  d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"
                ></path>
                <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
                <path
                  fill="#FEFEFE"
                  d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="header__actions">
            <div className="header__favorites-list">
            <Link to="/basket">
              <span className="icon-favorite">
                <span className="count">{countOrder}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  className="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#FFF"
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  countOrder: PropTypes.number, 
  countFavor: PropTypes.number
};

Header.defaultProps = {
  countOrder: 0, 
  countFavor: 0
};
