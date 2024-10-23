# 🌍💱 Currency Converter Application

## Overview

This project is a simple **Currency Converter** web application built using **React.js**. It allows users to convert amounts between different currencies using real-time exchange rates fetched from an API. The app also features a **dark mode** toggle 🌙☀️ and the ability to swap 🔄 between the source and target currencies.

## ✨ Features

- 🔄 **Real-Time Currency Conversion:** Utilizes an API to fetch up-to-date exchange rates for selected currencies.
- 🌙 **Dark Mode Toggle:** Switch between light and dark themes with a smooth transition.
- 🔁 **Swap Functionality:** Swap the source and target currencies and automatically adjust the amounts.
- 📱 **Responsive Design:** The UI is designed to work well on both desktop and mobile devices.
- ⚠️ **Error Handling:** In case of API errors, appropriate error messages are displayed to the user.

## 🛠️ Tech Stack

- ⚛️ **React.js:** For building the user interface components.
- 🎨 **Tailwind CSS:** For styling the app with a focus on a clean and modern look.
- 🔗 **JavaScript API Fetch:** To request and retrieve the latest exchange rates.
- 🖼️ **Lucide Icons:** For the dark mode toggle button icons.
- ✅ **PropTypes:** For type-checking of component props.
- 📐 **CSS Flexbox & Grid:** For layout structuring.

## 🚀 Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd currency-converter
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Application:**

   ```bash
   npm run dev
   ```

5. **Access the App:** 🌐
   The app will be accessible in your browser at `http://localhost:5173`.

## 🧩 Components

### 1. **InputBox** 💸

- A reusable input component for entering the amount and selecting a currency.
  - Props:
    - `label` (string): The label of the input box (e.g., "From", "To").
    - `amount` (number): The value of the amount.
    - `onAmountChange` (function): Callback for updating the amount.
    - `onCurrencyChange` (function): Callback for changing the selected currency.
    - `currencyOptions` (array): The available currency options.
    - `selectCurrency` (string): The currently selected currency.
    - `amountDisable` (bool): Disable the amount input if needed.
    - `currencyDisable` (bool): Disable the currency dropdown if loading or error.

### 2. **DarkModeToggle** 🌙

- A toggle button that switches between light and dark themes.

### 3. **useCurrencyInfo Hook** 📊

- A custom hook to fetch and manage currency data from an external API.

### 4. **App Component** 🏛️

- The main component that integrates the UI and business logic for currency conversion.

## ⚙️ Usage

1. **Select a Currency:** 🏳️ Choose the "From" and "To" currencies using the provided dropdown menus.
2. **Enter Amount:** 💵 Input the amount you wish to convert in the "From" currency field.
3. **Convert:** 🔁 Click the **Convert** button to get the converted amount in the "To" currency.
4. **Swap Currencies:** 🔄 Click the **Swap** button to reverse the "From" and "To" currencies.

## 🌐 API Information

The currency data is fetched from the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api), which provides the latest exchange rates for various currencies.

## 🌙 Dark Mode

- The application supports dark mode. You can toggle between light and dark themes using the **DarkModeToggle** button located in the header.

## 🖼️ Screenshots

### Light Mode

![Light Mode](https://github.com/Celestial-0/ReactMinorProjects/blob/main/CurrencyConverter/src/assets/light_mode.png?raw=true)

### Dark Mode

![Dark Mode](https://github.com/Celestial-0/ReactMinorProjects/blob/main/CurrencyConverter/src/assets/dark_mode.png?raw=true)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api)
- [Lucide Icons](https://lucide.dev)
  
Feel free to customize the project further to meet your needs. Contributions are always welcome! 👨‍💻👩‍💻

---
