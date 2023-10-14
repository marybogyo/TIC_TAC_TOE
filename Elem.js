class Elem {
  /**az osztályban az adattagokon végezzük a műveleteket */
  /**megjelenítse az oldalon azt a zegyetlen elemet */
  constructor(szuloElem) {
    /**beállítja az adattagokat */
    this.szuloElem = szuloElem;
    this.#htmlOsszeallit();
    //**a this a konkrét osztálypéldányra/objektumra mutat */
    /**megfojuk(csinálunk egy változót) a html elemkhez */
    this.divElem = this.szuloElem.children("div:last-child "); /**div:*/
    this.pElem = this.divElem.children("p");
    /*console.log(this.divElem);
    console.log(this.pElem);*/
    this.divElem.on("click", () => {
      /*this.setErtek("X");*/
      this.#esemenyTrigger("elemKivalszt");
    });
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }

  #htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }
  /** saját esemény létrehozása, az osztály tud magáról elmondani dolgokat, információkat ad át saját magáról*/
  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default Elem;
