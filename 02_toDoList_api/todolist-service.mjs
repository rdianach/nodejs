export class TodolistService {
    todolist = ["Belajar", "NodeJS", "Pemula"]; // hardcode data

    getJsonTodoList(){
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return{
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(request, response){
        response.write(this.getJsonTodoList());
        response.end();
    }

    createTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); // buffer to string 
            this.todolist.push(body.todo);

            response.write(this.getJsonTodoList());
            response.end();
        })
    }

    updateTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); // buffer to string 
            if(this.todolist[body.id]){
                this.todolist[body.id] = body.todo;
            }

            response.write(this.getJsonTodoList());
            response.end();
        })
    }

    deleteTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); // buffer to string 
            if(this.todolist[body.id]){
                //delete this.todolist[body.id]; // jika pakai ini akan jadi null
                this.todolist.splice(body.id, 1); // hapus 1, geser
            }

            response.write(this.getJsonTodoList());
            response.end();
        })
    }
}