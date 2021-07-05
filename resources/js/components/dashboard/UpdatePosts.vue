<template>
 
    <div class=""  style="overflow:scroll;height:120vh;background:white;margin:0.5rem">
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col">
                <form @submit.prevent="updateProject">
                    <!-- <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="post.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="post.detail">
                    </div> -->

                    <input
                        type="text"
                        name="title"
                        class="form-control"
                        id="title"
                        placeholder="Enter Post Title"
                        v-model="post.title"
                    />

                   
                     <input
                                type="date"
                                name="date"
                                class="form-control"
                                placeholder="Date"
                                v-model="post.date"
                            />


                    <!-- <textarea type="text" name="contents" class="form-control" v-model="contents"></textarea>
             -->
                    <vue-editor v-model="post.contents" />

<!-- <h2>Preview</h2><span v-html="post.contents"></span> -->
                    <input
                        type="file"
                        class="form-control"
                        v-on:change="onChange"
                    />
 <div style="display:flex;flex-direction:row;justify-content:center;align-items:center">
<span for="published" >Publish </span>
               <input
                                type="checkbox"
                                name="published"
                                class="checkbox-control"
                                placeholder="published"
                                v-model="published"
                            /></div>
                    <!-- <button type="submit" class="btn btn-primary">
                        Update
                    </button> -->

                    <div style="margin:auto;text-align:center">
                   <button @click.prevent="updateProject" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"> Save Changes</button>
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
            post: {},
        };
    },
    created() {
        this.axios.get(`/api/posts/${this.$route.params.id}`).then((res) => {
            this.post = res.data;
        });
    },
    methods: {
        updateProject() {
            this.axios
                .patch(`/api/posts/${this.$route.params.id}`, this.post)
                .then((res) => {
                    // this.$router.push({ name: "home" });
                    console.log(res);
                });
        },
        onChange(e) {
            this.post.file = e.target.files[0];
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