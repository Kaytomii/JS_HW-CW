import Marker from "./Marker.js";

class RefillableMarker extends Marker {
    refill(amount) {
        this.ink += amount;
        if (this.ink > 100) this.ink = 100;
    }
}

export default RefillableMarker;