import bcrypt from "bcryptjs";

const saltRounds = 10;

export async function hashPassword(password: string) {
  const hashedPwd = await bcrypt.hash(password, saltRounds);

  return hashedPwd;
}

export async function comparePassword(password: string, hashedPwd: string) {
  const isMatch = await bcrypt.compare(password, hashedPwd);

  return isMatch ? true : false;
}
