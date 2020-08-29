import { ITodo } from "../interfaces/ITodo";

class ApiController {
    getTodos = (): Promise<ITodo[]> => (
        fetch('http://localhost:5000/todos')
        .then(response => response.json())
        .catch(err => {
            console.error('cant fetch todos: ', err);
            return null;
        })
    )

    createTodo = (data: any) => {
        console.log(data);
    }
}

export default new ApiController();
