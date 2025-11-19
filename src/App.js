import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Container, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* CARD */}
          <div
            style={{
              padding: "20px",
              width: "100%",
              borderRadius: "20px",
              boxShadow: "-5px 11px 1px rgba(0, 0, 0, 0.1)",
              background: "#3f4b61ff",
            }}
          >
            {/* CONTENT */}
            <div style={{ color: "white" }}>
              {/* CITY & TIME */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="h2">Istanbul</Typography>
                <Typography variant="h5">Mon 14:00</Typography>
              </div>
              {/* === CITY & TIME === */}
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* DEGREE & DESCRIPTION */}
                <div style={{}}>
                  {/* TEMP */}
                  <div style={{}}>
                    <Typography variant="h2" style={{ textAlign: "left" }}>
                      15&deg;C
                    </Typography>
                  </div>
                  <div style={{ margin: "20px" }}>
                    <Typography variant="h6" style={{ textAlign: "left" }}>
                      Broken Clouds
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: "left" }}>
                      09&deg;C / 17&deg;C
                    </Typography>
                  </div>
                  {/* === TEMP === */}
                </div>
                <div>
                  <CloudIcon style={{ fontSize: "200px" }} />
                </div>
                {/* === DEGREE & DESCRIPTION === */}
              </div>
            </div>
            {/* === CONTENT === */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "column",
              width: "100%",
              marginTop: "15px",
            }}
          >
            <Button style={{}} variant="text">
              Language
            </Button>
          </div>
          {/* === CARD === */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
