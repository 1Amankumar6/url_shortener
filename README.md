```markdown
# URL Shortener

A full-stack *URL shortening application* built with *Spring Boot* (backend) and *React.js* (frontend), with optional *Docker support* for deployment. The project allows users to shorten long URLs, track clicks, and manage their links efficiently with authentication.

---

## Tech Stack
- *Backend:* Java, Spring Boot, REST APIs, JWT Authentication  
- *Frontend:* React.js, HTML, CSS, JavaScript  
- *Database:* MySQL  
- *Containerization:* Docker  

---

## Features
- User registration and authentication (JWT-based)  
- Shorten long URLs into easy-to-share links  
- Redirect from short URL to original URL  
- View all URLs created by a user  
- Track clicks on URLs with analytics and date filtering  
- RESTful API endpoints for CRUD operations  
- Dockerized backend for easy deployment  
- Integrated frontend for seamless user experience  

---

## Backend API Endpoints

### Authentication
| Method | Endpoint                  | Description               |
|--------|--------------------------|---------------------------|
| POST   | `/api/auth/public/login`   | Login user               |
| POST   | `/api/auth/public/register`| Register user            |

### URL Management
| Method | Endpoint                          | Description                                 |
|--------|----------------------------------|--------------------------------------------|
| POST   | `/api/urls/shorten`               | Create a short URL (Authenticated User)   |
| GET    | `/api/urls/myurls`                | Get all URLs created by user              |
| GET    | `/api/urls/analytics/{shortUrl}` | Get click analytics for a URL             |
| GET    | `/api/urls/totalClicks`           | Get total clicks per day for a user       |
| GET    | `/{shortUrl}`                     | Redirect to the original URL             |

---

## Frontend

- Built with *React.js*, integrated with the backend APIs.  
- Provides forms for *login*, *registration*, and *URL shortening*.  
- Dashboard shows *all shortened URLs*, *click statistics*, and *analytics by date*.  
- Communicates with backend using *REST APIs* secured via JWT.  

---

## Installation

### Prerequisites
- Java 17+  
- Node.js & npm  
- MySQL database  
- Docker (optional)  

### Backend Setup
```bash
cd backend
mvn clean package
java -jar target/url-shortener.jar

# Or using Docker
docker build -t url-shortener-backend .
docker run -p 8080:8080 url-shortener-backend
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

* Runs frontend at: `http://localhost:3000`
* Make sure backend is running at `http://localhost:8080`

---

## Usage

1. Open the frontend at `http://localhost:3000`
2. Register a new user or login
3. Enter a long URL to shorten
4. Copy the generated short URL and share it
5. View analytics and total clicks for your URLs

---

## Docker Deployment (Optional)

* Build and run backend container:

```bash
docker build -t url-shortener-backend .
docker run -p 8080:8080 url-shortener-backend
```

* Frontend can be served separately using `npm start` or integrated into Docker with a custom Dockerfile.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make changes and commit (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

**Note:** Backend and frontend are fully integrated. Docker setup is optional but recommended for consistency across environments.

```

