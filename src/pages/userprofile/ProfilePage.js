import { useLogin } from "../../context";
import "./profilepage.css";

export const ProfilePage = () => {
  const { logoutHandler } = useLogin();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <>
      <div className="profile-container">
        <h2 className="profile-title">My Account</h2>
        <div className="logout-btn-container">
          <button onClick={() => logoutHandler()} className="logout-btn">
            Logout
          </button>
        </div>
        <div className="profile-details-container">
          <div className="profile-details">
            <div>First Name: </div>
            <div>{userDetails.firstname}</div>
          </div>
          <div className="profile-details">
            <div>Last Name: </div>
            <div>{userDetails.lastname}</div>
          </div>
          <div className="profile-details">
            <div>Email Id: </div>
            <div>{userDetails.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
