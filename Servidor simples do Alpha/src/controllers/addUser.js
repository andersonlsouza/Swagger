import fs from 'fs';
import { v4 as uuid } from 'uuid';

const path = "./src/repositories/users.json";

export const addUser = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));

    const form = req.body;

    if (typeof (form.name) !== "string") {
        res.status(500).send({ error: "Dado informado incorretamente" });
        return;
    }

    const newUser = {
        id: uuid(),
        name: form.name,
        email: form.email,
    }
    data.push(newUser);

    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (error) {
        res.status(500).send({ error: "Erro na escrita do banco de data" });
        return;
    }

    res.send(newUser);

    return newUser;
}