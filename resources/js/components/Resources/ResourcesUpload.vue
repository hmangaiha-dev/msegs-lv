<template>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
    />

    <div class="container">
        <div class="row justify-content-center">
            <div class="col auto">
                <h2 class="text-center">Resources List</h2>

                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <!-- <th>Actions</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="resources in resourcess" :key="resources.id">
                            <td>{{ resources.id }}</td>
                            <td>{{ resources.title }}</td>
                            <td>{{ resources.date }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <!-- <router-link
                                        :to="{
                                            name: 'resourcessupdate',
                                            params: { id: resources.id },
                                        }"
                                        class="btn btn-success"
                                        >Edit</router-link
                                    > -->
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteProduct(resources.id)"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
        </div>
        <div class="container" >
                <div class="card" style="width:80vw">
                    <div class="card-header">PROJECTS UPLOAD</div>

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
                                placeholder="Subtitle"
                                v-model="date"
                            />
                          

                            <!-- <textarea type="text" name="contents" class="form-control" v-model="contents"></textarea>
             -->

                            <input
                                type="file"
                                class="form-control"
                                v-on:change="onChange"
                            />
                            <button class="btn btn-primary btn-block">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            resourcess: [],
            
            title: "",
            date: "",
       
            file: "",
            success: "",

          
        };
    },
    created() {
        this.axios.get(`/api/resources/index`).then((response) => {
            console.log(response.data);
            this.resourcess = response.data;
        });
    },
    methods: {
        deleteProduct(id) {
            this.axios.delete(`api/resources/${id}`).then((response) => {
                let i = this.resourcess.map((data) => data.id).indexOf(id);
                this.resourcess.splice(i, 1);
            });
        },
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
            data.append("date", this.date);
            data.append("file", this.file);

            this.axios
                .post(`/api/resources/store`, data, config)
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
