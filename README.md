# WeatherNow 🌤️

**WeatherNow** is a sleek, responsive, and user-friendly web application that allows users to instantly check the current weather conditions for any city. Featuring a modern UI with glassmorphism effects and smooth animations, it provides a seamless experience across both desktop and mobile devices.

## ✨ Features

* **Real-Time Search:** Users can enter any city name to retrieve current weather data.
* **Modern UI/UX:** A visually appealing interface featuring a full-screen background image, transparent dark overlay panels, and a clean typography system.
* **Responsive Design:** Completely mobile-friendly. The layout automatically adapts its form and structure based on the screen size (perfect for both desktop and mobile viewing).
* **Smooth Animations:** Includes a satisfying slide-down fade-in animation upon loading the page.
* **Dynamic Content Display:** The weather information section stays hidden until a search is successfully executed, keeping the interface clean and focused.

## 🛠️ Technologies Used

* **HTML5:** For semantic structure and accessibility.
* **CSS3:** For styling, Flexbox layouts, responsive media queries, and keyframe animations.
* **JavaScript:** (Required in `script.js`) For handling form submissions, DOM manipulation, and fetching data from a weather API (like OpenWeatherMap).

## 📁 Project Structure

```text
weather/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design rules
├── script.js           # Logic for API calls and DOM updates
└── images/
    └── background.jpeg # Background image for the application
```

## 🚀 Getting Started

To run this project locally on your machine, follow these simple steps:

### Prerequisites
You don't need any complex build tools. Just a modern web browser and a code editor (like VS Code). You will also need a free API key from a weather service provider (e.g., OpenWeatherMap, WeatherAPI) to enable the JavaScript logic.

### Installation

1. **Clone or Download the Repository:**
   Download the project files into a folder on your computer.

2. **Add Your Background Image:**
   Ensure you have an image named `background.jpeg` placed inside an `images` folder in your project root, as referenced in the CSS.

3. **Set Up the JavaScript (`script.js`):**
   *Note: The HTML/CSS is provided, but you will need to implement the API fetch logic in your `script.js` file.* * Hook into the form submission (`#weatherForm`).
   * Prevent default form submission.
   * Fetch weather data using the value from `#cityInput`.
   * Inject the results into the `#weatherInfo` section and change its CSS `display` property from `none` to `block`.

4. **Run the App:**
   Simply double-click the `index.html` file to open it in your default web browser, or use a tool like VS Code's "Live Server" extension for a better development experience.

## 🔮 Future Enhancements (Ideas for `script.js`)

* **Error Handling:** Display a user-friendly error message if a city is not found or if the API call fails.
* **Loading State:** Add a loading spinner on the button while fetching data.
* **Extended Forecast:** Add a 5-day weather forecast below the current weather.
* **Geolocation:** Add a button to automatically fetch the weather for the user's current location using the browser's Geolocation API.

---
*Created for the WeatherNow project.*
