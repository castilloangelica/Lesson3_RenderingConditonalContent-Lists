const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            showList: true,
            button: []
  
        };
    },

    methods: {  
        buttonClick() {
            if (this.showList === true) {
                return 'Hide List';
            } else if (this.showList === false) {
                return 'Show List';
            }
            this.button;
        },
    
    addTask() {
        this.tasks.push(this.enteredTask);
    },
},
});
app.mount('#assignment');