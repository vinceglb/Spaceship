import dateUtil from '~/utils/dateUtil'

export default class Task {
  id: string
  done: boolean
  titre: string
  description: string | null
  startDate: string | null
  endDate: string | null
  myDay: boolean
  // priorite:

  constructor(
    titre: string,
    description: string | null,
    startDate: string | null,
    endDate: string | null,
    myDay: boolean
  ) {
    this.id = generateId()
    this.done = false
    this.titre = titre
    this.description = description
    this.startDate = startDate
    this.endDate = endDate
    this.myDay = myDay
  }

  isOverdue(): boolean {
    const now = dateUtil.getNow()
    if (this.endDate != null) {
      const end = new Date(this.endDate)
      return now > end && this.done === false
    } else {
      return false
    }
  }

  isEndDateToday(): boolean {
    const now = dateUtil.getNow()
    if (this.endDate != null) {
      const end = new Date(this.endDate)
      return now.getTime() === end.getTime() && this.done === false
    } else {
      return false
    }
  }

  isStartDateToday(): boolean {
    const now = dateUtil.getNow()
    if (this.startDate != null) {
      const start = new Date(this.startDate)
      return now.getTime() === start.getTime() && this.done === false
    } else {
      return false
    }
  }

  isOnGoing(): boolean {
    const now = dateUtil.getNow()
    if (this.startDate != null && this.endDate != null) {
      const start = new Date(this.startDate)
      const end = new Date(this.endDate)
      return now >= start && now <= end && this.done === false
    } else if (this.startDate != null && this.endDate == null) {
      const start = new Date(this.startDate)
      return now >= start && this.done === false
    } else if (this.startDate == null && this.endDate != null) {
      const end = new Date(this.endDate)
      return now < end && this.done === false
    } else {
      return false
    }
  }

  formatDate(): string {
    if (this.startDate && this.endDate) {
      return (
        dateUtil.getStrFromDate(this.startDate).str +
        ' - ' +
        dateUtil.getStrFromDate(this.endDate).str
      )
    } else if (this.startDate) {
      return this.formatStartDate()
    } else if (this.endDate) {
      return this.formatEndDate()
    } else {
      return ''
    }
  }

  formatStartDate(): string {
    return dateUtil.formatStartDate(this.startDate)
  }

  formatEndDate(): string {
    return dateUtil.formatEndDate(this.endDate)
  }
}

function generateId(): string {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random()
    .toString(36)
    .substr(2, 9)
}
