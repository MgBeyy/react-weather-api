import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Container, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import axios from "axios";
import { use, useEffect, useState } from "react";

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

  function getWeatherInfo(code) {
    const codeMap = {
      // Clear
      0: { icon: "01d", description: "Clear sky" },

      // Clouds
      1: { icon: "02d", description: "Mainly clear" },
      2: { icon: "02d", description: "Partly cloudy" },
      3: { icon: "03d", description: "Overcast" },

      // Fog
      45: { icon: "50d", description: "Fog" },
      48: { icon: "50d", description: "Depositing rime fog" },

      // Drizzle
      51: { icon: "09d", description: "Light drizzle" },
      53: { icon: "09d", description: "Moderate drizzle" },
      55: { icon: "09d", description: "Dense drizzle" },
      56: { icon: "09d", description: "Light freezing drizzle" },
      57: { icon: "09d", description: "Dense freezing drizzle" },

      // Rain
      61: { icon: "10d", description: "Slight rain" },
      63: { icon: "10d", description: "Moderate rain" },
      65: { icon: "10d", description: "Heavy rain" },
      66: { icon: "13d", description: "Light freezing rain" },
      67: { icon: "13d", description: "Heavy freezing rain" },

      // Snow
      71: { icon: "13d", description: "Slight snow fall" },
      73: { icon: "13d", description: "Moderate snow fall" },
      75: { icon: "13d", description: "Heavy snow fall" },
      77: { icon: "13d", description: "Snow grains" },

      // Showers
      80: { icon: "09d", description: "Slight rain showers" },
      81: { icon: "09d", description: "Moderate rain showers" },
      82: { icon: "09d", description: "Violent rain showers" },
      85: { icon: "13d", description: "Slight snow showers" },
      86: { icon: "13d", description: "Heavy snow showers" },

      // Thunderstorm
      95: { icon: "11d", description: "Thunderstorm" },
      96: { icon: "11d", description: "Thunderstorm with slight hail" },
      99: { icon: "11d", description: "Thunderstorm with heavy hail" },
    };

    return codeMap[code] || { icon: "01d", description: "Unknown" };
  }

  const [wheater, setWheater] = useState({
    temperature: null,
    weather_code: null,
    icon: "",
    description: "",
    time: "",
  });
  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=41.027&longitude=28.6773&current=temperature_2m,is_day,weather_code,apparent_temperature&timezone=auto"
      )
      .then(function (response) {
        console.log(response.data.current);
        setWheater({
          temperature: response.data.current.apparent_temperature,
          weather_code: response.data.current.weather_code,
          icon: getWeatherInfo(response.data.current.weather_code).icon,
          description: getWeatherInfo(response.data.current.weather_code)
            .description,
          time: new Date(response.data.current.time).toLocaleTimeString(
            "en-US",
            {
              day: "2-digit",
              month: "short",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }
          ),
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
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
                <Typography variant="h5">{wheater.time}</Typography>
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
                      {wheater.temperature} &deg;C
                    </Typography>
                  </div>
                  <div style={{ margin: "20px" }}>
                    <Typography variant="h6" style={{ textAlign: "left" }}>
                      {wheater.description}
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
