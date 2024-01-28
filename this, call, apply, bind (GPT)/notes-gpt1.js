// Задача: Вы разрабатываете систему управления заметками. 
// У вас есть объект NoteManager, который хранит заметки пользователей и 
// предоставляет методы для их создания, удаления и редактирования. 
// Вам необходимо реализовать функцию для поиска заметок по различным 
// критериям, таким как заголовок, содержание и дата создания. 
// Для удобства работы с критериями вы решаете использовать деструктурирующее присваивание внутри функции поиска.
 

// Объект, представляющий менеджер заметок
const NoteManager = {
  notes: [],

  // Метод для создания заметки
  createNote: function(note) {
    this.notes.push(note);
  },

  // Метод для удаления заметки
  deleteNote: function(id) {
    this.notes = this.notes.filter(note => note.id !== id);
  },

  // Метод для редактирования заметки
  editNote: function(id, updatedContent) {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      this.notes[index].content = updatedContent;
    }
  },

  // Функция для поиска заметок по критериям
  searchNotes: function({ title, content, createdAt }) {
    let result = this.notes;
    if (title) {
      result = result.filter(note => note.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (content) {
      result = result.filter(note => note.content.toLowerCase().includes(content.toLowerCase()));
    }
    if (createdAt) {
      result = result.filter(note => note.createdAt === createdAt);
    }
    return result;
  }
};

// Пример использования с деструктурирующим присваиванием

// Создание заметок
NoteManager.createNote({
  id: 1,
  title: "Shopping List",
  content: "1. Milk\n2. Bread\n3. Eggs",
  createdAt: "2024-01-28"
});

NoteManager.createNote({
  id: 2,
  title: "Meeting Notes",
  content: "Discuss project timelines.",
  createdAt: "2024-01-27"
});

// Поиск заметок по различным критериям
const searchCriteria = { content: "milk" };
const foundNotes = NoteManager.searchNotes(searchCriteria);
console.log(foundNotes);

// В этой задаче функция searchNotes принимает объект с критериями поиска для заметок. 
// С помощью деструктурирующего присваивания мы извлекаем из этого объекта критерии поиска 
// (например, заголовок, содержание и дата создания) и используем их для фильтрации списка заметок.