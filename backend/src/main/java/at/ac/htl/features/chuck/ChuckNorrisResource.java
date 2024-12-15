package at.ac.htl.features.chuck;

import java.util.List;

import at.ac.htl.Mapper;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/chuck")
@Produces(MediaType.APPLICATION_JSON)
public class ChuckNorrisResource {
    @Inject Mapper<ChuckNorris, TbJoke> mapper;
    @Inject ChuckNorrisRepository repository;

    @GET
    public List<ChuckNorris> all() {
        return repository.listAll().stream().map(mapper::fromEntity).toList();
    }
    @GET
    @Path("/random")
    public ChuckNorris randomJoke() {
        return mapper.fromEntity(repository.getRandomJoke());
    }
}


@ApplicationScoped
class ChuckNorrisRepository implements PanacheRepository<TbJoke> {
    TbJoke getRandomJoke() {
        var numberOfJokes = count();
        var randomJokeNumber = (int)(numberOfJokes * Math.random());
        Log.infof("sending joke %d", randomJokeNumber);
        var query = "select j from TbJoke j";
        var result = getEntityManager()
            .createQuery(query, TbJoke.class)
            .setFirstResult(randomJokeNumber)
            .setMaxResults(1)
            .getResultList()
            ;

        return result.getFirst();
    }
}
