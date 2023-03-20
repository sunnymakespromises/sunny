import _ from 'lodash'

let posts = [
    {
        id: 0,
        title: 'First Post',
        date: new Date(2023, 2, 1),
        markdown: 'Hello! This is sunny :)'
    },
    {
        id: 1,
        title: 'Progress????',
        date: new Date(2023, 2, 2),
        markdown: 'Hello! This is sunny :)'
    },
    {
        id: 2,
        title: 'Progress????',
        date: new Date(2023, 3, 2),
        markdown: 'Hello! This is sunny :)'
    }
]

const getPost = (id) => {
    return posts[id]
}

const getPostGroups = () => {
    let groups = _.groupBy(posts, (post) => {
        let month = post.date.toLocaleString('en-US', { month: 'long' })
        let year = post.date.getFullYear().toString()
        return month + ' ' + year
    })
    let postGroups = []
    for (let key of Object.keys(groups)) {
        let group = {
            title: key,
            posts: groups[key]
        }
        postGroups.push(group)
    }
    return postGroups
}

export { getPost, getPostGroups }