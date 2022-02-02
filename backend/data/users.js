import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mickey Mouse',
        email: 'mickey@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Donald Duck',
        email: 'donald@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users