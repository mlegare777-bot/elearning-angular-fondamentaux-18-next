"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VideoGame {
    _label;
    constructor(label) {
        this._label = label;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
}
const videoGame = new VideoGame("Final 11");
videoGame.label = "Final 22";
//# sourceMappingURL=main.js.map