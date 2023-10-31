import fs from 'fs';

const path = "./src/repositories/users.json";

export const user = (req, res) => {
    const idUser = Number(req.params.id);
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    const user = data.find((element) => element.id === idUser);

    res.send(user);
    return user;
}