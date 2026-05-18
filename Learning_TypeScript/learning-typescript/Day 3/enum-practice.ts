enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

const currentRole: UserRole = UserRole.Admin;

function getPermission(role: UserRole) {
  if (role === UserRole.Admin) {
    return `You are in ${UserRole.Admin} role.`;
  }
  if (role === UserRole.Editor) {
    return `You are in ${UserRole.Editor} role.`;
  }

  return `You are in ${UserRole.Viewer} role.`;
}

// console.log(getPermission(currentRole));


enum Directions {
    Up,
    Right,
    Down,
    Left,
}
console.log(Directions.Down);