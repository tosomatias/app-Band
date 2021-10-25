import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "../../firebaseConfig";
import {
  Container,
  ContainerLogo,
  ContainerFomr,
  InputForm,
  ContainerGoogle,
  Image,
  TextAccount,
  ContainerLoginButton,
  Button,
} from "./style";
import Logo from "../img/logo";
import IconGoogle from "../img/google.png";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [google, setGoogle] = useState(false);
  const [account, setAccount] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
          history.push("/home");
          // ...
        } else {
          setUser(false);
        }
      });
    };
    obtenerDatos();
    return () => {
      obtenerDatos();
    };
  }, [setUser, history]);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError(true);
    } else if (password.length < 6) {
      setError(true);
    } else if (newUser) {
      setError(false);
      handleSignUp();
    } else if (logIn) {
      handleLogin();
    } else if (google) {
      Google();
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Google = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.

        // ...
      });
  };

  return (
    <Container>
      <ContainerLogo>
        <Logo />
        <h1>My Band</h1>
      </ContainerLogo>

      <ContainerFomr>
        <form onSubmit={procesarDatos}>
          <InputForm
            placeholder={error ? "Email no encontrado" : "Ingrese un Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <InputForm
            type={
              error
                ? "La contraseña debe tener minimo 6 caracteres"
                : "Password"
            }
            placeholder="Ingrese una Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
          />
          {account ? (
            <ContainerLoginButton>
              <Button onClick={() => setNewUser(true)}>Registarme</Button>
              <TextAccount onClick={() => setAccount(false)}>
                Tengo cuenta
              </TextAccount>
            </ContainerLoginButton>
          ) : (
            <ContainerLoginButton>
              <Button onClick={() => setLogIn(true)}>Ingresar</Button>
              <TextAccount onClick={() => setAccount(true)}>
                No tengo cuenta
              </TextAccount>
            </ContainerLoginButton>
          )}

          <ContainerGoogle onClick={() => setGoogle(true)}>
            <Image src={IconGoogle} alt="icon of google" />
            Login with Google
          </ContainerGoogle>
        </form>
      </ContainerFomr>
    </Container>
  );
};

export default Login;
