import Dexie from "dexie";

export interface CardsInterface {
  id: string;
  nameRu: string;
  nameEn: string;
  nameEs: string;
}

interface MyDatabase extends Dexie {
  CardStore: Dexie.Table<CardsInterface, string>;
}

export interface ListInterface {
  id: string;
  name: string;
}

interface MyDatabase extends Dexie {
  listStore: Dexie.Table<ListInterface, string>;
}

const db = new Dexie("dbLists") as MyDatabase;
db.version(1.1).stores({
  listStore: "id, name",
  CardStore: "id, nameRu, nameEn, nameEs",
});

export default db;
