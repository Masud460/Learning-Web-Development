const lang: string[] = ["JavaScript", "Python", "Rust"];
const laptop: [string, number] = ["Mac book pro", 1599.99];

enum OrderStatus {
  pending = "Pending",
  shipped = "Shipped",
  delivered = "Delivered",
}

const currentStatus: OrderStatus = OrderStatus.shipped;

// console.log(lang);
// console.log(laptop);
// console.log(currentStatus);

enum UserRole {
  admin = "Admin",
  modarator = "Modarator",
  member = "Member",
}

let currentRole: UserRole = UserRole.admin;
// console.log(admin);

enum UserAge {
  ataullah = 20,
  sayed = 22,
  kamrul = 20,
}
const kamrulAge: UserAge = UserAge.kamrul;