function speedDetection(speed) {
    // ...
    if (speed <= speedLimit) {
        return "OK";
    } else {
        // ...
        if (points > maxPoints) {
            return "Points: " + points + ", License suspended";
        } else {
            return "Points: " + points;
        }
    }
}

console.log(speedDetection(80));