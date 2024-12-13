package at.ac.htl;

public interface Mapper<T, E> {
    T fromEntity(E entity);
    E toEnttiy(T dto);
}
