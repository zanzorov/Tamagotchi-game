const tamagotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus: function () {
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      return `${this.name} умер :(`;
    }
    const mealSatus = this.meal < 3 ? "Я голоден" : "Я не голоден";
    const energyStatus = this.energy < 3 ? "Я хочу спать" : "Я не хочу спать";
    const moodStatus = this.mood < 3 ? "Мне скучно" : "Мне весело";
    return `Имя: ${this.name}, Еда: ${mealSatus} (${this.meal}), Энергия: ${energyStatus} (${this.energy}), Настроение: ${moodStatus} (${this.mood}).`;
  },
  setName: function (newName) {
    this.name = newName;
  },
  eat: function () {
    if (this.meal < 5) {
      ++this.meal;
    }
    --this.mood;
  },
  sleep: function () {
    if (this.energy < 5) {
      ++this.energy;
    }
    --this.meal;
  },
  play: function () {
    if (this.mood < 5) {
      ++this.mood;
    }
    --this.energy;
  },
  changeName: function () {
    if (this.energy < 3) {
      return (this.name = "Слабак");
    }
  },
};
console.log(tamagotchi.getStatus());
tamagotchi.setName("Tom");
console.log(tamagotchi.getStatus());
tamagotchi.eat();
console.log(tamagotchi.getStatus());
tamagotchi.sleep();
console.log(tamagotchi.getStatus());
tamagotchi.play();
console.log(tamagotchi.getStatus());
