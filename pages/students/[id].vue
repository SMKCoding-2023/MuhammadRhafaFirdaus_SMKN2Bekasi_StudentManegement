<template>
    
    <section>
        <div :class="{
        'dark': isDarkMode,
        'light': !isDarkMode,
        }"
         
        >
            <div class="container flex justify-center items-center">
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10 mb-5"  :style="{ backgroundColor: isDarkMode ? '#1a202c' : '#ffffff' }">
             
              

          <form class="space-y-6" @submit.prevent="updateStudent">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">Edit Data</h5>

              <div>
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="nama" v-model="student.name"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form-control"   placeholder="name@company.com" >
              </div>

              <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Id</label>
                  <input type="text" name="Kelas" v-model="student.studentId" placeholder="77725361" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form-control">
              </div>

              <div>
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="text" name="email" v-model="student.email" placeholder="email@example.com" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form-control">
              </div>

              <div>
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                  <input type="text" name="phone" v-model="student.phone" placeholder="+62 " class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form-control">
              </div>
             
              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">update </button>
              <div>
                <button @click="toggleDarkMode" class="btn rounded-xl btn-primmary w-auto px-30  "
                        :style="{ backgroundColor: isDarkMode ?  '#ffffff' : '#1a202c'}" type="button"
>                       {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}  </button>
                <NuxtLink to="/students" class="btn rounded-xl ">Back</NuxtLink>
              </div>
          </form>
            </div>
      
            
         
        </div>
        </div>
        
    </section>

</template>


<script>

import axios from 'axios';

export default {
    name: "studentEdit",
  data() {
    return {
      isDarkMode: true,
      idStudent: '',
      student: {},
      isLoading : false,
      isLoadingTitle: 'loading'
    };
  },
  mounted() {

    this.idStudent = this.$route.params.id
    //alert(this.idStudent);

    this.getStudents(this.idStudent);
  },
  methods: {
    
    getStudents(idStudent){

        axios.get(`http://localhost:8000/api/students/${idStudent}/edit`).then(res =>{

            console.log(res);
            this.student = res.data.student;
        });
    },

    updateStudent(){
      // this.isLoading = true;
      // this.isLoadingTitle = "Saving"

      axios.put(`http://127.0.0.1:8000/api/students/${this.idStudent}/edit`, this.student).then(res =>{

        this.student.name = '';
        this.student.studentId = '';
        this.student.email = '';
        this.student.phone = '';

        console.log(res, 'res');
        alert(res.data.message);
      });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>
