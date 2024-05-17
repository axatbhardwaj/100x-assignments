
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let ss = new Animal('Snake', 0)
console.log(ss.describe()) // 'Snake has 0 legs'
