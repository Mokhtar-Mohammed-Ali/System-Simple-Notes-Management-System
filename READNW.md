# Assignment 13: Simple Notes Management System

This project is a TypeScript-based implementation of a **Simple Notes Management System**. It demonstrates core Object-Oriented Programming (OOP) principles, including Inheritance, Composition, Aggregation, Association, and Generics, along with a UML Class Diagram.

## 📁 Project Structure

The project is organized into logical components to ensure modularity and readability:

- **Classes:** Defines the core entities (`User`, `Admin`, `Note`, `NoteBook`).
- **Relationships:** Demonstrates how entities interact through different OOP patterns.
- **Generics:** A reusable data storage utility.
- **UML Diagram:** A visual representation of the system architecture.

---

## 🚀 Implementation Details

### Part A: TypeScript Programming

#### 1. Base Class - User
The `User` class serves as the foundation, containing basic profile information and a validation rule for age (13-80).

#### 2. Inheritance - Admin User
The `Admin` class extends `User`, gaining all its properties while adding specific functionality like `deleteUser()`.

#### 3. Class - Note
A simple entity class representing a single note with properties for title, content, and a "favorite" status.

#### 4. Composition - NoteBook and Notes
The `NoteBook` class manages a collection of `Note` objects. This is a **Composition** relationship; notes are created and managed within the notebook's lifecycle.

#### 5. Aggregation - User and NoteBook
Users can have multiple notebooks. This is an **Aggregation** relationship, meaning notebooks can exist independently of a specific user context if needed.

#### 6. Association - Note and User
A conceptual link between a `User` and a `Note` to track ownership or access.

#### 7. Generics - Data Storage
A generic `Storage<T>` class that can handle any data type (Users, Notes, etc.) providing methods to add, remove, and retrieve items.

---

## 📊 Part B: UML Class Diagram

The following diagram illustrates the relationships between the system's components:

### Relationships Identified:
* **Inheritance:** `Admin` ➔ `User`
* **Composition:** `NoteBook` ➔ `Note` (Filled Diamond)
* **Aggregation:** `User` ➔ `NoteBook` (Empty Diamond)
* **Association:** `User` ➔ `Note` (Simple Link)

---

## 🛠️ How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Install TypeScript globally:
   ```bash
   npm install -g typescript