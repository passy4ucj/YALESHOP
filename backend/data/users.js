import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Pascal Ojinnaka',
        email: 'pascal@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'John Ojinnaka',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users