import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import "./signIn.scss";
import useSignIn from "../../Hooks/useSignIn";
import { FormControl } from "@mui/material";

const SignIn = () => {
  const {
    handleSubmit,
    name,
    setName,
    setEmail,
    email,
    password,
    setPassword,
    username,
    setUsername,
  } = useSignIn();

  return (
    <div className="sign-in">
      <div className="container">
        <div className="sign-in__wrapper">
          <Card sx={{ width: 430 }}>
            <CardContent>
              <Typography variant="h3" component="h3" textAlign="center">
                Sign up
              </Typography>
              <Typography marginTop={4}>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="outlined"
                    sx={{ width: 374 }}
                    color="inherit"
                  >
                    <svg
                      style={{ marginRight: "10px" }}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.16 12.1932C20.16 11.5905 20.1059 11.0109 20.0055 10.4546H12V13.7425H16.5746C16.3775 14.805 15.7786 15.7053 14.8784 16.308V18.4407H17.6255C19.2327 16.9609 20.16 14.7819 20.16 12.1932Z"
                        fill="#4285F4"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 20.5C14.295 20.5 16.2191 19.7389 17.6254 18.4407L14.8784 16.308C14.1173 16.818 13.1436 17.1193 12 17.1193C9.78611 17.1193 7.91224 15.6241 7.24383 13.615H4.40405V15.8173C5.80269 18.5953 8.67724 20.5 12 20.5Z"
                        fill="#34A853"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.24387 13.6151C7.07387 13.105 6.97728 12.5603 6.97728 12C6.97728 11.4398 7.07387 10.895 7.24387 10.385V8.18277H4.40409C3.82841 9.33027 3.5 10.6285 3.5 12C3.5 13.3716 3.82841 14.6698 4.40409 15.8173L7.24387 13.6151Z"
                        fill="#FBBC05"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.88072C13.2479 6.88072 14.3684 7.30958 15.2493 8.15186L17.6873 5.7139C16.2152 4.3423 14.2911 3.50003 12 3.50003C8.67724 3.50003 5.80269 5.40481 4.40405 8.18277L7.24383 10.385C7.91224 8.37595 9.78611 6.88072 12 6.88072Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                </Stack>
              </Typography>
              <Typography marginTop={2}>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="outlined"
                    sx={{ width: 374 }}
                    color="inherit"
                  >
                    <svg
                      style={{ marginRight: "10px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.5 20.9C6.25 20.15 3 16.45 3 12C3 7.05 7.05 3 12 3C16.95 3 21 7.05 21 12C21 16.45 17.75 20.15 13.5 20.9L13 20.5H11L10.5 20.9Z"
                        fill="url(#paint0_linear_5620_146)"
                      />
                      <path
                        d="M15.5 14.5L15.9 12H13.5V10.25C13.5 9.55 13.75 9 14.85 9H16V6.7C15.35 6.6 14.65 6.5 14 6.5C11.95 6.5 10.5 7.75 10.5 10V12H8.24999V14.5H10.5V20.85C11 20.95 11.5 21 12 21C12.5 21 13 20.95 13.5 20.85V14.5H15.5Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_5620_146"
                          x1="12"
                          y1="20.377"
                          x2="12"
                          y2="3"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0062E0" />
                          <stop offset="1" stopColor="#19AFFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Continue with Google
                  </Button>
                </Stack>
              </Typography>
              <Typography marginTop={4}>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                  <InputLabel htmlFor="outlined-basic">Your name</InputLabel>
                  <FormControl>
                    <TextField
                      id="outlined-basic"
                      placeholder="Enter your name"
                      variant="outlined"
                      sx={{ width: 374 }}
                      value={name}
                      onChange={(evt) => setName(evt.target.value)}
                      required
                    />
                  </FormControl>
                  <InputLabel htmlFor="email-basic" sx={{ marginTop: 2 }}>
                    Your email
                  </InputLabel>
                  <TextField
                    id="email-basic"
                    placeholder="Enter your email"
                    variant="outlined"
                    sx={{ width: 374 }}
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    type="email"
                    required
                  />
                  <InputLabel htmlFor="username-basic" sx={{ marginTop: 2 }}>
                    Your username
                  </InputLabel>
                  <TextField
                    id="username-basic"
                    placeholder=" Enter your username"
                    variant="outlined"
                    sx={{ width: 374 }}
                    value={username}
                    onChange={(evt) => setUsername(evt.target.value)}
                    required
                  />
                  <InputLabel htmlFor="password-basic" sx={{ marginTop: 2 }}>
                    Your password
                  </InputLabel>
                  <TextField
                    id="password-basic"
                    placeholder="Enter your password"
                    variant="outlined"
                    sx={{ width: 374 }}
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    type="password"
                    required
                  />
                  <Button
                    sx={{
                      width: 374,
                      marginTop: 3,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Button
                  </Button>
                </form>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
