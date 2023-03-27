import Link from 'next/link'
import Text from '../components/text'

let contacts = [
    {
        id: 0,
        name: 'sunny',
        picture: 'contact-pictures/sunny.png',
        info: {
            'Phone': <Text style = 'contactInfoData'>{'(973) 666 0621'}</Text>,
            'E-Mail': <Text style = 'contactInfoData'>sunnymakespromises@gmail.com</Text>,
            'Education':
                <>
                    <Text style = 'contactInfoData'>B.A. in <b>Computer Science</b></Text>
                    <Text style = 'contactInfoData'>Expected in <b>May 2024</b></Text>
                    <Text style = 'contactInfoData'>Rutgers University- New Brunswick, NJ</Text>
                </>,
            'Relevant Courses':
                <>
                    <Text style = 'contactInfoData'>Intro to Computer Science</Text>
                    <Text style = 'contactInfoData'>Data Structures</Text>
                    <Text style = 'contactInfoData'>Computer Architecture</Text>
                    <Text style = 'contactInfoData'>Software Methodology</Text>
                    <Text style = 'contactInfoData'>Principles of Information & Data Management</Text>
                    <Text style = 'contactInfoData'>Intro to Data Science</Text>
                    <Text style = 'contactInfoData'>Principles of Programming Languages</Text>
                </>,
            'Languages/Tools':
                <>
                    <Text style = 'contactInfoData'>Javascript/JQuery/React</Text>
                    <Text style = 'contactInfoData'>HTML/CSS</Text>
                    <Text style = 'contactInfoData'>PHP/MYSQL</Text>
                    <Text style = 'contactInfoData'>Java/JavaFX</Text>
                    <Text style = 'contactInfoData'>Swift/SwiftUI</Text>
                    <Text style = 'contactInfoData'>C#/Unity</Text>
                    <Text style = 'contactInfoData'>Adobe Programs</Text>
                    <Text style = 'contactInfoData'>Blender</Text>
                </>,
            'Experience':
                <>
                    <Text style = 'contactInfoData'>Self-taught in HTML/CSS/Javascript, as well as JSX using <b>ReactJS</b> frameworks.</Text>
                    <Text style = 'contactInfoData'>Experienced in <b>back-end web development</b> as well, using PHP and MySQL.</Text>
                    <Text style = 'contactInfoData'>Knowledgable in <b>source control</b> and Git/Github.</Text>
                    <Text style = 'contactInfoData'>Self-taught in <b>software development</b> using Swift and SwiftUI.</Text>
                    <Text style = 'contactInfoData'>Experience <b>working with clients</b> to create custom websites.</Text>
                </>,
            // 'Skills':
            //     <>
            //         <Text style = 'contactInfoData'>Quick learner</Text>
            //         <Text style = 'contactInfoData'>Self-starter</Text>
            //         <Text style = 'contactInfoData'>Detail-Oriented</Text>
            //         <Text style = 'contactInfoData'>Driven and passionate</Text>
            //         <Text style = 'contactInfoData'>Flexible</Text>
            //         <Text style = 'contactInfoData'>Dedicated to elegant, readable code</Text>
            //         <Text style = 'contactInfoData'>Pleasant and cooperative with others</Text>
            //     </>
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
    // {
    //     title: 'References',
    //     contacts: [1, 2]
    // }
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