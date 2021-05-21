// Code your solution in this file!
function distanceFromHqInBlocks(locate) {
    let dist
    const hq = 42
    if (locate >= hq) {
        dist = locate - hq
    } else if (locate < hq) {
        dist = hq - locate
    }
return dist
}

function distanceFromHqInFeet(locate) {
    let distFeet
    distFeet = distanceFromHqInBlocks(locate) * 264
    return distFeet
}

function distanceTravelledInFeet(start, destination) {
    let dist
    if (start >= destination) {
        dist = start - destination
    } else if (destination > start) {
        dist = destination - start
    }
    return (dist * 264)
}

function calculatesFarePrice(start, destination) {
   let price = distanceTravelledInFeet(start, destination)
   if (price < 400) {
        return (0)
   } else if (price >= 400 && price <= 2000) {
       return (price - 400) / 50
   } else if (price > 2000 && price <= 2500) {
       return (25)
   } else if (price > 2500) {
       return 'cannot travel that far'
   }
}