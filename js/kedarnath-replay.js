// kedarnath-replay.js
// Drives the hour-by-hour 2013 timeline comparison

export class KedarnathReplay {
    constructor(timeline) {
        this.timeline = timeline;
        this.currentStep = 0;
    }

    nextStep() {
        if (this.currentStep < this.timeline.length - 1) {
            this.currentStep++;
        }
        return this.timeline[this.currentStep];
    }

    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
        }
        return this.timeline[this.currentStep];
    }

    getCurrentState() {
        return this.timeline[this.currentStep];
    }

    reset() {
        this.currentStep = 0;
    }
}
