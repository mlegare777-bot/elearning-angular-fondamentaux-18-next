class VideoGame {
    private _label: string;

    constructor(label: string) {
        this._label = label;
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }
}

const videoGame = new VideoGame("Final 11");
videoGame.label = "Final 22";

