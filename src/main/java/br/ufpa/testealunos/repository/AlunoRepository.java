package br.ufpa.testealunos.repository;

import br.ufpa.testealunos.domain.Aluno;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Aluno entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {

    @Query(value = "select distinct aluno from Aluno aluno left join fetch aluno.turmas",
        countQuery = "select count(distinct aluno) from Aluno aluno")
    Page<Aluno> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct aluno from Aluno aluno left join fetch aluno.turmas")
    List<Aluno> findAllWithEagerRelationships();

    @Query("select aluno from Aluno aluno left join fetch aluno.turmas where aluno.id =:id")
    Optional<Aluno> findOneWithEagerRelationships(@Param("id") Long id);

}
