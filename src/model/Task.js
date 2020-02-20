import dateformat from 'dateformat'

export default class Task {
  constructor(titre, description, startDate, endDate, priorite, myDay) {
    this.id = generateId()
    this.done = false

    this.titre = titre
    this.description = description
    this.startDate = startDate
    this.endDate = endDate
    this.priorite = priorite
    this.myDay = myDay
  }

  isOverdue() {
    const now = getNow()
    if (this.endDate != null) {
      const end = new Date(this.endDate)
      return now > end && this.done === false
    } else {
      return false
    }
  }

  isEndDateToday() {
    const now = getNow()
    if (this.endDate != null) {
      const end = new Date(this.endDate)
      return now.getTime() === end.getTime() && this.done === false
    } else {
      return false
    }
  }

  isStartDateToday() {
    const now = getNow()
    if (this.startDate != null) {
      const start = new Date(this.startDate)
      return now.getTime() === start.getTime() && this.done === false
    } else {
      return false
    }
  }

  formatDate() {
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

function getNow() {
  const dateNow = new Date()
  const strNow = dateformat(dateNow, 'yyyy-mm-dd')
  const now = new Date(strNow)
  return now
}

function getStrFromDate(strDate) {
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

function addDays(oldDate, days) {
  const date = new Date(oldDate.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

function generateId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random()
    .toString(36)
    .substr(2, 9)
}
