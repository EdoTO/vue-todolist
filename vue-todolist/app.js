const app = new Vue({

    el: '#app',
    data: {
        newTodo: '',
        todoList: [
            {
                text: 'Andare al cinema',
                done: false
            },
            {
                text: 'Comprare il latte',
                done: true
            },
            {
                text: 'Fare la nona dose',
                done: false
            }
        ]
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.length < 6) {
                alert('ma che stai addì?')
                return
            }

            const newTodo = {
                text: this.newTodo,
                done: false
            }
            this.todoList.push(this.newTodo);
        },

        deleteTodo(i) {
            this.todoList.splice(i,1)
        },

        toggle: function(i) {
            const {done} = this.todoList[i]
            this.todoList[i].done = !done
        }
    },

})

