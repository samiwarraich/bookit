import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/client";
import { loadUser } from "../../redux/actions/userActions";

const Header = () => {
  const { user, loading } = useSelector((state) => state.loadedUser);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [dispatch, user]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link href="/" passHref>
              <a>
                <Image
                  style={{ cursor: "pointer" }}
                  src="/images/bookit_logo.png"
                  alt="book it."
                  width={145}
                  height={33}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          {user ? (
            <div className="dropdown">
              <a
                className="btn dropdown-toggle"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <figure className="avatar avatar-nav">
                  <Image
                    src={user?.avatar?.url}
                    alt={user?.name}
                    className="rounded-circle"
                    width={40}
                    height={40}
                  />
                </figure>
                <span>{user?.name}</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user.role === "admin" && (
                  <>
                    <Link href="/admin/rooms">
                      <a className="dropdown-item">Rooms</a>
                    </Link>

                    <Link href="/admin/bookings">
                      <a className="dropdown-item">Bookings</a>
                    </Link>

                    <Link href="/admin/users">
                      <a className="dropdown-item">Users</a>
                    </Link>
                    <Link href="/admin/reviews">
                      <a className="dropdown-item">Reviews</a>
                    </Link>
                    <hr />
                  </>
                )}
                <Link href="/bookings/me">
                  <a className="dropdown-item">My Bookings</a>
                </Link>

                <Link href="/me/update">
                  <a className="dropdown-item">Profile</a>
                </Link>

                <Link href="/">
                  <a
                    className="dropdown-item text-danger"
                    onClick={logoutHandler}
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                  Login
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
