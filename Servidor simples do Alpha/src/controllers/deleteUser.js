import fs from 'fs';

const path = "./src/repositories/users.json";

export const deleteUser = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    const idUser = req.params.id;

    const user = data.find((element) => element.id === idUser);
    const positionUser = data.indexOf(user);

    data.splice(positionUser, 1);

    fs.writeFileSync(path, JSON.stringify(data));

    res.send(user);

    return user;
}