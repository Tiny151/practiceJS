/**
 * Creates an HTML hyperlink with the given URL and display name.
 */
function createLink(url, displayName) {
    return `<a href="${url}">${displayName}</a>`;
}

// Sample usage
const link1 = createLink('https://google.com', 'Search');
console.log(link1); // <a href="https://google.com">Search</a>

const link2 = createLink('https://fullstack.edu.vn', 'F8');
console.log(link2); // <a href="https://fullstack.edu.vn">F8</a>

