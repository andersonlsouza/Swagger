import fs from 'fs';

const path = "./src/repositories/users.json";

export const listUsers = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    res.send(data);
    return data;
}