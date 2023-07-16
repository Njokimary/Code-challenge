// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
  // Constants for speed limit, demerit points per kilometer, and maximum allowed demerit points
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const maxDemeritPoints = 12;

  // Check if the speed is below the speed limit
  if (speed < speedLimit) {
    // Return "Ok" if speed is within the limit
    return "Ok"; 
  } else {
    // Calculate the excess speed
    const excessSpeed = speed - speedLimit; 
     // Calculate the demerit points
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

    // Check if demerit points exceed the maximum allowed
    if (demeritPoints > maxDemeritPoints) {
      return "License suspended"; // Return "License suspended" if demerit points exceed the limit
    } else {
      return "Points: " + demeritPoints; // Return the number of demerit points
    }
  }
}

const speed = 80;
console.log(calculateDemeritPoints(speed)); 
