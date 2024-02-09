import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {//class
    Client = new Client();//this work here client appwriteurl etc..
    account;

    constructor(){
    this.Client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);  
    this.account = new Account(this.client);
    }

    //make create account
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method for login after signup
                return this.login({email,password});//if user have accnt 
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    //make login
    async login({email,password}){
        try{
        return await this.account.createEmailSession
        }catch(error){
            throw error;
        }
    }

    //to check login or not
    async getCurrentUser () {
        try{
        return await this.account.get();
        }catch(error){
            throw error;
        }
        return null;
    }

    //logut user /delete session
    async logout(){
        try{
        await this.account.deleteSessions();
        }catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();//class to object

export default authService;//export object