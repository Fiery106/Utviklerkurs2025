<script setup>
const output = document.querySelector('#output')
const button = document.querySelector("#get-posts-button")
const form = document.querySelector("#add-post-form")

// Get post
async function showPosts() {
    try {
        const res = await fetch('http://localhost:8000/api/posts')
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await res.json()
        output.innerHTML = ""

        posts.forEach(post => {
            const postEl = document.createElement('div')
            postEl.textContent = post.title
            output.appendChild(postEl)
        });
    } catch (error) {
        console.error(error)
    }
}

// Add post
async function addPost(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const title = formData.get('title')

    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            throw new Error('Failed to add posts');
        }

        const newPost = await res.json()
        const postEl = document.createElement('div')
        postEl.textContent = post.title
        output.appendChild(postEl)

        showPosts()
    } catch (error) {
        console.error(error)
    }
}

button.addEventListener('click', showPosts)
form.addEventListener('submit', addPost)
</script>


<template>
    <button id="get-posts-button">
        Get posts
    </button>

    <form id="add-post-form">
        <label for="title">
            Title: 
        </label>
        
        <input type="text" id="title" name="title" /><br>
        
        <button type="submit">
            Submit
        </button>
    </form>

    <div id="output"></div>
</template>