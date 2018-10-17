package br.ufpa.testealunos.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import br.ufpa.testealunos.domain.enumeration.TipoTurma;

/**
 * A Turma.
 */
@Entity
@Table(name = "turma")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Turma implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cod")
    private String cod;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo")
    private TipoTurma tipo;

    @ManyToMany(mappedBy = "turmas")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Aluno> alunos = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public Turma nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCod() {
        return cod;
    }

    public Turma cod(String cod) {
        this.cod = cod;
        return this;
    }

    public void setCod(String cod) {
        this.cod = cod;
    }

    public TipoTurma getTipo() {
        return tipo;
    }

    public Turma tipo(TipoTurma tipo) {
        this.tipo = tipo;
        return this;
    }

    public void setTipo(TipoTurma tipo) {
        this.tipo = tipo;
    }

    public Set<Aluno> getAlunos() {
        return alunos;
    }

    public Turma alunos(Set<Aluno> alunos) {
        this.alunos = alunos;
        return this;
    }

    public Turma addAlunos(Aluno aluno) {
        this.alunos.add(aluno);
        aluno.getTurmas().add(this);
        return this;
    }

    public Turma removeAlunos(Aluno aluno) {
        this.alunos.remove(aluno);
        aluno.getTurmas().remove(this);
        return this;
    }

    public void setAlunos(Set<Aluno> alunos) {
        this.alunos = alunos;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Turma turma = (Turma) o;
        if (turma.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), turma.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Turma{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", cod='" + getCod() + "'" +
            ", tipo='" + getTipo() + "'" +
            "}";
    }
}
