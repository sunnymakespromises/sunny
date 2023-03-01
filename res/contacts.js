let contacts = [
    {
        id: 0,
        name: 'sunny',
        picture: 'contact-pictures/sunny.png',
        info: {
            'address': '49 Raritan Rd.\nLinden NJ 07036\nUnited States',
            'home': '(973)-666-0621',
            'e-mail': 'sunnymakespromises@gmail.com',
            'LinkedIn': 'https://linkedin.com/in/marquis-livingston-0b510815b/',
            'GitHub': 'https://github.com/sunnymakespromises'
        }
    },
    {
        id: 1,
        name: 'sunny',
        picture: 'contact-pictures/sunny.png',
        info: {
            'address': '49 Raritan Rd.\nLinden NJ 07036\nUnited States',
            'home': '(973)-666-0621',
            'e-mail': 'sunnymakespromises@gmail.com',
            'LinkedIn': 'https://linkedin.com/in/marquis-livingston-0b510815b/',
            'GitHub': 'https://github.com/sunnymakespromises'
        }
    }
]

const getContact = (id) => {
    return contacts[id]
}

export default contacts
export { getContact }