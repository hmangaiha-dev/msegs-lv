<template>
 
    <div class=""  style="overflow:scroll;height:120vh;background:white">
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col">
                <form @submit.prevent="updateProject">
                    <!-- <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="project.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="project.detail">
                    </div> -->

                    <input
                        type="text"
                        name="title"
                        class="form-control"
                        id="title"
                        placeholder="Enter Post Title"
                        v-model="project.title"
                    />

                    <input
                        type="text"
                        name="subtitle"
                        class="form-control"
                        placeholder="Subtitle"
                        v-model="project.subtitle"
                    />
                    <input
                        type="text"
                        name="client"
                        class="form-control"
                        placeholder="Client"
                        v-model="project.client"
                    />
                    <input
                        type="text"
                        name="hostedat"
                        class="form-control"
                        placeholder="Hosted at"
                        v-model="project.hostedat"
                    />
                    <input
                        type="text"
                        name="developedby"
                        class="form-control"
                        placeholder="Develoepd by"
                        v-model="project.developedby"
                    />
                    <input
                        type="text"
                        name="goals"
                        class="form-control"
                        placeholder="Goals"
                        v-model="project.goals"
                    />
                     <input
                                type="text"
                                name="date"
                                class="form-control"
                                placeholder="Date"
                                v-model="project.date"
                            />


                    <!-- <textarea type="text" name="contents" class="form-control" v-model="contents"></textarea>
             -->
                    <vue-editor v-model="project.contents" />

<!-- <h2>Preview</h2><span v-html="project.contents"></span> -->
                    <input
                        type="file"
                        class="form-control"
                        v-on:change="onChange"
                    />
  <input  type="file"
                                class="form-control"
                                v-on:change="onChange2"
                            />
                    <!-- <button type="submit" class="btn btn-primary">
                        Update
                    </button> -->

                    <div style="margin:auto;text-align:center">
                   <button type="submit" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"> Save Changes</button>
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
            project: {},
        };
    },
    created() {
        this.axios.get(`/api/projects/${this.$route.params.id}`).then((res) => {
            this.project = res.data;
        });
    },
    methods: {
        updateProject() {
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
                        let data = new FormData();
            data.append("title", this.project.title);
            data.append("subtitle", this.project.subtitle);
            data.append("contents", this.project.contents);
            data.append("client", this.project.client);
            data.append("hostedat", this.project.hostedat);
            data.append("developedby", this.project.developedby);
            data.append("goals", this.project.goals);
            data.append("date", this.project.date);
            data.append("_method",'patch')


            data.append("file", this.project.file);
            data.append("bannerfile", this.project.bannerfile);

            this.axios
                .post(`/api/projects/${this.$route.params.id}`,data)
                .then((res) => {
                    return console.log('res',res.data)
                    // this.$router.push({ name: "home" });
                })
        },
        onChange(e) {
            this.project.file = e.target.files[0];
        },
          onChange2(f) {
            this.project.bannerfile = f.target.files[0];
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
</style>