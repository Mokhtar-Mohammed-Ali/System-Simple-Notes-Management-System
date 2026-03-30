// 1. Base Class - User
class User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  age: number;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    if (age >= 13 && age <= 80) {
      this.age = age;
    } else {
      throw new Error("Age must be between 13 and 80");
    }
  }

  displayDetails(): void {
    console.log(`User: ${this.name}, Email: ${this.email}, Age: ${this.age}`);
  }
}

// 2. Inheritance - Admin User
class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    super(id, name, email, password, phone, age);
  }

  deleteUser(user: User): void {
    console.log(
      `User with ID ${user.id} has been deleted by Admin ${this.name}`,
    );
  }
}

// 3. Class - Note
class Note {
  id: number;
  title: string;
  content: string;
  isFavorite: boolean;

  constructor(
    id: number,
    title: string,
    content: string,
    isFavorite: boolean = false,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.isFavorite = isFavorite;
  }

  displayNote(): void {
    console.log(`Note: [${this.title}] - Favorite: ${this.isFavorite}`);
  }
}

// 4. Composition - NoteBook and Notes
class NoteBook {
  notes: Note[] = [];

  addNote(
    id: number,
    title: string,
    content: string,
    isFavorite: boolean,
  ): void {
    const newNote = new Note(id, title, content, isFavorite);
    this.notes.push(newNote);
  }

  listNotes(): void {
    this.notes.forEach((note) => note.displayNote());
  }
}

// 5. Aggregation - User and Notebook
class UserAccount extends User {
  notebooks: NoteBook[] = [];

  addNoteBook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }
}

// 6. Association - Note and User
class NoteLink {
  user: User;
  note: Note;

  constructor(user: User, note: Note) {
    this.user = user;
    this.note = note;
  }
}

// 7. Generics - Data Storage
class Storage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getAllItems(): T[] {
    return this.data;
  }
}
