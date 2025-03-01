const stories = [
    {
        id: 1,
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        storyImage: 'https://th.bing.com/th/id/R.1ba9999686ddfbdba7fbf86157c39469?rik=8qE3fcnPPRcCqg&pid=ImgRaw&r=0',
        user: 'user1'
    },
    {
        id: 2,
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        storyImage: 'https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_1440_2560.jpg',
        user: 'user2'
    },
    {
        id: 3,
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        storyImage: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
        user: 'user3'
    },
    {
        id: 4,
        image: 'https://randomuser.me/api/portraits/women/15.jpg',
        storyImage: 'https://th.bing.com/th/id/R.6a57353462ce99eb1cf49ffdbfa9c04f?rik=4FAvad2ZCVMy0Q&pid=ImgRaw&r=0',
        user: 'user4'
    },
    {
        id: 5,
        image: 'https://randomuser.me/api/portraits/women/7.jpg',
        storyImage: 'https://images.pexels.com/videos/856973/free-video-856973.jpg',
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

stories.forEach((story, index) => {
    const avatar = document.createElement('img');
    avatar.src = story.image;
    avatar.classList.add('story-avatar');
    avatar.addEventListener('click', () => openStory(index));
    storiesContainer.appendChild(avatar);
});

const openStory = (index) => {
    currentIndex = index;
    storyImage.src = stories[currentIndex].storyImage;
    storyViewer.style.visibility = 'visible';
    storyViewer.style.opacity = 1;
    startProgress();
};

const startProgress = () => {};