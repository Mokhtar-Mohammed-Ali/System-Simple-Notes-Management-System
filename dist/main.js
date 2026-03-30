"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        if (age >= 13 && age <= 80) {
            this.age = age;
        }
        else {
            throw new Error("Age must be between 13 and 80");
        }
    }
    displayDetails() {
        console.log(`User: ${this.name}, Email: ${this.email}, Age: ${this.age}`);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    deleteUser(user) {
        console.log(`User with ID ${user.id} has been deleted by Admin ${this.name}`);
    }
}
class Note {
    id;
    title;
    content;
    isFavorite;
    constructor(id, title, content, isFavorite = false) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.isFavorite = isFavorite;
    }
    displayNote() {
        console.log(`Note: [${this.title}] - Favorite: ${this.isFavorite}`);
    }
}
class NoteBook {
    notes = [];
    addNote(id, title, content, isFavorite) {
        const newNote = new Note(id, title, content, isFavorite);
        this.notes.push(newNote);
    }
    listNotes() {
        this.notes.forEach((note) => note.displayNote());
    }
}
class UserAccount extends User {
    notebooks = [];
    addNoteBook(notebook) {
        this.notebooks.push(notebook);
    }
}
class NoteLink {
    user;
    note;
    constructor(user, note) {
        this.user = user;
        this.note = note;
    }
}
class Storage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getAllItems() {
        return this.data;
    }
}
