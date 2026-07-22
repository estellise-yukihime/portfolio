export class Accent {
  private readonly _colors
  private _index = 0

  constructor(colors: string[]) {
    this._colors = colors
  }

  get color(): string {
    return this._colors[this._index++ % this._colors.length]
  }
}

export const Colors = {
  text: ['text-accent', 'text-primary', 'text-secondary']
}
