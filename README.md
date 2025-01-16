# VitalsHub - Hospital Management System

VitalsHub is a comprehensive hospital management system designed to streamline operations and enhance patient care. Built with a modern tech stack, this full-stack application features a robust backend powered by Spring Boot microservices and a dynamic frontend developed using Next.js, Mantine, and Tailwind CSS.

## Features

- **User Authentication**: Secure login and role-based access control.
- **Appointment Management**: Schedule, reschedule, and manage appointments.
- **Patient Records**: Maintain detailed patient profiles and medical history.
- **Billing and Payments**: Simplified billing and payment processing.
- **Analytics Dashboard**: Visualize key metrics and performance indicators.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

### Frontend

- **Framework**: Next.js
- **UI Library**: Mantine
- **Styling**: Tailwind CSS

### Backend

- **Framework**: Spring Boot
- **Architecture**: Microservices
- **Database**: PostgreSQL

### Other Tools

- **Version Control**: Git
- **Package Management**: npm

## Setup Instructions

### Prerequisites

- Node.js (v20 or higher)
- Java 21
- PostgreSQL
- Git

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build the project:
   ```bash
   ./mvnw clean install
   ```
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Database Setup

1. Install PostgreSQL and create a database named `vitalshub`.
2. Update the database credentials in the `application.properties` file.

## Usage

1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. The backend APIs will be available at `http://localhost:8080` (or the configured port).

## Folder Structure

```
VitalsHub/
├── frontend/          # Next.js frontend
├── backend/           # Spring Boot backend
├── README.md          # Project documentation
└── assets/            # Static assets (e.g., images, logos)
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For queries, feel free to contact:

- **Developer**: Subhash Kumar
- **Email**: [subhashsangam@gmail.com]

---

Thank you for choosing VitalsHub to enhance your healthcare management experience!
