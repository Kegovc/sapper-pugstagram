import { writable } from 'svelte/store'

const likeCount=writable(0)

export {
    likeCount
}