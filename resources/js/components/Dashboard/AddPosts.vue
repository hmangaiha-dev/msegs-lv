<template>
    <!-- <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
    /> -->

  
        <div class=""  style="overflow:scroll;height:120vh;background:white">
                <div class="card" style="width:80vw">
                    <div class="card-header"><h1>ADD Posts</h1></div>

                    <div class="card-body">
                        <div v-if="success != ''" class="alert alert-success">
                            {{ success }}
                        </div>

                        <form
                            @submit="formSubmit"
                            enctype="multipart/form-data"
                        >
                            <input
                                type="text"
                                name="title"
                                class="form-control"
                                id="title"
                                placeholder="Enter Post Title"
                                v-model="title"
                            />

                           
                             <input
                                type="date"
                                name="date"
                                class="form-control"
                                placeholder="Date"
                                v-model="date"
                            />
                             

                            <!-- <textarea type="text" name="contents" class="form-control" v-model="contents"></textarea>
             -->
                            <vue-editor v-model="contents" />

                            <!-- <input
                                type="file"
                                class="formfiles"
                                v-on:change="onChange"
                            /> -->
                            <!-- <input
                                type="file"
                                class="formfiles"
                                v-on:change="onChange2"
                            /> -->
<div class="flex justify-around">
                               <div class="max-w-md width-3">
                <label class="block text-sm font-medium text-gray-700 ">
                  Post photo
                </label>
                <div class="mt-1 flex justify-center px-3 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <!-- <input id="file-upload" name="file-upload" type="file" class="sr-only"  v-on:change="onChange"/> -->
                      <input
                                type="file"
                                class="formfiles"
                                v-on:change="onChange"
                            />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
        
                              
              </div>
                            <!-- <button class="btn btn-primary btn-block">
                                Add Project
                            </button> -->
                                  <div style="display:flex;flex-direction:row;justify-content:center;align-items:center">
<span for="published" >Publish </span>
               <input
                                type="checkbox"
                                name="published"
                                class="checkbox-control"
                                placeholder="published"
                                v-model="published"
                            /></div>
<hr style="opacity:10%"/>
                            <div style="margin:auto;text-align:center">
                   <button type="submit" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"> Post</button>
                </div>
                        </form>
                    </div>
                </div>
            </div>
  
</template>

<script>
import { VueEditor } from "vue3-editor";

export default {
    components: { VueEditor },

    data() {
        return {
            posts: [],
            name: "",
            title: "",
            contents: "",
            file: "",
            success: "",
            date:"",
            published:"",

          


        };
    },
    created() {
        this.axios.get("/api/posts/").then((response) => {
            console.log(response.data);
            this.posts = response.data;
        });
    },
    methods: {
      
        onChange(e) {
            this.file = e.target.files[0];
        },
      
        formSubmit(e) {
            e.preventDefault();
            let existingObj = this;

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };

            let data = new FormData();
            data.append("title", this.title);
            data.append("contents", this.contents);
       
            data.append("date", this.date);
            data.append("published", this.published);



            data.append("file", this.file);


            this.axios
                .post("/api/posts", data, config)
                .then(function (res) {
                    existingObj.success = res.data.success;
                })
                .catch(function (err) {
                    existingObj.output = err;
                });
        },
    },
};
</script>

<style lang="scss" scoped>

.card{
    height:220vh;
}

.card-header{
    font-size: 20px;
    text-align: center;
}
.form-control{
    border:1px solid rgba($color: #000000, $alpha: 0.3);
    border-radius: 6px;
    width:28rem;
    padding-left:6px;
    height:3rem;
    margin:1rem;
}
.checkbox-control{
    border:1px solid rgba($color: #000000, $alpha: 0.3);
    border-radius: 6px;
    width:2rem;
    // padding-left:6px;
    height:1rem;
    margin:1rem;
}
</style>