<template>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
    />

    <div class="container">
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col-md-6">
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

                    <!-- <textarea type="text" name="contents" class="form-control" v-model="contents"></textarea>
             -->
                    <vue-editor v-model="project.content" />
                    <input
                        type="file"
                        class="form-control"
                        v-on:change="onChange"
                    />

                    <button type="submit" class="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            this.axios
                .patch(`/api/projects/${this.$route.params.id}`, this.project)
                .then((res) => {
                    // this.$router.push({ name: "home" });
                });
        },
        onChange(e) {
            this.project.file = e.target.files[0];
        },
    },
};
</script>
