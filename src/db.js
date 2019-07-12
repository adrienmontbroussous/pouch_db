import pdv from "./pdv.json";
import PouchDB from "pouchdb";
PouchDB.plugin(require("pouchdb-find").default);

export default class DB {
  constructor(name) {
    this.db = new PouchDB(name, { size: 100 });
  }

  async getAllNotes() {
    let allNotes = await this.db.allDocs({ include_docs: true });
    let notes = {};
    allNotes.rows.forEach(n => (notes[n.id] = n.doc));

    return notes;
  }

  async initDatabase() {
    for (let i = 0; i < 1000; i++) {
      this.insertPointDeVente({ ...pdv, id: i });
    }
    this.insertPointDeVente({ ...pdv, nom: "CARREFOUR" });
  }

  async cleanDatabase() {
    let allNotes = await this.db.allDocs({ include_docs: true });
    allNotes.rows.forEach(n => this.db.remove(n));
    return Promise.resolve();
  }

  async insertPointDeVente(pdv) {
    let res = "";
    res = await this.db.put({
      ...pdv,
      _id: `${pdv.id}`
    });

    return res;
  }
  async getPointDeVenteFromNom(nom) {
    let startTime = new Date().getTime();
    this.db
      .createIndex({ index: { fields: ["nom"] } })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
      });
    const result = this.db.find({
      selector: { nom: nom }
    });
    console.log("temps ecoulé : ", new Date().getTime() - startTime);
    return result;
  }
}
