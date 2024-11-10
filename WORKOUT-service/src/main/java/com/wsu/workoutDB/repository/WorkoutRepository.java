package com.wsu.workorderproservice.repository;

import com.wsu.workorderproservice.model.Workout;

import jakarta.validation.constraints.Null;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {

    @Query(nativeQuery = true, value = 
        "SELECT e.workout_id AS workoutId"
            +", e.runner_id as runnerID"
            +", e.evaluation_id as evaluationId"
            +", e.type as type"
        +" FROM workout e"
        +" WHERE (:search IS NULL"
            +" OR (e.workout_id LIKE %:search%"
            +" OR e.runner_id LIKE %:search%"
            +" OR e.evaluation_id LIKE %:search%"
        +"))"
    )

    Page<Object[]> findBySearch(String search, Pageable pageable);

    boolean existsById(int id);

}

