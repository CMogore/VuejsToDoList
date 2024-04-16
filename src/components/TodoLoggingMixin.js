export const TodoLoggingMixin = {
    methods: {
      logTodoAction(action, todo) {
        alert(`${action} todo item: "${todo.text}"`);
      }
    }
  };
  