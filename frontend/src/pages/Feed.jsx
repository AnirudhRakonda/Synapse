import React, { useState } from 'react';

const Card = ({ icon, title, tags, date, readTime, image, likes, comments, shares }) => (
    <div className="bg-gray-800 rounded-lg p-6 m-4 w-full sm:w-80">
        <div className="flex items-center mb-4">
            <div className="bg-purple-600 p-3 rounded-full">
                <i className={`fas ${icon} text-white`}></i>
            </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex flex-wrap mb-2">
            {tags.map(tag => (
                <span key={tag} className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-xs mr-2 mb-2">#{tag}</span>
            ))}
        </div>
        <div className="text-gray-400 text-sm mb-4">{date} • {readTime}</div>
        <img src={image} alt="Card image" className="rounded-lg mb-4 w-full" />
        <div className="flex justify-between text-gray-400 text-sm">
            <div className="flex items-center">
                <i className="fas fa-heart mr-1"></i> {likes}
            </div>
            <div className="flex items-center">
                <i className="fas fa-comment mr-1"></i> {comments}
            </div>
            <div className="flex items-center">
                <i className="fas fa-share mr-1"></i> {shares}
            </div>
        </div>
    </div>
);

const Feed = () => {
    const [initialPosts] = useState([
        {
            icon: 'fa-compass',
            title: '25 Reasons Why Financial Enterprise Companies Use Java',
            tags: ['java', 'backend', 'fintech'],
            date: 'Nov 04',
            readTime: '6m read time',
            image: 'https://app.daily.dev/posts/1500-free-html-website-templates-on-htmlrev-5z17qqtkd',
            likes: '9',
            comments: '0',
            shares: '0'
        },
        {
            icon: 'fa-compass',
            title: 'How Senior Software Engineers Document Their Project',
            tags: ['career', 'architecture', '+2'],
            date: 'Nov 01',
            readTime: '4m read time',
            image: 'https://app.daily.dev/posts/python-3-13-cool-new-features-for-you-to-try-real-python-9pdsakjwv',
            likes: '27',
            comments: '0',
            shares: '0'
        },
        {
            icon: 'fa-compass',
            title: 'Explore tags and sources like never before and use them to your advantage',
            tags: ['career', 'architecture', '+2'],
            date: 'Nov 01',
            readTime: '',
            image: 'https://app.daily.dev/posts/optimizing-node-js-performance-tips-and-tricks-zrt2huurn',
            likes: '0',
            comments: '0',
            shares: '0'
        },
        {
            icon: 'fa-compass',
            title: 'How Senior Software Engineers Document Their Project',
            tags: ['career', 'architecture', '+2'],
            date: 'Nov 01',
            readTime: '4m read time',
            image: 'https://app.daily.dev/posts/auth-js-adoption-guide-overview-examples-and-alternatives-o9zxm5rtk',
            likes: '27',
            comments: '0',
            shares: '0'
        },
        {
            icon: 'fa-compass',
            title: 'How Senior Software Engineers Document Their Project',
            tags: ['career', 'architecture', '+2'],
            date: 'Nov 01',
            readTime: '4m read time',
            image: 'https://app.daily.dev/posts/shd6kubet',
            likes: '27',
            comments: '0',
            shares: '0'
        },
        {
            icon: 'fa-compass',
            title: 'How Senior Software Engineers Document Their Project',
            tags: ['career', 'architecture', '+2'],
            date: 'Nov 01',
            readTime: '4m read time',
            image: 'https://api.daily.dev/r/kjXPT0WvS',
            likes: '27',
            comments: '0',
            shares: '0'
        }
    ]);

    const [myPosts, setMyPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({
        icon: 'fa-compass',
        title: '',
        tags: '',
        date: '',
        readTime: '',
        image: 'https://placehold.co/300x200',
        likes: '0',
        comments: '0',
        shares: '0'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const postTags = newPost.tags.split(',').map(tag => tag.trim());
        setMyPosts([...myPosts, { ...newPost, tags: postTags }]);
        setShowForm(false);
        setNewPost({
            icon: 'fa-compass',
            title: '',
            tags: '',
            date: '',
            readTime: '',
            image: 'https://placehold.co/300x200',
            likes: '0',
            comments: '0',
            shares: '0'
        });
    };

    return (
        <div className="flex flex-col items-center bg-black text-white py-12">
            <div className="flex justify-between items-center w-full max-w-4xl px-6 mb-8">
                <h1 className="text-3xl font-bold">My Feed</h1>
                <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
                    Create New Post
                </button>
            </div>

            {/* My Feed Section */}
            <div className="w-full max-w-6xl px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {initialPosts.map((post, index) => (
                        <Card key={index} {...post} />
                    ))}
                </div>
            </div>

            {/* My Posts Section */}
            {myPosts.length > 0 && (
                <div className="w-full max-w-4xl px-6 mt-12">
                    <h2 className="text-2xl font-semibold mb-8">My Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {myPosts.map((post, index) => (
                            <Card key={index} {...post} />
                        ))}
                    </div>
                </div>
            )}

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={newPost.title}
                                onChange={handleInputChange}
                                placeholder="Title"
                                className="w-full p-4 mb-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                            <input
                                type="text"
                                name="tags"
                                value={newPost.tags}
                                onChange={handleInputChange}
                                placeholder="Tags (comma-separated)"
                                className="w-full p-4 mb-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="text"
                                name="date"
                                value={newPost.date}
                                onChange={handleInputChange}
                                placeholder="Date (e.g., Nov 04)"
                                className="w-full p-4 mb-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="text"
                                name="readTime"
                                value={newPost.readTime}
                                onChange={handleInputChange}
                                placeholder="Read time (e.g., 5m read time)"
                                className="w-full p-4 mb-6 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="bg-red-600 text-white px-6 py-3 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                                    Add Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feed;
