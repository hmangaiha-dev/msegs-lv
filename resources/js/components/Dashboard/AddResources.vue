<template>
   
   
                                    <!-- <button
                                        class="btn btn-danger"
                                        @click="deleteProduct(resources.id)"
                                    >
                                        Delete
                                    </button>
                          -->
                          <div>
        <div class="" >
                <div class="card" style="width:80vw">
                    <div class="card-header">Add Resources</div>

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
                            <!-- <button class="btn btn-primary btn-block">
                                Upload
                            </button> -->

                            <hr style="opacity:10%"/>
                            <div style="margin:auto;text-align:center">
                   <button type="submit" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"> Add</button>
                </div>
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