import fs from 'fs';

const path = "./src/repositories/users.json";

export const editUser = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    const idUser = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    const user = data.find((element) => element.id === idUser);

    if (name !== undefined) {
        user.name = name;
    }

    if (email !== undefined) {
        user.email = email;
    }

    fs.writeFileSync(path, JSON.stringify(data));

    res.send(user);

    return user;
}