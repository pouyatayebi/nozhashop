'use server'

import {db} from "@/server"



export async function getPosts() {
    const posts=db.query.posts.findMany()
    if(!posts){
        return {error:"no posts found"}
    }
    return {success:posts}
}