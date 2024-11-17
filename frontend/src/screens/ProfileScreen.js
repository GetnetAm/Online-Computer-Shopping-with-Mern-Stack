import { useEffect, useState } from "react";
import LoadingBox from "../coponents/Box/LoadingBox";
import MessageBox from "../coponents/Box/MessageBOx";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../Redux/actions/userActions";
import { toast } from "react-toastify";
import { USER_UPDATE_PROFILE_RESET } from "../Redux/constants/userConstants";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");
  const [confrimPasswod, setConfrimPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
        dispatch({type: USER_UPDATE_PROFILE_RESET})
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo._id]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confrimPasswod) {
      toast("Password and confrim password not match");
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }));
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            

            {
                loadingUpdate && <LoadingBox></LoadingBox>
            }
            {
                errorUpdate && (
                    <MessageBox className="danger"><span className="danger">{errorUpdate}</span></MessageBox>
                )
            }

            {successUpdate && (
                <MessageBox variant="success">
                    <span className="success">
                        Profile Update Successfully

                    </span>
                </MessageBox>
            )}

            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                placeholder="Enter password"
                onChange={(e) => setPasswod(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confrimPassword">Confrim Password</label>
              <input
                id="confrimPassword"
                type="passwod"
                placeholder="Enter Confrim password"
                onChange={(e) => setConfrimPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
