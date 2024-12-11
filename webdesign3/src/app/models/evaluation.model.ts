
export interface Evaluation {
    evaluation_id: number;
    runner_id: number;
    workout_id: number;
    evaluation_date: Date;
    city: string;
    state_code: string;
    start_time: number;
    end_time: number;
    distance: number;
    average_heart_rate: number;
    feel_score_rating: number;
    comments: string;

}