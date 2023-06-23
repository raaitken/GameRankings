package com.example.gamerankings.models;

public class GameMatch {

    public static float calculateProbability(float rating1, float rating2){
        return 1.0f * 1.0f / (1 + 1.0f * (float) (Math.pow(10, 1.0f * (rating1 - rating2) / 400)));
    }

    public static void EloRating(float Ra, float Rb, int K, boolean d){
        float Pb = calculateProbability(Ra, Rb);

        float Pa = calculateProbability(Rb, Ra);

        if (d) {
            Ra = Ra + K * (1 - Pa);
            Rb = Rb + K * (0 - Pb);
        }

        else {
            Ra = Ra + K * (0 - Pa);
            Rb = Rb + K * (1 - Pb);
        }

        System.out.print(
                "Ra = "
                        + (Math.round(Ra * 1000000.0) / 1000000.0)
                        + " Rb = "
                        + Math.round(Rb * 1000000.0) / 1000000.0);
    }
}
