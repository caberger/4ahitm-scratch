package at.ac.htl.features.chuck;

import java.sql.Date;
import java.time.ZoneId;

import org.hibernate.annotations.CreationTimestamp;

import at.ac.htl.Mapper;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
class TbJoke {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String jokeText;
}

@ApplicationScoped
class ChuckNorrisMapper implements Mapper<ChuckNorris, TbJoke> {
    public ChuckNorris fromEntity(TbJoke entity) {
        return new ChuckNorris(
            entity.id,
            entity.jokeText);
    }
    @Override
    public TbJoke toEnttiy(ChuckNorris dto) {
        throw new UnsupportedOperationException("Unimplemented method 'toEnttiy'");
    }
}

