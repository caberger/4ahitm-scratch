package at.ac.htl.features.todo;

import java.util.List;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/todos")
@Produces(MediaType.APPLICATION_JSON)
public class ToDoResource {
    @Inject ToDoRepository todoRepository;

    @GET
    public List<ToDo> all() {
        var todos = todoRepository.findAll().list();
        return todos;
    }
}
