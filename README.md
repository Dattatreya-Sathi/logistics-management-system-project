# Logistics Management System

## Overview
This is a React JS application that replicates the functionality of a logistics management system with user authentication. Users can sign up, log in, and access a dashboard displaying live bids. They can view bid details.

## Features
### Authentication
- **Signup Page:** Users can create an account with a username, email, and password.
- **Login Page:** Users can log in using their credentials with validation and error handling.
- **Session Management:** Logged-in users remain authenticated across different pages.

### User Interface
- **Dashboard:** Displays live bids with details such as bid number, start date, time, origin, destination, vehicle type, etc.
- **Bid Details:** Shows in-depth information about a specific bid.

### Functionality
- **State Management:** Uses React Hooks (`useState`) to manage authentication, bids, and user responses.
- **API Integration (Optional):** Can integrate with a mock API for authentication and fetching bids.
- **Search & Filter:** Users can filter bids based on city, vehicle type, or bid number.
- **Responsive Design:** Fully responsive for desktop and mobile devices.
- **Real-time Updates (Optional):** WebSockets can be used to show real-time bid updates.

## Tech Stack
- **Frontend:** React JS (React Router, Hooks)
- **State Management:** `useState`
- **Styling:** CSS, Bootstrap, or Material-UI
- **Authentication:** Local Storage-based session management (or API integration for real authentication)
- **Version Control:** Git & GitHub

## Installation & Setup
```sh
# Clone the repository
git clone https://github.com/your-username/logistics-management.git
cd logistics-management

# Install dependencies
npm install

# Start the development server
npm start

# Access the application in the browser
# Open http://localhost:3000
```

## Usage Guide
- **Sign Up**: Create an account by providing a username, email, and password.
- **Log In**: Use your credentials to log in.
- **Dashboard**: View all active bids and select one for more details.
- **Search & Filter**: Use filters to find specific bids.

<details>
<summary>Font-families</summary>

- Roboto
</details>


#### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.

