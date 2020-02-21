import dateformat from 'dateformat'

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
    const now = getNow()
    if (this.endDate != null) {
      const end = new Date(this.endDate)
      return now > end && this.done === false
    } else {
      return false
    }
  }

  isEndDateToday(): boolean {
    const now = getNow()
    if (this.endDate != null) {
      const end = new Date(this.endDate)
      return now.getTime() === end.getTime() && this.done === false
    } else {
      return false
    }
  }

  isStartDateToday(): boolean {
    const now = getNow()
    if (this.startDate != null) {
      const start = new Date(this.startDate)
      return now.getTime() === start.getTime() && this.done === false
    } else {
      return false
    }
  }

  formatDate(): string {
    if (this.startDate && this.endDate) {
      return (
        getStrFromDate(this.startDate) + ' - ' + getStrFromDate(this.endDate)
      )
    } else if (this.startDate) {
      return 'Débute ' + getStrFromDate(this.startDate)
    } else if (this.endDate) {
      return 'Pour ' + getStrFromDate(this.endDate)
    } else {
      return ''
    }
  }
}

function getNow(): Date {
  const dateNow = new Date()
  const strNow = dateformat(dateNow, 'yyyy-mm-dd')
  const now = new Date(strNow)
  return now
}

function getStrFromDate(strDate: string): string {
  const now = getNow()
  const demain = addDays(now, 1)
  const hier = addDays(now, -1)
  const date = new Date(strDate)

  if (now.getTime() === date.getTime()) {
    return "aujourd'hui"
  } else if (demain.getTime() === date.getTime()) {
    return 'demain'
  } else if (hier.getTime() === date.getTime()) {
    return 'hier'
  } else {
    return dateformat(date, 'd mmm.')
  }
}

function addDays(oldDate: Date, days: number): Date {
  const date = new Date(oldDate.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

function generateId(): string {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random()
    .toString(36)
    .substr(2, 9)
}
