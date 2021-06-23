<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <div class="container">
        <div class="row justify-content-center">


 <div class="col auto">
        <h2 class="text-center">Projects List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Detail</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects" :key="project.id">
                <td>{{ project.id }}</td>
                <td>{{ project.title }}</td>
                <td>{{ project.subtitle }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <!-- <router-link :to="{name: 'edit', params: { id: project.id }}" class="btn btn-success">Edit</router-link> -->
                        <button class="btn btn-danger" @click="deleteProduct(project.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>







            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">PROJECTS UPLOAD</div>

                    <div class="card-body">

                        <div v-if="success != ''" class="alert alert-success">
                            {{success}}
                        </div>

                        <form @submit="formSubmit" enctype="multipart/form-data">
            <input type="text" name="title" class="form-control" id="title" placeholder="Enter Post Title" v-model="title"/>

            <input type="text" name="subtitle" class="form-control" placeholder="Subtitle" v-model="subtitle"/>
            <input type="text" name="client" class="form-control"  placeholder="Client" v-model="client"/>
            <input type="text" name="hostedat" class="form-control" placeholder="Hosted at" v-model="hostedat"/>
            <input type="text" name="developedby" class="form-control" placeholder="Develoepd by" v-model="developedby"/>
            <input type="text" name="goals" class="form-control" placeholder="Goals" v-model="goals"/>

            <textarea type="text" name="contents" class="form-control" v-model="contents"></textarea>


                            <input type="file" class="form-control" v-on:change="onChange">
                            <button class="btn btn-primary btn-block">Upload</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                projects:[],
                name: '',
                title:'',
                subtitle:'',
                contents:'',
                file: '',
                success: '',

                client:'',
        hostedat:'',
        developedby:'',
        goals:'',
            };
        },
         created(){
     this.axios.get('/api/projects/').then((response)=>{
      console.log(response.data);
      this.projects=response.data;
    });
  },
        methods: {
             deleteProduct(id) { 
                this.axios
                    .delete(`api/projects/${id}`)
                    .then(response => {
                        let i = this.projects.map(data => data.id).indexOf(id);
                        this.projects.splice(i, 1)
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
                        'content-type': 'multipart/form-data'
                    }
                }

                let data = new FormData();
                data.append('title', this.title);
                data.append('subtitle', this.subtitle);
                data.append('contents', this.contents);
                data.append('client', this.client);
                data.append('hostedat', this.hostedat);
                data.append('developedby', this.developedby);
                data.append('goals', this.goals);



                data.append('file', this.file);

                this.axios.post('/api/projects', data, config)
                    .then(function (res) {
                        existingObj.success = res.data.success;
                    })
                    .catch(function (err) {
                        existingObj.output = err;
                    });
            }
        }
    }

</script>