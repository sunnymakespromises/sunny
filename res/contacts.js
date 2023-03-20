import Link from 'next/link'
import Text from '../components/text'

let contacts = [
    {
        id: 0,
        name: 'sunny',
        picture: 'contact-pictures/sunny.png',
        info: {
            'address': 
                <>
                    <Text style = 'contactInfoData'>1838 BPO Way</Text>
                    <Text style = 'contactInfoData'>Piscataway NJ 08854</Text>
                    <Text style = 'contactInfoData'>United States</Text>
                </>
            ,
            'home': <Text style = 'contactInfoData'>{'(973) 666 0621'}</Text>,
            'e-mail': <Text style = 'contactInfoData'>sunnymakespromises@gmail.com</Text>,
            'LinkedIn':
                <Link href = {'https://linkedin.com/in/marquis-livingston-0b510815b/'}>
                    <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                        linkedin.com/in/marquis-livingston-0b510815b/
                    </Text>
                </Link>,
            'GitHub': 
                <Link href = {'https://linkedin.com/in/marquis-livingston-0b510815b/'}>
                    <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                        github.com/sunnymakespromises
                    </Text>
                </Link>
        }
    },
    {
        id: 1,
        name: 'sunny',
        picture: 'contact-pictures/sunny.png',
        info: {
            'address': 
                <>
                    <Text style = 'contactInfoData'>1838 BPO Way</Text>
                    <Text style = 'contactInfoData'>Piscataway NJ 08854</Text>
                    <Text style = 'contactInfoData'>United States</Text>
                </>
            ,
            'home': <Text style = 'contactInfoData'>{'(973) 666 0621'}</Text>,
            'e-mail': <Text style = 'contactInfoData'>sunnymakespromises@gmail.com</Text>,
            'LinkedIn':
                <Link href = {'https://linkedin.com/in/marquis-livingston-0b510815b/'}>
                    <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                        linkedin.com/in/marquis-livingston-0b510815b/
                    </Text>
                </Link>,
            'GitHub': 
                <Link href = {'https://linkedin.com/in/marquis-livingston-0b510815b/'}>
                    <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                        github.com/sunnymakespromises
                    </Text>
                </Link>
        }
    },
    {
        id: 2,
        name: 'sunny',
        picture: 'contact-pictures/sunny.png',
        info: {
            'address': 
                <>
                    <Text style = 'contactInfoData'>1838 BPO Way</Text>
                    <Text style = 'contactInfoData'>Piscataway NJ 08854</Text>
                    <Text style = 'contactInfoData'>United States</Text>
                </>
            ,
            'home': <Text style = 'contactInfoData'>{'(973) 666 0621'}</Text>,
            'e-mail': <Text style = 'contactInfoData'>sunnymakespromises@gmail.com</Text>,
            'LinkedIn':
                <Link href = {'https://linkedin.com/in/marquis-livingston-0b510815b/'}>
                    <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                        linkedin.com/in/marquis-livingston-0b510815b/
                    </Text>
                </Link>,
            'GitHub': 
                <Link href = {'https://linkedin.com/in/marquis-livingston-0b510815b/'}>
                    <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                        github.com/sunnymakespromises
                    </Text>
                </Link>
        }
    }
]

let contactGroups = [
    {
        title: 'My Card',
        contacts: [0]
    },
    {
        title: 'References',
        contacts: [1, 2]
    }
]

const getContactGroups = () => {
    let contactGroupsCopy = JSON.parse(JSON.stringify(contactGroups))
    for (let group of contactGroupsCopy) {
        for (let i = 0; i < group.contacts.length; i++) {
            group.contacts[i] = contacts[group.contacts[i]]
        }
    }
    return contactGroupsCopy
}

const getContact = (id) => {
    return contacts[id]
}

export { getContact, getContactGroups }