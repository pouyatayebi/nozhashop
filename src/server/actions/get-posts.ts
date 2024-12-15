'use server'

import {db} from "@/server"

import { posts } from "@/server/schema"

export async function getPosts() {
    const posts=db.query.posts.findMany()
    if(!posts){
        return {error:"no posts found"}
    }
    return {success:posts}
}