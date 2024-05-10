import crypto from 'crypto';



function generateIV() {
  return crypto.randomBytes(16);
}

function encryptPassword(password: string, key: Buffer, iv: Buffer) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to decrypt a password using AES
function decryptPassword(encrypted: string, key: Buffer, iv: Buffer) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export { encryptPassword, decryptPassword,generateIV};