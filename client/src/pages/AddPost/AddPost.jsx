import React, { useState } from 'react'
import { Button, Heading, Input, Select } from "../../components";
import './add-post.scss'

const AddPost = () => {
   const [category, setCategory] = useState()
   const [files, setFiles] = useState([])
   const [data, setData] = useState({
      title: "",
      content: "",
   });
   const handleChange = (e) => {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
   }


   const handleChangeFiles = (e) => {
      const newFiles = [...e.target.files];

      if (newFiles.length > 0) {
         setFiles([...files, ...newFiles]);
      }
   };
   console.log(files);

   const handleRemoveImage = (idx) => {
      const newImages = [...files];
      newImages.splice(idx, 1);

      setFiles(newImages);
   };

   const onSubmit = (e) => {
      e.preventDefault();

      const newData = {
         title: data.title,
         content: data.content,
         category: category,
      };

      const { title, content, category } = newData

      if ((!title && !content && !category) || files.length === 0) return

   };

   return (
      <div className='add-post'>
         <Heading>Добавить пост</Heading>
         <form onSubmit={onSubmit}>
            <div className="add-post_file">
               <label htmlFor="file">
                  <input
                     type="file"
                     multiple
                     id='file'
                     onChange={handleChangeFiles}
                     hidden
                  />
                  <div>
                     <div></div>
                     <span className='fs-14'>Выберите файл(ы)</span>
                  </div>

               </label>
            </div>


            {files.length > 0 && (
               <div className="file_images">
                  {files.map((file, index) => (


                     <div key={index}>
                        <img src={URL.createObjectURL(file)} alt="photos" />
                        <span onClick={() => handleRemoveImage(index)}>&times;</span>
                     </div>
                  ))}
               </div>
            )}


            <Input
               value={data.title}
               name="title"
               placeholder="Введите название поста"
               required
               onChange={handleChange}
            />
            <Select
               value=''
               required
               select={category}
               setSelect={setCategory}
            />
            <Input
               value={data.content}
               textarea
               name="content"
               placeholder="Введите описание поста"
               required
               onChange={handleChange}
            />
            <Button fullWidth type="submit">Добавить</Button>
         </form>
      </div>
   )
}

export default AddPost