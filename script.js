const stories = [
    {
        id: 1,
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        user: 'user1'
    },
    {
        id: 2,
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        user: 'user2'
    },
    {
        id: 3,
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        user: 'user3'
    },
    {
        id: 4,
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        user: 'user4'
    },
    {
        id: 5,
        image: 'https://randomuser.me/api/portraits/women/5.jpg',
        user: 'user5'
    }
];

const storiesContainer = document.getElementById('storiesContainer');
const storyViewer = document.getElementById('storyViewer');
const storyImage = document.getElementById('storyImage');
const progress = document.getElementById('progress');
const closeBtn = document.getElementById('closeBtn');
let currentIndex = 0;
let progressInterval;