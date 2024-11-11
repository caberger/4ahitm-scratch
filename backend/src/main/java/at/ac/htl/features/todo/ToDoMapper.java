package at.ac.htl.features.todo;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ToDoMapper {
    public ToDoDto toResource(ToDo todo) {
        return new ToDoDto(
            todo.id, 
            todo.userId,
            todo.title,
            todo.completed);
    }
}
