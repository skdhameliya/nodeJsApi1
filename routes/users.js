import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    // {
    //     "firstName" : "Smit",
    //     "lastName" : "Dhameliya",
    //     "age" : 22
    // },
    // {
    //     "firstName" : "Dhruvin",
    //     "lastName" : "Dhameliya",
    //     "age" : 15
    // }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/',(req, res) => {
    
    const newUser = req.body;
    const userUniqueId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const newUserWithUniqueId = { ...newUser, id: userUniqueId };

    users.push(newUserWithUniqueId);
    // console.log(newUserWithUniqueId.firstName + " is added to DB" +JSON.stringify(newUserWithUniqueId));
    res.send(`The following object is added to DB ${JSON.stringify(newUserWithUniqueId)}`);
});

// anything after /user  , this route will be called
// req.params means :id (parameters to the function)
router.get('/:id', (req, res) => {

    const { id } = req.params;
    const foundUser = users.find(user => user.id == id);
    res.send(`The following object is founded from the DB ${JSON.stringify(foundUser)}`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    // console.log("user with id "+id+" is deleted and the rest of the users are these.");
    res.send(users);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    const { firstName: newFirstName, lastName: newLastName, age: newAge, id: newId } = req.body;

    console.log(req.body);
    const user = users.find((user) => user.id == id);
    if(newFirstName){
        user.firstName = newFirstName;
    }
    if(newLastName){
        user.lastName = newLastName;
    }
    if(newAge){
        user.age = newAge;
    }
    if(newId){
        user.id = newId;
    }
    res.send(`user with userId ${id} is updated ${JSON.stringify(users)}`);
});

export default router;