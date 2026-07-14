import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgClass } from '@angular/common'
import { Reveal } from '../reveal'

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass, Reveal],
  templateUrl: './pagination.html'
})
export class Pagination {
  @Input({ required: true }) total = 0
  @Input() size = 6
  @Input() page = 1
  @Output() onChange = new EventEmitter<number>()

  get current(): number {
    return Math.max(1, Math.ceil(this.total / this.size))
  }

  get pages(): number[] {
    return Array.from({ length: this.current }, (_, i) => i + 1)
  }

  navigate(n: number): void {
    const clamped = Math.min(Math.max(1, n), this.current)

    if (clamped !== this.page) {
      this.onChange.emit(clamped)
    }
  }
}
