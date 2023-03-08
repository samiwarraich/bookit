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
              <Image
                style={{ cursor: "pointer" }}
                src="/images/bookit_logo.png"
                alt="book it."
                width={145}
                height={33}
              />
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row-reverse">
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
                    <Link href="/admin/rooms" className="dropdown-item">
                      Rooms
                    </Link>
                    <Link href="/admin/bookings" className="dropdown-item">
                      Bookings
                    </Link>
                    <Link href="/admin/users" className="dropdown-item">
                      Users
                    </Link>
                    <Link href="/admin/reviews" className="dropdown-item">
                      Reviews
                    </Link>
                    <hr />
                  </>
                )}
                <Link href="/bookings/me" className="dropdown-item">
                  My Bookings
                </Link>

                <Link href="/me/update" className="dropdown-item">
                  Profile
                </Link>
                <Link
                  href="/"
                  className="dropdown-item text-danger"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link
                href="/login"
                className="btn btn-danger px-4 text-white login-header-btn float-right"
              >
                Login
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
