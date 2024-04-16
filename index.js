class UserProfileManager {
    constructor() {
      this.users = [];
      this.nextId = 1;
    }
  
    addUser(userInfo) {
      const id = this.nextId++;
      const user = { id, ...userInfo };
      this.users.push(user);
    }
  
    removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  
    updateUser(userId, newInfo) {
      const user = this.users.find(user => user.id === userId);
      if (user) {
        Object.assign(user, newInfo);
      }
    }
  
    findUserByName(name) {
      return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }
  
    getAllUsers() {
      return this.users;
    }
  }

  const profileManager = new UserProfileManager();
  profileManager.addUser({ name: "Alice", email: "alice@example.com" });
  profileManager.addUser({ name: "Bob", email: "bob@example.com" });
  console.log(profileManager.getAllUsers());
  profileManager.updateUser(1, { name: "Alicia" });
  profileManager.removeUser(2);
  console.log(profileManager.findUserByName("Ali"));
  