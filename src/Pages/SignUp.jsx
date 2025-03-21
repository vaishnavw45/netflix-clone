import React from "react";
import { useState, useContext } from "react";
<<<<<<< HEAD
=======

>>>>>>> becf846 (msg)
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
<<<<<<< HEAD
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig.js";
=======
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
>>>>>>> becf846 (msg)
import { AuthContext } from "../Context/UserContext";
import { ClipLoader } from "react-spinners";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

function SignUp() {
  const { User, setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

<<<<<<< HEAD
  const handleSubmit = async (e) => {
=======
  const handleSubmit = (e) => {
>>>>>>> becf846 (msg)
    e.preventDefault();
    setLoader(true);

    const auth = getAuth();
<<<<<<< HEAD
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        const EmptyArray = [];
        await setDoc(doc(db, "Users", user.uid), {
          email: email,
          Uid: user.uid,
        });

        await setDoc(doc(db, "MyList", user.uid), {
          movies: EmptyArray,
        }, { merge: true });

        await setDoc(doc(db, "WatchedMovies", user.uid), {
          movies: EmptyArray,
        }, { merge: true });

        await setDoc(doc(db, "LikedMovies", user.uid), {
          movies: EmptyArray,
        }, { merge: true });

        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoader(false);
      setErrorMessage(errorMessage);
      console.log(errorCode);
      console.log(errorMessage);
    }
=======
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        onAuthStateChanged(auth, (user) => {
          const EmptyArray = [];
          setDoc(doc(db, "Users", user.uid), {
            email: email,
            Uid: user.uid,
          }).then(() => {
            setDoc(
              doc(db, "MyList", user.uid),
              {
                movies: EmptyArray,
              },
              { merge: true }
            ).then(() => {
              setDoc(
                doc(db, "WatchedMovies", user.uid),
                {
                  movies: EmptyArray,
                },
                { merge: true }
              );
              setDoc(
                doc(db, "LikedMovies", user.uid),
                {
                  movies: EmptyArray,
                },
                { merge: true }
              );
            });
          });
        });

        const user = userCredential.user;
        if (user != null) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoader(false);
        setErrorMessage(errorMessage);
        console.log(errorCode);
        console.log(errorMessage);
      });
>>>>>>> becf846 (msg)
  };

  return (
    <section
      className="h-[100vh] bg-gray-500"
      style={{
        background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
      }}
    >
      <div className="h-[100vh] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#000000a2] rounded-lg shadow sm:my-0 md:mt-0 sm:max-w-lg xl:p-0 border-2 border-stone-800 lg:border-0">
          <Fade>
            <div>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-12">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Create a new account
                </h1>
                <h1 className="text-white text-2xl p-3 text-center border-2 border-red-700 rounded-sm">
                  Not Real Netflix
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
<<<<<<< HEAD
                      htmlFor="email"
=======
                      for="email"
>>>>>>> becf846 (msg)
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      className={
                        ErrorMessage
                          ? "bg-stone-700 text-white sm:text-sm rounded-sm border-2 border-red-700 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white "
                          : "bg-stone-700 text-white sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white "
                      }
                      placeholder="name@emil.com"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <label
<<<<<<< HEAD
                      htmlFor="password"
=======
                      for="password"
>>>>>>> becf846 (msg)
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={
                        ErrorMessage
                          ? "bg-stone-700 text-white sm:text-sm rounded-sm border-2 border-red-700 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          : "bg-stone-700 text-white sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white"
                      }
                      required=""
                    ></input>
                  </div>
                  <div>
                    {ErrorMessage && (
                      <h1 className="flex text-white font-bold p-4 bg-red-700 rounded text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                          />
                        </svg>

                        {ErrorMessage}
                      </h1>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                          required=""
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
<<<<<<< HEAD
                        <label htmlFor="remember" className="text-gray-500">
=======
                        <label for="remember" className="text-gray-500">
>>>>>>> becf846 (msg)
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`w-full text-white ${
                      loader
                        ? `bg-stone-700`
                        : `bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300`
                    } font-medium rounded-sm text-sm px-5 py-2.5 text-center`}
                  >
                    {loader ? <ClipLoader color="#ff0000" /> : "Create now"}
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Already have one?{" "}
                    <Link
                      className="font-medium text-white hover:underline"
                      to={"/signin"}
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default SignUp;
=======
export default SignUp;
>>>>>>> becf846 (msg)
