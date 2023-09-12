fetch('http://localhost:3500/user', {
    method: 'POST',
    header: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 15254,
        name: 'John',
        jobTitle: 'Software Engineer'
    })
}).then(res => res.json()).then(data => res.end(data))