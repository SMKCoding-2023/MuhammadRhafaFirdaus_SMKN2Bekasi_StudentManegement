<template>
  <div class="container flex justify-center m-5">
    <div class="max-xl p-6 w-100 rounded-xl shadow bg-gray-800 border-gray-700">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-white text-center"
        >
          Student Data List
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-200">
        You can Add, Edit and Delete Student Data Here .
      </p>
      <div class="flex justify-center items-center">
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <NuxtLink to="students/create">Add Student</NuxtLink></a
        >
      </div>
    </div>
</div>
<!-- tabel data siswa -->
<div class="container m-5 flex justify-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-400"
        >
          <thead
            class="text-xs  uppercase bg-gray-700 text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">id</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Student Id</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Phone</th>
              <th scope="col" class="px-6 py-3">Action</th>
         
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(student, index) in students" :key="index" class=" border-b bg-gray-800 border-gray-700">
              <td
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap text-white"
              >
                {{ student.id }}
              </td>
              <td class="px-6 py-4">{{student.name}}</td>
              <td class="px-6 py-4">{{student.studentId}}</td>
              <td class="px-6 py-4">{{student.email}}</td>
              <td class="px-6 py-4">{{student.phone}}</td>
              <td class="px-6 py-4 ">
                <NuxtLink :to="`/students/${student.id}`" class="font-medium text-blue-600 m-4 hover:text-blue-500 hover:underline">Edit</NuxtLink>
                <button @click="deleteStudent($event, student.id)" class="font-medium text-blue-600 m-4 hover:text-blue-500 hover:underline">Hapus</button>
              </td>
            </tr>
  
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "student",
  data() {
    return {
      students: {},
    };
  },
  mounted() {
    this.getstudents();
  },
  methods: {
    getstudents() {
      axios.get("http://127.0.0.1:8000/api/students").then(res => {
        console.log(res)
        this.students = res.data.students;
      });
    },
    deleteStudent(event, idStudent) {

      if(confirm('Do You Want Delete This?')){
        event.target.innerText = 'Deleting';
        axios.delete(`http://localhost:8000/api/students/${idStudent}/delete`).then(res =>{

          event.target.innerText = 'Delete';
          this.getstudents();

        });
      }

    },
  },
};
</script>
