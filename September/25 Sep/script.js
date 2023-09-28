let users = [
    {
        id: 1,
        username: 'Sachin',
        password: 12345678,
        role: "Doctor"
    },
    {
        id: 2,
        username: 'Pujan',
        password: 87654321,
        role: "Patient"
    }
]
let body = {
    username: 'a',
    password: 12345678
}
let user = users.find(item => item.username == body.username && item.password == body.password);
console.log(user);