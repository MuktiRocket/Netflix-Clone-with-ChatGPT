import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="fixed w-screen md:px-8 px-6 py-6 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-center md:justify-between">
      <img className="mx-auto md:w-44 w-36 md:mx-0" src={logo} alt="logo" />
      {user && (
        <div className="flex md:p-2 md:m-2 m-2 justify-between">
          {showGptSearch && (
            <select
              className="md:p-2 md:m-2 bg-transparent hover:bg-gray-950 text-white rounded-sm md:rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option
                  className="text-white bg-gray-900"
                  key={language.identifier}
                  value={language.identifier}
                >
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="md:px-2 md:my-2 my-1 m-10 bg-opacity-50 hover:bg-gray-950 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="md:w-12 md:h-12 w-8 h-8 pr-1"
            alt="usericon"
            // src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYRFxAWVrKCK9D6k09JulRmTVhxugke34M7wLusyTHt0RvbvCG9vm-LB4vThezTJ8ugZYSEozv070OBw7Tfi9ICj_luecvA.png?r=d3e"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-white md:px-4 px-1 pl-1"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
