
class Carbon {

  constructor(datetime) {
    this.datetime = new Date(datetime)
  }

  static now() {
    return new Date()
  }

  static today() {
    const now = this.now()
    now.setHours(0, 0, 0, 0)
    return now
  }

  static isExpired(datetime) {
    if (!datetime) {
      return true
    }
    return this.now() > (new Date(datetime))
  }

  static after({ hours, minutes, seconds, milliseconds } = {}, datetime = null) {
    datetime = datetime ?? this.now()

    const initHours = datetime.getHours()
    const initMinutes = datetime.getMinutes()
    const initSeconds = datetime.getSeconds()
    const initMilliseconds = datetime.getMilliseconds()

    datetime.setHours(initHours + (hours ?? 0))
    datetime.setMinutes(initMinutes + (minutes ?? 0))
    datetime.setSeconds(initSeconds + (seconds ?? 0))
    datetime.setMilliseconds(initMilliseconds + (milliseconds ?? 0))

    return datetime
  }
}


export default Carbon
