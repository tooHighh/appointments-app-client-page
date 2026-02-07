# 🧭 Appointments Dashboard – Angular Client

A fully responsive **Angular web application** for managing appointments, viewing history and invoices, and handling user profiles — designed with clean component-based architecture and service-driven state management.

---

## 🚀 Features

<img width="1905" height="912" alt="Screenshot 2026-02-07 194617" src="https://github.com/user-attachments/assets/9114c62f-9ede-4d72-bdae-f037abff329d" />

### 🔹 Dashboard

* Displays a quick overview of appointments and activity.
* Dynamically updates using the **DashboardService**.

### 🔹 Book New Appointment

* Interactive booking form.
* Integrated validation and submission feedback.
* Connected to backend via a dedicated **BookNewService**.

### 🔹 History & Invoices

* Lists all previous services in a responsive table and mobile-friendly card layout.
* Supports “View Invoice” popups and status badges.
* Built for smooth scrolling and adaptive UX.

### 🔹 Forms & Profile Pages

* Modular routes for user profile editing and dynamic forms.
* Uses **LayoutService** to automatically update sidebar focus and page titles.

---

## 🧱 Architecture

This project uses a **scalable component-service structure**:

```
src/
 ├─ app/
 │   ├─ components/
 │   │   ├─ header/
 │   │   ├─ sidebar/
 │   │   ├─ layout/
 |   |   ├─ action-banner/
 |   |   ├─ invoice/
 │   │   └─ appointment-card/
 │   ├─ pages/
 │   │   ├─ dashboard/
 │   │   ├─ book-new/
 │   │   ├─ history/
 │   │   ├─ forms/
 │   │   └─ profile/
 │   └─ models/
 │       └─ interfaces.interface.ts
 ├─ styles.css
 ├─ index.html
 └─ main.ts
```

Each page has its own `.service.ts` file, making state management modular and testable.
Global layout behavior (like sidebar visibility and routing) is controlled by `LayoutService`.

---

## 💡 Core Concepts

* **Standalone Components**: Built with Angular’s latest standalone APIs.
* **Reactive Services**: All components communicate through Angular services instead of input/output spaghetti.
* **Responsive Design**: Optimized with flexible grids and media queries down to 320px.
* **Router Animations**: Smooth transitions between routes via Angular animations.
* **Separation of Concerns**: Each page, component, and service has a single responsibility.

---

## 🛠️ Tech Stack

| Tool                            | Purpose                             |
| ------------------------------- | ----------------------------------- |
| **Angular**                     | Front-end framework                 |
| **TypeScript**                  | Type-safe development               |
| **HTML5 / CSS3 (Flex, Grid)**   | Layout and styling                  |
| **Font Awesome**                | Iconography                         |
| **RxJS & Dependency Injection** | Reactive state and event management |
| **Angular Animations**          | Page transition effects             |

---

## 📱 Responsive Layout

* **Desktop:** Sidebar navigation, dynamic dashboard cards, rich tables.
* **Tablet:** Compact layout with hidden sidebar toggle.
* **Mobile:** Card-based lists for history and appointments, collapsible sidebar.

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the app

```bash
ng serve
```

Then open your browser at:
👉 **http://localhost:4200**

---

## 🧩 Optional Build Commands

```bash
# Build for production
ng build --configuration production

# Run unit tests
ng test
```

---

## 🎨 UI Highlights

* Modern minimalist design.
* Smooth hover effects and soft shadows.
* Light theme with accent blues for clarity and focus.
* Adaptive typography for mobile readability.

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to improve.

---

## 🧑‍💻 Author

**Marven Eid**
Full Stack Developer | marveneid1@gmail.com
marven-portfolio.netlify.app
---
