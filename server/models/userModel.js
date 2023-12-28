import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
     username: {
       type: String,
       required: true,
       trim: true,
       maxlength: 25,
       unique: true,
     },
     password: {
       type: String,
       required: true,
     },
     avatar: {
       type: String,
       default:
         "https://avatars.mds.yandex.net/i?id=56a9643f7f841df7d6ecd033bb47b54b94114051-8981113-images-thumbs&n=13",
     },
     role: {
       type: String,
       default: "user",
     },
     gender: {
       type: String,
       default: "male",
     },
     mobile: {
       type: String,
       default: "",
     },
     address: {
       type: String,
       default: "",
     },
     story: {
       type: String,
       default: "",
       maxlength: 200,
     },
     website: {
       type: String,
       default: "",
     },
     followers: [
       {
         type: mongoose.Types.ObjectId,
         ref: "user",
       },
     ],
     following: [
       {
         type: mongoose.Types.ObjectId,
         ref: "user",
       },
     ],
     saved: [
       {
         type: mongoose.Types.ObjectId,
         ref: "user",
       },
     ],
   },
   {
     timestamps: true,
   }
 );
 
 export default mongoose.model("user", userSchema);