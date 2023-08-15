const blogContainer = document.getElementById('blogContainer');

// Sample blog data
const blogs = [
    {
        title: 'My First Blog',
        content: 'This is the content of my first blog...'
    },
    {
        title: 'Another Blog Post',
        content: 'Here is another exciting blog post...'
    }
];

// Function to render blogs
function renderBlogs() {
    blogContainer.innerHTML = '';

    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        
        const title = document.createElement('h2');
        title.textContent = blog.title;
        
        const content = document.createElement('p');
        content.textContent = blog.content;
        
        blogCard.appendChild(title);
        blogCard.appendChild(content);
        
        blogContainer.appendChild(blogCard);
    });
}

// Call the function to render initial blogs
renderBlogs();
