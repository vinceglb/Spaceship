import dateformat from 'dateformat'

export enum Temps {
  PASSE,
  FUTUR
}

export default {
  getNow(): Date {
    const dateNow = new Date()
    const strNow = dateformat(dateNow, 'yyyy-mm-dd')
    const now = new Date(strNow)
    return now
  },

  getStrFromDate(strDate: string): { str: string; ok: boolean } {
    const now = this.getNow()
    const demain = this.addDays(now, 1)
    const hier = this.addDays(now, -1)
    const date = new Date(strDate)

    if (now.getTime() === date.getTime()) {
      return { str: "aujourd'hui", ok: false }
    } else if (demain.getTime() === date.getTime()) {
      return { str: 'demain', ok: false }
    } else if (hier.getTime() === date.getTime()) {
      return { str: 'hier', ok: false }
    } else {
      return { str: dateformat(date, 'd mmm.'), ok: true }
    }
  },

  addDays(oldDate: Date, days: number): Date {
    const date = new Date(oldDate.valueOf())
    date.setDate(date.getDate() + days)
    return date
  },

  getTemps(strDate: string): Temps {
    const date = new Date(strDate)
    const now = this.getNow()
    if (now < date) {
      return Temps.FUTUR
    } else if (now > date) {
      return Temps.PASSE
    } else {
      return Temps.FUTUR
    }
  },

  formatStartDate(startDate: string | null): string {
    if (startDate === null) {
      return ''
    }

    switch (this.getTemps(startDate)) {
      case Temps.PASSE: {
        let debut = 'A débuté '
        const ok = this.getStrFromDate(startDate)
        if (ok.ok === true) {
          debut += 'le '
        }
        debut += ok.str
        return debut
      }
      case Temps.FUTUR: {
        let debut = 'Débute '
        const ok = this.getStrFromDate(startDate)
        if (ok.ok === true) {
          debut += 'le '
        }
        debut += ok.str
        return debut
      }
    }
  },

  formatEndDate(endDate: string | null): string {
    if (endDate === null) {
      return ''
    }

    let debut = 'Pour '
    const ok = this.getStrFromDate(endDate)
    if (ok.ok === true) {
      debut += 'le '
    }
    debut += ok.str
    return debut
  }
}
