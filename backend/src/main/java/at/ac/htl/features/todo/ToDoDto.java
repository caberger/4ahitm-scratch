package at.ac.htl.features.todo;

public record ToDoDto(
    Long id,
    Long userId,
    String title,
    boolean completed
) {
}
