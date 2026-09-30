import bcrypt from 'bcryptjs';
export function seed(db){ const insert=db.prepare('INSERT OR IGNORE INTO users(name,password_hash) VALUES(?,?)'); for(const [name,password] of [['Lorena','12345678'],['Ana Clara','87654321'],['Júlia','24682468']]) insert.run(name,bcrypt.hashSync(password,10)); }
