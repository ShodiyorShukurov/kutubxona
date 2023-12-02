import React from "react";
import logo from "../../assets/logo.png";
import "./header.scss";
import user from "../../assets/user.svg";

const BooksHeader = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="books-header__site">
      <div className="container">
        <div className="books-header__site-wrapper">
          <div className="books-header__site-start">
            <a href="#">
              <img src={logo} alt="Books" width="150" height={36} />
            </a>

            <form>
              {open ? (
                <div className="books-header__site-input">
                  <svg
                    style={{ marginRight: "9px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input type="text" placeholder="Raspberry" />
                  <button onClick={()=> setOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_202_182)">
                        <path
                          d="M12.5 7.50002L7.49996 12.5M7.49996 7.50002L12.5 12.5M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z"
                          stroke="#333333"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_202_182">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              ) : (
                <button onClick={() => setOpen(true)}>
                  <svg
                    style={{ marginRight: "9px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#FEFEFE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Search for any training you want
                </button>
              )}

              {/*<input type="search" />*/}
            </form>
          </div>
          <div className="books-header__site-end">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                stroke="#151515"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="15.5"
                y="0.5"
                width="5"
                height="5"
                rx="2.5"
                fill="#FF4D4F"
              />
              <rect
                x="15.5"
                y="0.5"
                width="5"
                height="5"
                rx="2.5"
                stroke="#FEFEFE"
              />
            </svg>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BooksHeader;
