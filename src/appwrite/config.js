import conf from "../conf/conf.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;//storages
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl);
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //creater post
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//unique id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            throw error;
        }
    }

    //update post
    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//unique id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            throw error;
        }
    }

    //delete post
    async deletePost(slug){
        try{
            return await this.databases.deleteDocumentDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        }catch(error){
            throw error;
            return false;
        }
    }

    //get signle post /list
    async getPost(slug){
        try{
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            )
        }catch (error){
            throw error;
            return false;
        }
    }

    //get all post
    async getPosts(queries = [Query.equal("status",
    "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }catch(error){
            throw error;
            return false;
        }
    }

    //file upload services
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            throw error;
            return false;
        }
    }

    //delete file
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }catch(error){
            throw error;
            return false;
        }
    }

    //file preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()
export default service;